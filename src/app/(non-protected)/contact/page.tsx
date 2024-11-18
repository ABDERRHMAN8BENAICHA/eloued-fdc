"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { FaBuilding, FaMapPin, FaPhone, FaEnvelope } from "react-icons/fa"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  name: z.string().min(2, { message: "الاسم يجب أن يحتوي على حرفين على الأقل." }),
  email: z.string().email({ message: "يرجى إدخال بريد إلكتروني صالح." }),
  subject: z.string().min(2, { message: "الموضوع يجب أن يحتوي على حرفين على الأقل." }),
  message: z.string().min(10, { message: "الرسالة يجب أن تحتوي على 10 أحرف على الأقل." }),
})

export default function ContactComponent() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })
  type FormData = z.infer<typeof formSchema>
  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data)
    // Handle form submission here
  }

  return (
    <div className="w-full max-w-6xl mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">تواصل معنا</h2>
          <p className="text-muted-foreground">
            هل لديك سؤال أو تحتاج إلى مساعدة؟ املأ النموذج وسنقوم بالرد عليك في أقرب وقت ممكن.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الاسم</FormLabel>
                    <FormControl>
                      <Input placeholder="أدخل اسمك" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>البريد الإلكتروني</FormLabel>
                    <FormControl>
                      <Input placeholder="أدخل بريدك الإلكتروني" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الموضوع</FormLabel>
                    <FormControl>
                      <Input placeholder="أدخل الموضوع" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الرسالة</FormLabel>
                    <FormControl>
                      <Textarea placeholder="أدخل رسالتك" className="min-h-[150px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">إرسال</Button>
            </form>
          </Form>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">عنواننا</h2>
          <p className="text-muted-foreground">قم بزيارتنا في مكتبنا أو تواصل معنا عبر الهاتف أو البريد الإلكتروني.</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaBuilding className="h-5 w-5 text-muted-foreground" />
              <span>نادي مطور المستقبل</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapPin className="h-5 w-5 text-muted-foreground" />
              <span>جامعه الشهيد حمه الاخضر</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="h-5 w-5 text-muted-foreground" />
              <span>0600112233</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="h-5 w-5 text-muted-foreground" />
              <span>fde.students.contact@gmail.com</span>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/android-chrome-192x192.png"
              width={400}
              height={300}
              alt="Map"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
