'use client'

import { CheckCircle, XCircle } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/Textarea";
import { useRouter } from "next/navigation";
import { EditCommentData, editCommentFormSchema } from "@/actions/comments/editCommentAction/editCommentFormSchema";
import { editCommentAction } from "@/actions/comments/editCommentAction";
import { date } from "@/lib/dayjs";

interface ICommentEditForm {
    commentId: number
    currentComment: string
    operationDateTime: Date | null
    handleToggleCommentEditForm: () => void
    handleOptimistcCommentText: (editedComment: string, operationDateTime: Date | null) => void
}

export function CommentEditForm({ commentId, currentComment, handleToggleCommentEditForm, handleOptimistcCommentText, operationDateTime }: ICommentEditForm) {
    const router = useRouter()
    const { toast } = useToast()
    const appointmentFormCheckout = useForm<Omit<EditCommentData, "commentId">>({
        resolver: zodResolver(editCommentFormSchema.omit({ commentId: true }))
    })

    const {
        handleSubmit,
        register,
        reset,
        formState: { isSubmitting, errors },
    } = appointmentFormCheckout

    async function handleSubmitCommentChange(data: Omit<EditCommentData, "commentId">) {
        const currentCommentBeforeChange = currentComment
        const currentCommentOperationDateTime = operationDateTime
        const dateNow = date().toDate()

        handleOptimistcCommentText(data.message, dateNow)

        handleToggleCommentEditForm()

        const result = await editCommentAction({
            message: data.message,
            commentId
        });

        if (result.success) {
            toast({
                title: result.message,
                action: <CheckCircle className="h-7 w-7 text-green-500" />
            })

            reset()
            return
        }
        handleOptimistcCommentText(currentCommentBeforeChange, currentCommentOperationDateTime)
        toast({
            variant: "destructive",
            title: "Oppsss. Infelizmente algo deu errado.",
            description:
                "Não se preocupe, pois já fui comunicado e em breve darei uma solução.",
            action: <XCircle className="h-7 w-7 text-destructive-foreground" />,
        })
        reset()
    }

    return (

        <form onSubmit={handleSubmit(handleSubmitCommentChange)}>
            <Textarea
                placeholder="Edite sua contribuição para a discussão ou para o tema"
                error={errors.message}
                rows={8}
                className="resize-y"
                {...register('message')}
                defaultValue={currentComment}
            />
            <div className="w-full flex items-center justify-end gap-4 mt-4">
                <Button
                    size='sm'
                    className="hover:shadow-glow transition-all duration-300"
                    disabled={isSubmitting}
                >
                    Confirmar edição
                </Button>
                <Button
                    variant='outline'
                    onClick={handleToggleCommentEditForm}
                >
                    Cancelar
                </Button>
            </div>
        </form>
    )
}