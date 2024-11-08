import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { FaBuilding, FaMapPin, FaPhone, FaEnvelope } from "react-icons/fa"
import Image from "next/image"

export default function Component() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold">تواصل معنا</h2>
            <p className="text-muted-foreground">
              هل لديك سؤال أو تحتاج إلى مساعدة؟ املأ النموذج وسنقوم بالرد عليك في أقرب وقت ممكن.
            </p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">الاسم</Label>
                <Input id="name" placeholder="أدخل اسمك" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input id="email" type="email" placeholder="أدخل بريدك الإلكتروني" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">الموضوع</Label>
              <Input id="subject" placeholder="أدخل الموضوع" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">الرسالة</Label>
              <Textarea id="message" placeholder="أدخل رسالتك" className="min-h-[150px]" />
            </div>
            <Button type="submit">إرسال</Button>
          </form>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold">عنواننا</h2>
            <p className="text-muted-foreground">قم بزيارتنا في مكتبنا أو تواصل معنا عبر الهاتف أو البريد الإلكتروني.</p>
          </div>
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
