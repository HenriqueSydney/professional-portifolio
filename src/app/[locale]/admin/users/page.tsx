import { makeUserRepository } from "@/repositories/factories/makeUserRepository";
import { UserQuery } from "./components/UserQuery";
import { UsersCard } from "./components/UsersCard";
import { repositoryClient } from "@/lib/repositoryClient";
import { EmptyState } from "@/components/EmptyState";
import { User } from "lucide-react";

type IUsers = {
  searchParams: Promise<{
    query?: string;
  }>;
};

export default async function Users({ searchParams }: IUsers) {
  const { query = "" } = await searchParams;

  const userRepository = makeUserRepository();
  const [usersError, users] = await repositoryClient(
    "userRepository.fetchUsers(query)",
    () => userRepository.fetchUsers(query),
    {
      cache: "no-cache",
    }
  );

  return (
    <div className="min-h-screen bg-background w-full">
      <div className="container mx-auto px-4">
        <section className=" mt-8 pb-4 mb-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Usuários</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Usuários registrados no Portifólio
            </p>
          </div>
        </section>
        <section className=" mt-8 pb-4 mb-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <UserQuery />
        </section>
        <section className=" mt-8 pb-4 mb-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          {users && <UsersCard users={users.users} />}
          {(usersError || users.totalOfRecords === 0) && (
            <div className="flex items-center justify-center w-full">
              <div className="flex items-center justify-center lg:w-[70%] w-full">
                <EmptyState
                  title="Nenhum usuário localizado"
                  Icon={<User size={64} />}
                  description="Nenhum usuário localizado. Ou ainda não fizeram login ou algum erro ou os filtros podem não ter retornado um valor válido."
                />
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
