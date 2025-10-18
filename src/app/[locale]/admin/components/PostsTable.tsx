import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Eye,
  Heart,
  MessageCircle,
  Clock,
  TrendingUp,
  XCircle,
} from "lucide-react";
import { Table } from "@/components/Table";
import { makePostsRepository } from "@/repositories/factories/makePostsRepository";
import { repositoryClient } from "@/lib/repositoryClient";
import { EmptyState } from "@/components/EmptyState";
import { date } from "@/lib/dayjs";

export async function PostsTable() {
  const postsRepository = makePostsRepository();
  const [postsError, posts] = await repositoryClient(
    "postRepository.countTotalPosts()",
    () =>
      postsRepository.fetchPostsWithStats({}, { page: 1, numberPerPage: 10 }),
    {
      cache: "no-cache",
    }
  );

  if (postsError) {
    return (
      <EmptyState
        title="Erro ao recuperar os posts"
        description="Um erro parece ter provocado a não recuperação dos posts. Verifique a conexão com o banco de dados e os logs da aplicação"
        Icon={<XCircle size={64} />}
      />
    );
  }

  const getStatus = (
    publishedAt: Date | null
  ): "Publicado" | "Rascunho" | "Agendado" => {
    if (!publishedAt) return "Rascunho";
    if (publishedAt) return "Publicado";
    return "Agendado";
  };

  const getStatusColor = (status: "Publicado" | "Rascunho" | "Agendado") => {
    switch (status) {
      case "Publicado":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Rascunho":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Agendado":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const calculateEngagement = (likes: number, comments: number) => {
    return likes + comments;
  };

  const tableColumns = [
    { key: "key", label: "Id", sortable: true },
    { key: "title", label: "Título", sortable: true },
    {
      key: "views",
      label: "Views",
      sortable: true,
      icon: <Eye className="w-4 h-4" />,
    },
    {
      key: "likes",
      label: "Likes",
      sortable: true,
      icon: <Heart className="w-4 h-4" />,
    },
    {
      key: "comments",
      label: "Coment.",
      sortable: true,
      icon: <MessageCircle className="w-4 h-4" />,
    },
    { key: "engajamento", label: "Engajamento", sortable: true },
    {
      key: "readTime",
      label: "Leitura",
      sortable: true,
      icon: <Clock className="w-4 h-4" />,
    },
    { key: "date", label: "Data", sortable: true },
    { key: "status", label: "Status", sortable: true },
  ];

  const tableData = posts.posts.map((post) => {
    const likes = post.PostMetrics?.numberOfLikes ?? 0;
    const views = post.PostMetrics?.numberOfViews ?? 0;
    const comments = post.PostMetrics?.totalOfComments ?? 0;
    const status = getStatus(post.publishedAt);

    return {
      id: {
        value: Number(post.id),
      },
      title: {
        value: post.title,
        className: "text-slate-200 font-medium max-w-xs truncate",
      },
      views: {
        value: views,
        className: "text-blue-400 font-semibold text-right",
      },
      likes: {
        value: likes,
        className: "text-red-400 font-semibold text-right",
      },
      comments: {
        value: comments,
        className: "text-green-400 font-semibold text-right",
      },
      engajamento: {
        value: calculateEngagement(likes, comments),
        className: "text-purple-400 font-semibold text-right",
      },
      readTime: {
        value: `${post.readTime} min`,
        className: "font-semibold text-right",
      },
      date: {
        value: date(post.publishedAt).format("DD/MM/YYYY"),
        sortValue: post.publishedAt,
        className: "text-right",
      },
      status: {
        value: status,
        itemClassName: `flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(status)}`,
      },
    };
  });

  return (
    <Card className="bg-card shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl text-slate-100 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-purple-400" />
          Últimos 10 Posts Publicados
        </CardTitle>
        <CardDescription className="text-slate-400">
          Desempenho detalhado dos artigos mais recentes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table
            tableId="postTable"
            tableColumns={tableColumns}
            data={tableData}
            showSearchBar={true}
          />
        </div>
      </CardContent>
    </Card>
  );
}
