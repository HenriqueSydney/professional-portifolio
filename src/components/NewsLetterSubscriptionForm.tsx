'use client'

import { CheckCircle, Loader2Icon, XCircle } from "lucide-react";
import { Input } from "./Input";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { sendNewsLetterSubscriptionConfirmation } from "@/actions/NewsLetterSubscriptionAction";
import { NewsLetterSubscriptionFormData, newsLetterSubscriptionFormSchema } from "@/actions/NewsLetterSubscriptionAction/newsLetterSubscriptionFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";

export function NewsLetterSubscriptionForm() {

    const { toast } = useToast()
    const appointmentFormCheckout = useForm<NewsLetterSubscriptionFormData>({
        resolver: zodResolver(newsLetterSubscriptionFormSchema)
    })

    const {
        handleSubmit,
        register,
        reset,
        formState: { isSubmitting, errors },
    } = appointmentFormCheckout

    async function handleSubmitNewsLetterSubscription(data: NewsLetterSubscriptionFormData) {
        const submitResult = await sendNewsLetterSubscriptionConfirmation(data)

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
            title: 'Sua solicitação de contato foi enviada com sucesso. ',
            description: 'Tão logo seja possível, entrarei em contato com uma resposta.',
            action: (
                <CheckCircle className="h-7 w-7 text-green-500" />
            ),
        })
        reset()
    }

    return (
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <form onSubmit={handleSubmit(handleSubmitNewsLetterSubscription)}>
                <Card className="max-w-2xl mx-auto bg-card/50 border-primary/20">
                    <CardContent className="p-8">
                        <h3 className="text-2xl font-semibold mb-4">
                            Quer ser notificado sobre novos artigos?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Receba em primeira mão os novos conteúdos sobre DevOps, desenvolvimento e tecnologias modernas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <Input
                                type="email"
                                placeholder="Seu melhor e-mail"
                                error={errors.email}
                                {...register('email')}

                            />

                            <Button
                                className="hover:shadow-glow transition-all duration-300"
                                disabled={isSubmitting}
                            >
                                {isSubmitting && <Loader2Icon className="animate-spin" />}
                                Inscrever-se
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </div>
    )
}