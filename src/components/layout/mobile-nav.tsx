"use client";

import * as React from "react";
import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site-config";
import { navLinks } from "@/config/nav-links";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <HamburgerMenuIcon className="h-5 w-5" />
          <span className="sr-only">تبديل القائمة</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          {/* <Icons.logo className="mr-2 h-4 w-4" /> */}
          <span className="font-bold p-4">{siteConfig.applicationName}</span>
        </MobileLink>
        <ScrollArea className="my-2 h-[calc(100vh-8rem)] pr-4 text-right ">
          <div className="flex flex-col space-y-3">
            {navLinks.map((nav) => (
              <MobileLink
                href={`${nav.href}`}
                onOpenChange={setOpen}
                key={nav.href}
              >
                {nav.title}
              </MobileLink>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        // eslint-disable-next-line @typescript-eslint/no-base-to-string
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
