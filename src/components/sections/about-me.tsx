"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { config } from "@/data/config";
import { BlurIn } from "../reveal-animations";

const AboutMeSection = () => {
  return (
    <section id="about-me" className="max-w-7xl mx-auto py-20 px-4 sm:px-6 md:px-8">
       <div className="flex justify-center">
        <Card className="w-full max-w-3xl bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl border-none shadow-none">
          <CardHeader>
             <BlurIn delay={0.2} className="w-full flex justify-center">
                <CardTitle className="text-center text-3xl font-thin tracking-wider">ABOUT ME</CardTitle>
             </BlurIn>
          </CardHeader>
          <CardContent className="text-center text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
             <BlurIn delay={0.4} className="w-full">
                <p>{config.description.long}</p>
             </BlurIn>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
export default AboutMeSection;