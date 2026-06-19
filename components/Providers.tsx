"use client";

import { QuoteProvider } from "@/context/QuoteContext";
import { QuoteModal } from "@/components/QuoteModal";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QuoteProvider>
      {children}
      <QuoteModal />
    </QuoteProvider>
  );
}
