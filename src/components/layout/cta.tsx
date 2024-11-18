import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LoginButton } from "../auth/login-button";
import { currentUser } from "@/server/auth";
import Link from "next/link";

const Cta = async () => {
  const user = await currentUser();
  return (
    <section className="w-full bg-muted py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 py-14 text-center rtl">
          <div>
            <Badge>ابدأ الآن</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-regular max-w-xl text-3xl tracking-tighter md:text-5xl">
              جرب منصتنا اليوم!
            </h3>
            <p className="max-w-xl text-lg leading-relaxed tracking-tight text-muted-foreground">
              إدارة الأعمال الصغيرة اليوم أمر صعب بالفعل. تجنب المزيد من
              التعقيدات عن طريق التخلص من طرق التجارة القديمة والمملة. هدفنا
              هو تبسيط تجارة الأعمال الصغيرة، مما يجعلها أسهل وأسرع من أي وقت مضى.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button className="gap-4" variant="outline" asChild>
              <Link href="/contact">
                قم بإجراء مكالمة <PhoneCall className="h-4 w-4" />
              </Link>
            </Button>
            {!user && (
              <LoginButton asChild>
                <Button className="gap-4">
                  سجل هنا <MoveRight className="h-4 w-4" />
                </Button>
              </LoginButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
