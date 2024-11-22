import { Button } from "../ui/button";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="flex w-full items-center justify-center border-t">
      <div className="flex w-full flex-col p-8 space-x-8">
        <div className="w-full text-7xl font-bold">
          <h1 className="w-full ">كيف يمكننا مساعدتك؟ تواصل معنا</h1>
        </div>
        <div className="mt-8 flex flex-col md:flex-row md:justify-between">
          <p className="w-full text-muted-foreground md:w-2/3">
            نحن هنا لمساعدتك في إطلاق وتوسيع منتجاتك البرمجية كخدمة. لا تتردد في التواصل معنا لأي دعم أو استفسارات.
          </p>
          <Link href={"/contact"} >
            <Button>تواصل معنا</Button>
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="mb-12 mt-12 flex flex-row justify-between">
            <Link
              className="hidden cursor-pointer text-muted-foreground hover:text-primary md:block"
              href="#"
            >
              عنّا
            </Link>
            <Link
              className="hidden cursor-pointer text-muted-foreground hover:text-primary md:block"
              href="#"
            >
              خدماتنا
            </Link>
            <Link
              className="hidden cursor-pointer text-muted-foreground hover:text-primary md:block"
              href="#"
            >
              لماذا نحن؟
            </Link>
            <Link
              className="hidden cursor-pointer text-muted-foreground hover:text-primary md:block"
              href="/contact"
            >
              تواصل
            </Link>
            <div className="flex items-center">
              <Link href="#" className="w-auto ml-3">
                <FaFacebookF className="text-xl" />
              </Link>
              <Link href="#" className="w-auto">
                <FaInstagram className="text-xl ml-3" />
              </Link>
              <Link href="#" className="w-auto">
                <FaYoutube className="text-xl" />
              </Link>
            </div>
          </div>
          {/* <Separator />
          <p className="my-12 w-full text-center text-muted-foreground">
            {date.getFullYear()} {siteConfig.applicationName}
          </p> */}
        </div>
      </div>
    </footer>
  );
}
