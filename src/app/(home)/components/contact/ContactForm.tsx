'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Send,
  MessageCircle,
  CheckCircle,
  XCircle,
  Loader2Icon
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { sendContactMessageAction } from "@/actions/sendContactMessageAction";
import { useToast } from "@/hooks/use-toast";
import { ContactMessageData, contactMessageSchema } from "@/actions/sendContactMessageAction/contactFormSchema";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";

export function ContactForm() {
  const { toast } = useToast()
  const appointmentFormCheckout = useForm<ContactMessageData>({
    resolver: zodResolver(contactMessageSchema)
  })

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = appointmentFormCheckout

  async function handleSubmitMessage(data: ContactMessageData) {
    const submitResult = await sendContactMessageAction(data)

    if (!submitResult.success) {
      toast({
        variant: 'destructive',
        title: 'Oppsss. Infelizmente algo deu errado.',
        description: 'Não se preocupe, pois já fui comunicado e tentarei localizar o seu contato.',
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
    <div className="animate-slide-up">
      <form onSubmit={handleSubmit(handleSubmitMessage)}>

        <Card className="hover:shadow-glow transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-6 w-6 text-primary" />
              Envie uma Mensagem
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">

                <Input
                  label="Nome"
                  id="name"
                  placeholder="Seu nome completo"
                  error={errors.name}
                  {...register('name')}
                />
              </div>
              <div className="space-y-2">

                <Input
                  label="E-mail"
                  id="email"
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  error={errors.email}
                  {...register('email')}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Input
                label="Assunto"
                id="subject"
                placeholder="Sobre o que você gostaria de falar?"
                error={errors.subject}
                {...register('subject')}
              />
            </div>

            <div className="space-y-2">
              <Textarea
                label="Mensagem"
                id="message"
                placeholder="Conte-me mais sobre seu projeto ou oportunidade..."
                rows={9}
                error={errors.message}
                {...register('message')}
              />
            </div>

            <Button
              size="lg"
              className="w-full hover:shadow-glow transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting && <Loader2Icon className="animate-spin" />}
              {!isSubmitting && <Send className="w-5 h-5 mr-2" />}
              Enviar Mensagem
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>


  );
}