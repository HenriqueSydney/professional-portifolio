'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Loader2Icon, XCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

import { sendNewsLetterSubscriptionConfirmation } from "@/actions/NewsLetterSubscriptionAction";
import { NewsLetterSubscriptionFormData, newsLetterSubscriptionFormSchema } from "@/actions/NewsLetterSubscriptionAction/newsLetterSubscriptionFormSchema";
import { useToast } from "@/hooks/use-toast";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./Input";

export function NewsLetterSubscriptionForm() {
  const t = useTranslations('homepage.blog.newsletter')
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
        title: t('toast.error.title'),
        description: t('toast.error.description'),
        action: (
          <XCircle className="h-7 w-7 text-destructive-foreground" />
        ),
      })
      return
    }
    toast({
      title: t('toast.success.title'),
      description: t('toast.success.description'),
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
              {t('title')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder={t('placeholderEmail')}
                error={errors.email}
                {...register('email')}

              />

              <Button
                className="hover:shadow-glow transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting && <Loader2Icon className="animate-spin" />}
                {t('button')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  )
}