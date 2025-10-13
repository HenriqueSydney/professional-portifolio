"use client";

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
  ExternalLink,
} from "lucide-react";
import { Table } from "@/components/Table";

interface Post {
  id: number;
  title: string;
  views: number;
  likes: number;
  comments: number;
  date: string;
  readTime: string;
  status: "Publicado" | "Rascunho" | "Agendado";
}

export function PostsTable() {
  const postsData: Post[] = [
    {
      id: 1,
      title: "Como criar APIs REST com Node.js e Express",
      views: 3420,
      likes: 287,
      comments: 45,
      date: "2024-10-01",
      readTime: "8 min",
      status: "Publicado",
    },
    {
      id: 2,
      title: "Guia Completo de React Hooks para Iniciantes",
      views: 2890,
      likes: 312,
      comments: 67,
      date: "2024-09-28",
      readTime: "12 min",
      status: "Publicado",
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: Quando usar cada um?",
      views: 2650,
      likes: 198,
      comments: 34,
      date: "2024-09-25",
      readTime: "6 min",
      status: "Publicado",
    },
    {
      id: 4,
      title: "JavaScript Async/Await: Dominando Programação Assíncrona",
      views: 2340,
      likes: 245,
      comments: 52,
      date: "2024-09-22",
      readTime: "10 min",
      status: "Publicado",
    },
    {
      id: 5,
      title: "Introdução ao TypeScript para Desenvolvedores JavaScript",
      views: 1980,
      likes: 167,
      comments: 28,
      date: "2024-09-19",
      readTime: "15 min",
      status: "Publicado",
    },
    {
      id: 6,
      title: "Deploy de Aplicações Next.js na Vercel",
      views: 1756,
      likes: 143,
      comments: 21,
      date: "2024-09-16",
      readTime: "7 min",
      status: "Publicado",
    },
    {
      id: 7,
      title: "Otimização de Performance em React",
      views: 1623,
      likes: 189,
      comments: 36,
      date: "2024-09-13",
      readTime: "11 min",
      status: "Rascunho",
    },
    {
      id: 8,
      title: "GraphQL vs REST: Qual escolher?",
      views: 1445,
      likes: 132,
      comments: 19,
      date: "2024-09-10",
      readTime: "9 min",
      status: "Publicado",
    },
    {
      id: 9,
      title: "Autenticação JWT em Node.js",
      views: 1290,
      likes: 156,
      comments: 42,
      date: "2024-09-07",
      readTime: "13 min",
      status: "Agendado",
    },
    {
      id: 10,
      title: "Testes Automatizados com Jest e React Testing Library",
      views: 1187,
      likes: 124,
      comments: 25,
      date: "2024-09-04",
      readTime: "14 min",
      status: "Publicado",
    },
  ];

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

  const tableData = postsData.map((post) => ({
    id: {
      value: Number(post.id),
    },
    title: {
      value: post.title,
      className: "text-slate-200 font-medium max-w-xs truncate",
    },
    views: {
      value: post.views.toLocaleString(),
      className: "text-blue-400 font-semibold text-right",
    },
    likes: {
      value: post.likes,
      className: "text-red-400 font-semibold text-right",
    },
    comments: {
      value: post.comments,
      className: "text-green-400 font-semibold text-right",
    },
    engajamento: {
      value: calculateEngagement(post.likes, post.comments),
      className: "text-purple-400 font-semibold text-right",
    },
    readTime: {
      value: post.readTime,
      className: "font-semibold text-right",
    },
    date: {
      value: new Date(post.date).toLocaleDateString("pt-BR"),
      sortValue: post.date,
      className: "text-right",
    },
    status: {
      value: post.status,
      itemClassName: `flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(post.status)}`,
    },
  }));

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
          {/* <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead
                  className="text-left py-4 px-4  font-semibold text-sm cursor-pointer hover:text-purple-400 transition-colors"
                  onClick={() => handleSort("title")}
                >
                  Título
                </TableHead>
                <TableHead
                  className="text-center py-4 px-4  font-semibold text-sm cursor-pointer hover:text-purple-400 transition-colors"
                  onClick={() => handleSort("views")}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" />
                    Views
                  </div>
                </TableHead>
                <TableHead
                  className="text-center py-4 px-4  font-semibold text-sm"
                  onClick={() => handleSort("likes")}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4" />
                    Likes
                  </div>
                </TableHead>
                <TableHead
                  className="text-center py-4 px-4  font-semibold text-sm cursor-pointer hover:text-purple-400 transition-colors"
                  onClick={() => handleSort("comments")}
                >
                  <div className="flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Coment.
                  </div>
                </TableHead>
                <TableHead className="text-center py-4 px-4  font-semibold text-sm ">
                  Engajamento
                </TableHead>
                <TableHead
                  className="text-center py-4 px-4  font-semibold text-sm cursor-pointer hover:text-purple-400 transition-colors"
                  onClick={() => handleSort("readTime")}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" />
                    Leitura
                  </div>
                </TableHead>
                <TableHead
                  className="text-center py-4 px-4  font-semibold text-sm cursor-pointer hover:text-purple-400 transition-colors"
                  onClick={() => handleSort("date")}
                >
                  Data
                </TableHead>
                <TableHead
                  className="text-center py-4 px-4  font-semibold text-sm cursor-pointer hover:text-purple-400 transition-colors"
                  onClick={() => handleSort("status")}
                >
                  Status
                </TableHead>
                <TableHead className="text-center py-4 px-4  font-semibold text-sm">
                  Ações
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedPosts.map((post, index) => (
                <TableRow
                  key={post.id}
                  className=" hover:bg-slate-800/30 transition-colors"
                >
                  <TableCell className="py-4 px-4">
                    
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                   
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                   
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <span className="text-green-400 font-semibold">
                      {post.comments}
                    </span>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                  
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center text-slate-400 text-sm">
                    {post.readTime}
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center text-slate-400 text-sm">
                   
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                   
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <button
                      className="text-slate-400 hover:text-purple-400 transition-colors"
                      aria-label="Ver post"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table> */}
        </div>
      </CardContent>
    </Card>
  );
}
