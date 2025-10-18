import { auth } from "@/auth";
import { EmptyState } from "@/components/EmptyState";
import { AppError } from "@/errors/AppError";
import { date } from "@/lib/dayjs";
import { repositoryClient } from "@/lib/repositoryClient";
import { makeUserRepository } from "@/repositories/factories/makeUserRepository";
import {
  Camera,
  Mail,
  Calendar,
  Shield,
  Bell,
  Link2,
  Trash2,
  Eye,
  EyeOff,
  UserCircle,
} from "lucide-react";
import { CloseSession } from "./components/CloseSession";

export default async function UserProfilePage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const operatiorSession = await auth();

  if (!operatiorSession) {
    throw new AppError(
      "Usuário tem que estar logado para consultar os próprios dados"
    );
  }

  if (
    operatiorSession.user.id !== userId &&
    operatiorSession.user.role !== "ADMIN"
  ) {
    throw new AppError(
      "Apenas o próprio usuário ou o Administrador pode ter acesso a dados de usuário"
    );
  }

  const userRepository = makeUserRepository();

  const [userError, user] = await repositoryClient(
    "userRepository.findUserByIdAndReturnAllInfo(userId)",
    () => userRepository.findUserByIdAndReturnAllInfo(userId),
    {
      cache: "no-cache",
    }
  );

  if (userError || !user) {
    throw new AppError("User not found");
  }

  const formatDate = (dateString: Date) => {
    if (!dateString) return "N/A";
    return date(dateString).format("DD/MM/YYYY HH:MM");
  };

  const getProviderIcon = (provider: string) => {
    const icons = {
      google: "🔵",
      github: "⚫",
      facebook: "🔷",
      twitter: "🐦",
    } as const;

    return icons[provider as keyof typeof icons] || "🔗";
  };

  const isSameUser = operatiorSession.user.id === userId;

  return (
    <div className="min-h-screen py-8 px-4 mt-15">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        {!isSameUser && (
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Perfil de Usuário</h1>
          </div>
        )}

        {isSameUser && (
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Meu Perfil</h1>
            <p className="text-slate-600">
              Gerencie suas informações pessoais e configurações de conta
            </p>
          </div>
        )}

        {/* Main Profile Card */}
        <div className="bg-card rounded-2xl shadow-xl overflow-hidden mb-6 border border">
          <div className="bg-hero-gradient h-32"></div>

          <div className="px-8 pb-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-14 mb-6">
              <div className="flex items-end space-x-4">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-4xl font-bold border-4 border-white shadow-lg">
                    {user.name?.charAt(0) || "U"}
                  </div>
                  <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg hover:bg-slate-50 transition-colors">
                    <Camera className="w-5 h-5 text-slate-700" />
                  </button>
                </div>

                <div className="pb-2">
                  <div className="flex items-center space-x-2">
                    <h2 className="text-2xl font-bold text-primary">
                      {user.name || "Usuário"}
                    </h2>
                    {user.role === "ADMIN" && (
                      <span className="bg-hero-gradient  text-white font-bold text-xs  px-3 py-1 rounded-full">
                        ADMIN
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground flex items-center mt-1">
                    <Mail className="w-4 h-4 mr-1" />
                    {user.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-background/50 rounded-xl p-4 border border-blue-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-semibold ">Membro desde</span>
                </div>
                <p className="text-muted-foreground font-medium">
                  {formatDate(user.createdAt)}
                </p>
              </div>

              <div className="bg-background/50 rounded-xl p-4 border border-green-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-semibold ">
                    Email Verificado
                  </span>
                </div>
                <p className="text-muted-foreground font-medium">
                  {user.emailVerified
                    ? formatDate(user.emailVerified)
                    : "Não verificado"}
                </p>
              </div>

              <div className="bg-background/50 rounded-xl p-4 border border-purple-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Bell className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-semibold ">Newsletter</span>
                </div>
                <p className="text-muted-foreground font-medium">
                  {user.newsLetterSubscription?.confirmedAt
                    ? "Inscrito"
                    : "Não inscrito"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Connected Accounts */}
        <div className="bg-card rounded-2xl shadow-xl p-8 mb-6 border border">
          <div className="flex items-center space-x-3 mb-6">
            <Link2 className="w-6 h-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-primary">
              Contas Conectadas
            </h3>
          </div>

          <div className="space-y-3">
            {user.accounts.map((account, idx) => (
              <div
                key={idx}
                className="bg-background/70 flex items-center justify-between p-4  rounded-xl border hover:shadow-glow transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">
                    {getProviderIcon(account.provider)}
                  </span>
                  <div>
                    <p className="font-semibold capitalize">
                      {account.provider}
                    </p>
                    <p className="text-sm text-slate-600">
                      Conectado em {formatDate(account.createdAt)}
                    </p>
                  </div>
                </div>
                <button className="text-red-600 hover:text-red-700 transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Active Sessions */}
        <div className="bg-card rounded-2xl shadow-xl p-8 border">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-6 h-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-primary">Sessões Ativas</h3>
          </div>

          <div className="space-y-3">
            {user.sessions.length === 0 && (
              <EmptyState
                title="Nenhuma sessão ativa"
                description="Usuário não possui nenhuma sessão ativa"
                Icon={<UserCircle size={64} />}
              />
            )}
            {user.sessions.map((session, idx) => (
              <div key={idx} className="p-4 bg-border rounded-xl border">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold ">Sessão Atual</p>
                  <span className="bg-primary  text-xs font-bold px-3 py-1 rounded-full">
                    Ativa
                  </span>
                </div>

                <div className="space-y-1 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Token:</span>
                    <div className="flex items-center space-x-2">
                      <code className="px-2 py-1 rounded">
                        {operatiorSession.user.role === "ADMIN"
                          ? session.sessionToken
                          : "••••••••••••"}
                      </code>
                    </div>
                  </div>
                  <p>Criada em: {formatDate(session.createdAt)}</p>
                  <p>Expira em: {formatDate(session.expires)}</p>
                </div>

                {isSameUser && <CloseSession />}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-6 text-center text-sm font-bold space-y-4">
          <p>
            ID do Usuário:{" "}
            <code className="border px-2 py-1 rounded text-xs">{user.id}</code>
          </p>
          <p className="mt-1">
            Última atualização: {formatDate(user.updatedAt)}
          </p>
        </div>
      </div>
    </div>
  );
}
