import { Badge } from "@/components/ui/badge";
import { BlogPostBySlug } from "@/services/notion/getBlogPostBySlug";
import { Calendar, Clock, User } from "lucide-react";
import { PostMetrics } from "./PostMetrics";
import { ShareButton } from "../SocialAction/ShareButton";

interface IPostHeader {
    blogPost: BlogPostBySlug
}

export async function PostHeader({ blogPost }: IPostHeader) {

    return (
        <section className="relative z-10 pb-8 bg-gradient-to-br from-primary/10 via-background to-accent/10">
            <div className="container mx-auto px-4">

                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-4">
                        {blogPost.categories.map((category) => (
                            <Badge
                                key={category}
                                variant={category === "Todos" ? "default" : "outline"}
                                className="cursor-default bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            >
                                {category}
                            </Badge>
                        ))}
                        <div className="flex items-center gap-4 text-sm text-white/80 drop-shadow-md">
                            <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {blogPost.date}
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {blogPost.readTime}
                            </div>
                            <PostMetrics postId={blogPost.id} />

                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-lg " >
                        {blogPost.title}
                    </h1>

                    <p className="text-xl text-white/80 drop-shadow-md mb-8 leading-relaxed ">
                        {blogPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <User className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="font-semibold text-white drop-shadow-lg ">{blogPost.author}</p>
                                <p className="text-sm text-white/80 drop-shadow-md">Dev Fullstack and DevOps Engineer</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <ShareButton />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6">
                        {blogPost.tags.map((tag, index) => (
                            <Badge key={index}
                                variant="outline"
                                className="cursor-default bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}