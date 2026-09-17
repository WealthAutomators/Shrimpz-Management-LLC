"use client";

import { Navbar } from "@/components/navbar/navbar";
import { announcement } from "@/data/homepage";

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="border-b border-border/80 bg-[#F3EFE8]">
        <p className="px-4 py-2 text-center text-[11px] font-medium uppercase tracking-[0.22em] text-foreground/70">
          {announcement.text}
        </p>
      </div>
      <Navbar />
    </div>
  );
}
