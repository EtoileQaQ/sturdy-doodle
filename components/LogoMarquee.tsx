"use client";

import { partners } from "@/lib/data";

export function LogoMarquee() {
  const items = [...partners, ...partners];

  return (
    <section className="logos section--tight" aria-label="Ils nous font confiance">
      <div className="container">
        <p className="logos__label">Partenaires &amp; labels reconnus</p>
      </div>
      <div className="marquee" aria-hidden="false">
        <div className="marquee__track">
          {items.map((p, i) => (
            <span className="marquee__item" key={`${p}-${i}`}>
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
