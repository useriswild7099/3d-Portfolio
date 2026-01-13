"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ContactSection = () => {
  const email = "tiggprince403@gmail.com";
  const phone = "7099580081";

  return (
    <section id="contact" className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <Link href={"#contact"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          LET&apos;S WORK <br />
          TOGETHER
        </h2>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 z-[9999]">
        <Card className="min-w-7xl bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-10 md:mt-20">
          <CardHeader>
            <CardTitle className="text-4xl">Contact Me</CardTitle>
            <CardDescription>
              Feel free to reach out directly via email or phone.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-4 p-4 rounded-lg bg-white/50 dark:bg-zinc-800/50 hover:bg-white/80 dark:hover:bg-zinc-700/50 transition-colors group"
            >
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image 
                  src="/assets/icons/mail-icon.jpg" 
                  alt="Email" 
                  fill 
                  className="object-contain drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-lg font-medium group-hover:text-orange-500 transition-colors">
                  {email}
                </p>
              </div>
            </a>
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-4 p-4 rounded-lg bg-white/50 dark:bg-zinc-800/50 hover:bg-white/80 dark:hover:bg-zinc-700/50 transition-colors group"
            >
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image 
                  src="/assets/icons/phone-icon.jpg" 
                  alt="Phone" 
                  fill 
                  className="object-contain drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-lg font-medium group-hover:text-green-500 transition-colors">
                  +91 {phone}
                </p>
              </div>
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
export default ContactSection;

