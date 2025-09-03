'use client'

import { Button } from "@/components/ui/button";
import { CheckCircle, Frown, Heart, MessageSquareMore, Share2, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { CommentForm } from "../Comments/CommentForm";
import { AnimatePresence, motion } from "framer-motion";
import { ShareButton } from "./ShareButton";
import { Session } from "next-auth";
import { date } from "@/lib/dayjs";
import { getOptimisticLikeDelta } from "@/util/getOptimisticLikeDelta";
import { handlePostLikesAction } from "@/actions/posts/handlePostLikes";
import { toast } from "@/hooks/use-toast";
import { AnimatedCollapseDiv } from "@/components/AnimatedCollapseDiv";
import { useSession } from "next-auth/react";
import { getUserLikeOfPostAction } from "@/actions/posts/getUserLikeOfPost";

interface ISocialActions {
    numberOfLikes: number
    postId: string
}

export function SocialActions({ numberOfLikes, postId }: ISocialActions) {
    const session = useSession()
    const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false)
    const [likeCounter, setLikeCounter] = useState<number>(numberOfLikes)
    const [alreadyLiked, setAlreadyLiked] = useState<Date | null>(null)

    async function getUserLikeOfPost() {
        if (session.data) {
            const { user } = session.data
            const userLikeOfPost = await getUserLikeOfPostAction(user.id, postId)
            setAlreadyLiked(userLikeOfPost?.alreadyLikedThePost?.createdAt ?? null)
        }
    }

    function handleToggleCommentBox() {
        setIsCommentBoxOpen(prevState => !prevState)
    }

    async function handleLike() {
        const dateNow = date().toDate()
        const delta = getOptimisticLikeDelta(alreadyLiked)

        // Aplica otimisticamente
        setLikeCounter(prev => prev + delta)
        setAlreadyLiked(delta > 0 ? dateNow : null)

        const result = await handlePostLikesAction({ postId })

        if (!result.success) {
            setLikeCounter(prev => prev - delta)
            setAlreadyLiked(alreadyLiked)
            toast({
                variant: "destructive",
                title: "Erro ao dar like",
                action: <XCircle className="h-7 w-7 text-destructive-foreground" />
            })
            return
        }

        setAlreadyLiked(result.operation === "increment" ? dateNow : null)
        toast({
            title: result.message,
            action: result.operation === "increment"
                ? <CheckCircle className="h-7 w-7 text-green-500" />
                : <Frown className="h-7 w-7 text-green-500" />
        })
    }

    useEffect(() => {
        setLikeCounter(numberOfLikes)
        getUserLikeOfPost()
    }, [])

    return (
        <div className="flex flex-col mt-8 rounded-lg border p-6 gap-4">
            <div className="flex items-center justify-between ">
                <div className="flex items-center gap-4">
                    {session.data && (
                        <Button
                            variant="outline"
                            className="gap-2 hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-105"
                            onClick={handleToggleCommentBox}
                        >
                            <MessageSquareMore className="w-4 h-4" />
                            Comentar
                        </Button>
                    )}

                    <Button
                        variant="outline"
                        className="gap-2 hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-105"
                        onClick={handleLike}
                    >
                        <Heart className="w-4 h-4" />
                        Curtir ({likeCounter})
                    </Button>
                    <ShareButton />
                </div>
                <p className="text-sm text-muted-foreground">
                    Gostou do conteúdo? Deixe seu feedback!
                </p>
            </div>
            {!session.data && <p className="text-sm text-muted-foreground">Para comentar, faça seu login.</p>}
            <AnimatePresence>
                {isCommentBoxOpen &&
                    <AnimatedCollapseDiv>
                        <CommentForm handleToggleCommentForm={handleToggleCommentBox} postId={postId} />
                    </AnimatedCollapseDiv>
                }
            </AnimatePresence>
        </div>
    )
}