"use client";

import { useQuote, type QuotePrefill } from "@/context/QuoteContext";
import type { ReactNode, MouseEvent } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  dest?: string;
  plan?: string;
  onOpen?: () => void;
};

export function OpenQuoteButton({ children, className, dest, plan, onOpen }: Props) {
  const { openQuote } = useQuote();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    const prefill: QuotePrefill = {};
    if (dest) prefill.dest = dest;
    if (plan) prefill.plan = plan;
    openQuote(prefill);
    onOpen?.();
  };

  return (
    <a href="#devis" className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
