'use client'

import { CheckCircle, Loader2Icon, XCircle } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion"
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/Input";
import { saveCommentAction } from "@/actions/saveCommentAction";
import { CommentData, commentFormSchema } from "@/actions/saveCommentAction/commentFormSchema";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/Textarea";

interface ICommentForm {
    handleToggleCommentForm: () => void
}

export function CommentForm({ handleToggleCommentForm }: ICommentForm) {
    const { toast } = useToast()
    const appointmentFormCheckout = useForm<CommentData>({
        resolver: zodResolver(commentFormSchema)
    })

    const {
        handleSubmit,
        register,
        reset,
        formState: { isSubmitting, errors },
    } = appointmentFormCheckout

    async function handleSubmitComment(data: CommentData) {
        const submitResult = await saveCommentAction(data)

        if (!submitResult.success) {
            toast({
                variant: 'destructive',
                title: 'Oppsss. Infelizmente algo deu errado.',
                description: 'Não se preocupe, pois já fui comunicado e em breve darei uma solução.',
                action: (
                    <XCircle className="h-7 w-7 text-destructive-foreground" />
                ),
            })
            return
        }
        toast({
            title: 'Comentário enviado com sucesso! ',
            description: 'Obrigado por participar da discussão.',
            action: (
                <CheckCircle className="h-7 w-7 text-green-500" />
            ),
        })
        handleToggleCommentForm()
        reset()
    }

    return (

        <div className="text-center mt-6">
            <form onSubmit={handleSubmit(handleSubmitComment)}>
                <Card className=" bg-card/50 border-primary/20">
                    <CardContent className="p-8">
                        <div className="flex flex-col  gap-4  ">
                            <div className="flex gap-4">
                                <Input
                                    type="email"
                                    placeholder="Seu e-mail (exemple@exemple.com)"
                                    error={errors.email}
                                    {...register('email')}

                                />
                                <Input
                                    placeholder="Seu nome ou apelido"
                                    error={errors.name}
                                    {...register('name')}

                                />
                            </div>
                            <Textarea
                                placeholder="Escreva sua contribuição para a discussão ou para o tema"
                                error={errors.message}
                                rows={8}
                                className="resize-y"
                                {...register('message')}

                            />

                            <Button
                                className="hover:shadow-glow transition-all duration-300"
                                disabled={isSubmitting}
                            >
                                {isSubmitting && <Loader2Icon className="animate-spin" />}
                                Enviar comentário
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </div>
    )
}