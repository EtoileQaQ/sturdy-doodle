"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type QuotePrefill = { dest?: string; plan?: string };

type QuoteContextValue = {
  openQuote: (prefill?: QuotePrefill) => void;
  closeQuote: () => void;
  isOpen: boolean;
  prefill: QuotePrefill;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefill, setPrefill] = useState<QuotePrefill>({});

  const openQuote = useCallback((p?: QuotePrefill) => {
    setPrefill(p ?? {});
    setIsOpen(true);
  }, []);

  const closeQuote = useCallback(() => setIsOpen(false), []);

  return (
    <QuoteContext.Provider value={{ openQuote, closeQuote, isOpen, prefill }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used within QuoteProvider");
  return ctx;
}
