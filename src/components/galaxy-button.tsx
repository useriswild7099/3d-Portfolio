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
            "border border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.6)]"
          )}
          style={{
            background: "linear-gradient(90deg, #4c1d95 0%, #7c3aed 50%, #4c1d95 100%)",
            backgroundSize: "200% auto",
          }}
        >
          <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider">
            ARTIFICIAL STUDIO
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shimmer" />
        </Button>
      </Link>
    </div>
  );
};

export default GalaxyButton;
