'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useForm } from "react-hook-form";
import { NewsLetterSubscriptionFormData, newsLetterSubscriptionFormSchema } from "@/actions/NewsLetterSubscriptionAction/newsLetterSubscriptionFormSchema";
import { useToast } from "@/hooks/use-toast";
import { sendNewsLetterSubscriptionConfirmation } from "@/actions/NewsLetterSubscriptionAction";
import { CheckCircle, XCircle } from "lucide-react";
import { Input } from "./Input";

export function NewsLetterForm() {
    const { toast } = useToast()
    const appointmentFormCheckout = useForm<NewsLetterSubscriptionFormData>({
        resolver: zodResolver(newsLetterSubscriptionFormSchema)
    })

    const {
        handleSubmit,
        control,
        register,
        setValue,
        reset,
        formState: { isSubmitting, errors },
    } = appointmentFormCheckout

    async function handleSubmitSubscription(data: NewsLetterSubscriptionFormData) {
        const submitResult = await sendNewsLetterSubscriptionConfirmation(data)

        if (!submitResult.success) {
            toast({
                variant: 'destructive',
                title: 'Oppsss. Infelizmente algo deu errado.',
                description: 'Não se preocupe, pois já fui comunicado e tentarei localizar sua solicitação.',
                action: (
                    <XCircle className="h-7 w-7 text-destructive-foreground" />
                ),
            })
            return
        }
        toast({
            title: 'Opa! Estamos quase lá!. ',
            description: submitResult.message,
            action: (
                <CheckCircle className="h-7 w-7 text-green-500" />
            ),
        })
        reset()
    }


    return (
        <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <form onSubmit={handleSubmit(handleSubmitSubscription)}>
                    <CardContent className="p-8 text-center">
                        <h3 className="text-2xl font-semibold mb-4">
                            Gostou do conteúdo?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Receba novos artigos sobre DevOps, desenvolvimento e tecnologias modernas diretamente no seu e-mail.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <Input
                                type="email"
                                placeholder="Seu melhor e-mail"
                                error={errors.email}
                                {...register('email')}
                            />
                            <Button className="hover:shadow-glow transition-all duration-300">
                                Inscrever-se
                            </Button>
                        </div>
                    </CardContent>
                </form>
            </Card>
        </div>
    )
}