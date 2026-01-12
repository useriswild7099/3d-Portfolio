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
            "relative overflow-hidden rounded-full px-8 py-6 text-lg font-bold text-white transition-transform hover:scale-105",
            "bg-black border border-white/20 shadow-[0_0_15px_rgba(120,119,198,0.5)]"
          )}
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(120, 119, 198, 0.3) 0%, transparent 70%), url('https://assets.aceternity.com/stars.png')",
            backgroundSize: "cover",
          }}
        >
          <span className="relative z-10 flex items-center gap-2">
            ✨ Artifitial Studio
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-shimmer" />
        </Button>
      </Link>
    </div>
  );
};

export default GalaxyButton;
