'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  CheckCircle,
  Loader2Icon,
  MessageCircle,
  Send,
  XCircle} from "lucide-react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { sendContactMessageAction } from "@/actions/sendContactMessageAction";
import { ContactMessageData, contactMessageSchema } from "@/actions/sendContactMessageAction/contactFormSchema";
import { useToast } from "@/hooks/use-toast";

interface IContactForm {
  name?: string | null
  email?: string | null
}

export function ContactForm({ name, email }: IContactForm) {
  const t = useTranslations('homepage.contact')
  const { toast } = useToast()

  const appointmentFormCheckout = useForm<ContactMessageData>({
    resolver: zodResolver(contactMessageSchema),
    defaultValues: {
      email: email ?? '',
      name: name ?? ''
    }
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
              {t('messageBox.title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">

                <Input
                  label={t('messageBox.labels.name')}
                  id="name"
                  placeholder={t('messageBox.placeholders.name')}
                  error={errors.name}
                  {...register('name')}
                />
              </div>
              <div className="space-y-2">

                <Input
                  label={t('messageBox.labels.email')}
                  id="email"
                  type="email"
                  placeholder={t('messageBox.placeholders.email')}
                  error={errors.email}
                  {...register('email')}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Input
                label={t('messageBox.labels.subject')}
                id="subject"
                placeholder={t('messageBox.placeholders.subject')}
                error={errors.subject}
                {...register('subject')}
              />
            </div>

            <div className="space-y-2">
              <Textarea
                label={t('messageBox.labels.message')}
                id="message"
                placeholder={t('messageBox.placeholders.message')}
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
              {t('messageBox.sendButton')}
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>


  );
}