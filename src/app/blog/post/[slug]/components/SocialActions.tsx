'use client'

import { Button } from "@/components/ui/button";
import { Heart, MessageSquareMore, Share2 } from "lucide-react";
import { useState } from "react";
import { CommentForm } from "./CommentForm";
import { AnimatePresence, motion } from "framer-motion";
import { ShareButton } from "./ShareButton";

interface ISocialActions {
    numberOfLikes: number
}

export function SocialActions({ numberOfLikes }: ISocialActions) {
    const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false)

    function handleToggleCommentBox() {
        setIsCommentBoxOpen(prevState => !prevState)
    }

    return (
        <div className="flex flex-col mt-8 rounded-lg border p-6">
            <div className="flex items-center justify-between ">
                <div className="flex items-center gap-4">
                    <Button
                        variant="outline"
                        className="gap-2"
                        onClick={handleToggleCommentBox}
                    >
                        <MessageSquareMore className="w-4 h-4" />
                        Comentar
                    </Button>
                    <Button variant="outline" className="gap-2">
                        <Heart className="w-4 h-4" />
                        Curtir ({numberOfLikes})
                    </Button>
                    <ShareButton />
                </div>
                <p className="text-sm text-muted-foreground">
                    Gostou do conteúdo? Deixe seu feedback!
                </p>
            </div>
            <AnimatePresence>
                {isCommentBoxOpen &&
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <CommentForm handleToggleCommentForm={handleToggleCommentBox} />
                    </motion.div>}
            </AnimatePresence>
        </div>
    )
}