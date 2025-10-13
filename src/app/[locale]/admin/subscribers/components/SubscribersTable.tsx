import { Table } from "@/components/Table";
import { CalendarDays, CheckCircle, Mail, User, XCircle } from "lucide-react";

interface Subscriber {
  id: number;
  email: string;
  user?: {
    id: string;
    name: string;
  } | null;
  createdAt: string;
  confirmedAt?: string | null;
  canceledAt?: string | null;
}

export function SubscribersTable() {
  const subscribersMock: Subscriber[] = [
    {
      id: 1,
      email: "ana.silva@example.com",
      user: { id: "u1", name: "Ana Silva" },
      createdAt: "2025-01-10T09:24:00Z",
      confirmedAt: "2025-01-10T10:00:00Z",
      canceledAt: null,
    },
    {
      id: 2,
      email: "carlos.oliveira@example.com",
      user: null,
      createdAt: "2025-02-20T08:00:00Z",
      confirmedAt: null,
      canceledAt: null,
    },
    {
      id: 3,
      email: "marina.santos@example.com",
      user: { id: "u2", name: "Marina Santos" },
      createdAt: "2025-03-15T13:30:00Z",
      confirmedAt: "2025-03-15T13:45:00Z",
      canceledAt: "2025-04-01T10:00:00Z",
    },
  ];

  const tableColumns = [
    { key: "id", label: "Id", sortable: true },
    {
      key: "email",
      label: "Email",
      sortable: true,
      icon: <Mail className="w-4 h-4" />,
    },
    {
      key: "user",
      label: "Usuário Vinculado",
      sortable: true,
      icon: <User className="w-4 h-4" />,
    },
    {
      key: "createdAt",
      label: "Criado em",
      sortable: true,
      icon: <CalendarDays className="w-4 h-4" />,
    },
    {
      key: "confirmedAt",
      label: "Confirmado em",
      sortable: true,
      icon: <CheckCircle className="w-4 h-4" />,
    },
    {
      key: "canceledAt",
      label: "Cancelado em",
      sortable: true,
      icon: <XCircle className="w-4 h-4" />,
    },
    { key: "status", label: "Status", sortable: true },
    { key: "actions", label: "Ações" },
  ];

  const getStatus = (sub: Subscriber) => {
    if (sub.canceledAt) return "Cancelado";
    if (sub.confirmedAt) return "Confirmado";
    return "Pendente";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmado":
        return "border-green-500 text-green-400 bg-green-500/10";
      case "Cancelado":
        return "border-red-500 text-red-400 bg-red-500/10";
      default:
        return "border-yellow-500 text-yellow-400 bg-yellow-500/10";
    }
  };

  const tableData = subscribersMock.map((sub) => {
    const status = getStatus(sub);
    return {
      id: { value: sub.id },
      email: {
        value: sub.email,
        className: "font-medium text-slate-200 truncate",
      },
      user: {
        value: sub.user?.name ?? "—",
        className: sub.user
          ? "text-blue-400 font-semibold"
          : "text-slate-500 italic",
      },
      createdAt: {
        value: new Date(sub.createdAt).toLocaleDateString("pt-BR"),
        sortValue: sub.createdAt,
        className: "text-right",
      },
      confirmedAt: {
        value: sub.confirmedAt
          ? new Date(sub.confirmedAt).toLocaleDateString("pt-BR")
          : "—",
        sortValue: sub.confirmedAt,
        className: "text-right",
      },
      canceledAt: {
        value: sub.canceledAt
          ? new Date(sub.canceledAt).toLocaleDateString("pt-BR")
          : "—",
        sortValue: sub.canceledAt,
        className: "text-right",
      },
      status: {
        value: status,
        itemClassName: `flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(status)}`,
      },
      actions: {
        value: sub.canceledAt ? "Deletar" : "Cancelar",
        className:
          "text-center font-semibold text-blue-400 cursor-pointer hover:underline",
      },
    };
  });

  return (
    <div className="animate-fade-in">
      <Table
        tableId="subscribers"
        caption="Subscritos para recebimento de Newsletter"
        showSearchBar={true}
        tableColumns={tableColumns}
        data={tableData}
      />
    </div>
  );
}
