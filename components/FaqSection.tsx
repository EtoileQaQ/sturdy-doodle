"use client";

import { useState } from "react";
import { faqItems } from "@/lib/data";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section section--soft" id="faq">
      <div className="container">
        <div className="center">
          <p className="eyebrow">Vos questions, nos réponses honnêtes</p>
          <h2>On lève les doutes, pas la poussière</h2>
        </div>
        <div className="faq" style={{ marginTop: "2.5rem" }}>
          {faqItems.map((item, i) => {
            const open = openIndex === i;
            const panelId = `faq${i + 1}`;
            return (
              <div className="faq__item" key={item.q}>
                <h3 style={{ margin: 0 }}>
                  <button
                    type="button"
                    className="faq__q"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : i)}
                  >
                    {item.q}
                    <span className="chev" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  className="faq__a"
                  id={panelId}
                  role="region"
                  data-open={open ? "true" : "false"}
                  style={open ? { maxHeight: 400, padding: "0 1.4rem 1.3rem" } : undefined}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
