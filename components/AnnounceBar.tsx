"use client";

import { useEffect, useState } from "react";

const messages = [
  <>
    <strong>-20%</strong> sur votre premier voyage — offre valable jusqu&apos;au <strong>31 juillet</strong>
  </>,
  <>Devis gratuit + accompagnement personnalisé offert</>,
  <>Satisfaction garantie <strong>30 jours</strong> ou remboursé</>,
];

export function AnnounceBar() {
  const [index, setIndex] = useState(0);
  const [msgVisible, setMsgVisible] = useState(true);
  const [scrollHidden, setScrollHidden] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const interval = setInterval(() => {
      setMsgVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % messages.length);
        setMsgVisible(true);
      }, 320);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollHidden(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`announce${scrollHidden ? " announce--hidden" : ""}`}
      role="region"
      aria-label="Offres en cours"
      aria-live="polite"
      aria-hidden={scrollHidden}
    >
      <div className="announce__inner">
        <div className="announce__track announce__track--desktop">
          {messages.map((msg, i) => (
            <span className="announce__item" key={i}>{msg}</span>
          ))}
        </div>
        <div className="announce__track announce__track--mobile">
          <span className={`announce__item announce__item--fade ${msgVisible ? "is-visible" : ""}`}>
            {messages[index]}
          </span>
        </div>
      </div>
    </div>
  );
}
