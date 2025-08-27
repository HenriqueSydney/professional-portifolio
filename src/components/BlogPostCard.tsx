import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { BlogPost } from "@/services/notion/fetchBlogPosts";

interface IBlogPostCard {
    post: BlogPost
    positionInList?: number
    transitionTimeFactor?: number
}

export function BlogPostCard({ post, positionInList = 0, transitionTimeFactor = 0.1 }: IBlogPostCard) {
    return (
        <Card
            className="flex flex-col h-full group hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-up "
            style={{ animationDelay: `${positionInList * transitionTimeFactor}s` }}
        >
            <CardHeader>
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                        <Badge variant="outline" className="text-xs">
                            {post.category}
                        </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                        </div>
                    </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 leading-tight">
                    {post.title}
                </CardTitle>
            </CardHeader>

            <CardContent className="h-full flex flex-col justify-between space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                </p>

                <Link href={`/blog/post/${post.slug}`} >
                    <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                        Ler Artigo
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </Link>
            </CardContent>
        </Card>
    )
}