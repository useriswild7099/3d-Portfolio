"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const GalaxyButton = () => {
  return (
    <div className="w-full flex justify-center py-10 px-4 sm:px-6 md:px-8">
      <Link href="https://artificialstudio.vercel.app/" target="_blank">
        <Button
          className={cn(
            "relative overflow-hidden rounded-full px-12 py-8 text-2xl font-bold text-white transition-transform hover:scale-105",
            "border border-white/10 shadow-[0_0_30px_rgba(124,58,237,0.5)]"
          )}
          style={{
            backgroundImage: "url('/assets/purple-liquid.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="relative z-10 font-sans tracking-tight drop-shadow-md">
            ARTIFICIAL STUDIO
          </span>
        </Button>
      </Link>
    </div>
  );
};

export default GalaxyButton;
