import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogPostBySlug } from "@/services/notion/getBlogPostBySlug";
import { Calendar, BookOpen, Clock, Heart, MessageCircle, Share2, User } from "lucide-react";
import { ShareButton } from "./ShareButton";

interface IPostHeader {
    blogPost: BlogPostBySlug
}

export function PostHeader({ blogPost }: IPostHeader) {
    return (
        <section className="pb-8 bg-gradient-to-br from-primary/10 via-background to-accent/10">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-4">
                        {blogPost.categories.map((category) => (
                            <Badge
                                key={category}
                                variant={category === "Todos" ? "default" : "outline"}
                                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            >
                                {category}
                            </Badge>
                        ))}
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {blogPost.date}
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {blogPost.readTime}
                            </div>
                            <div className="flex items-center gap-1">
                                <BookOpen className="h-4 w-4" />
                                {blogPost.views} visualizações
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        {blogPost.title}
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        {blogPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <User className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="font-semibold">{blogPost.author}</p>
                                <p className="text-sm text-muted-foreground">DevOps Engineer</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Heart className="w-4 h-4" />
                                {blogPost.likes}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MessageCircle className="w-4 h-4" />
                                {blogPost.comments}
                            </div>
                            <ShareButton />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6">
                        {blogPost.tags.map((tag, index) => (
                            <Badge key={index} variant="outline">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}