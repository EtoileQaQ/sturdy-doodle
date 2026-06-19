/* =========================================================
   Horizons Sans Frontières — interactions
   Accessibilité : clavier complet, focus géré, aria à jour
   ========================================================= */
(function () {
  "use strict";

  const cfg = window.HSF_CONFIG || {};

  /** Envoi vers Tally webhook, Make, Zapier ou CRM */
  async function submitToWebhook(url, payload) {
    if (!url) {
      console.info("[HSF] Mode démo — payload :", payload);
      return { ok: true, demo: true };
    }
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "horizons-sans-frontieres",
        submittedAt: new Date().toISOString(),
        ...payload,
      }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res;
  }

  function setButtonLoading(btn, loading) {
    if (!btn) return;
    btn.disabled = loading;
    btn.dataset.originalText = btn.dataset.originalText || btn.textContent;
    btn.textContent = loading ? "Envoi en cours…" : btn.dataset.originalText;
  }

  /* ---- GA4 (optionnel) ---- */
  if (cfg.ga4Id) {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${cfg.ga4Id}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", cfg.ga4Id);
  }

  /* ---- Ombre du header au scroll ---- */
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("is-stuck", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- FAQ accordéon (accessible) ---- */
  document.querySelectorAll(".faq__q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const panel = document.getElementById(btn.getAttribute("aria-controls"));
      btn.setAttribute("aria-expanded", String(!expanded));
      if (expanded) {
        panel.style.maxHeight = null;
        panel.dataset.open = "false";
      } else {
        panel.dataset.open = "true";
        panel.style.maxHeight = panel.scrollHeight + 40 + "px";
      }
    });
  });

  /* ---- Formulaire guide (capture lead) ---- */
  const guideForm = document.getElementById("guideForm");
  if (guideForm) {
    guideForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const msg = document.getElementById("guideMsg");
      const btn = guideForm.querySelector('button[type="submit"]');
      if (!guideForm.checkValidity()) {
        guideForm.reportValidity();
        return;
      }
      const data = Object.fromEntries(new FormData(guideForm));
      setButtonLoading(btn, true);
      msg.textContent = "";
      try {
        await submitToWebhook(cfg.guideWebhook, { type: "guide", ...data });
        msg.textContent = "Merci ! Votre guide arrive dans votre boîte mail (vérifiez les spams).";
        msg.style.color = "#aef0c8";
        guideForm.reset();
        if (window.gtag) window.gtag("event", "generate_lead", { form: "guide" });
      } catch {
        msg.textContent = "Une erreur est survenue. Réessayez ou appelez le 01 80 00 00 00.";
        msg.style.color = "#ffb4ab";
      } finally {
        setButtonLoading(btn, false);
      }
    });
  }

  /* =======================================================
     MODALE DEVIS MULTI-ÉTAPES
     ======================================================= */
  const modal = document.getElementById("quoteModal");
  const form = document.getElementById("quoteForm");
  const success = document.getElementById("quoteSuccess");
  const steps = Array.from(form.querySelectorAll(".step"));
  const dots = Array.from(modal.querySelectorAll(".progress span"));
  let current = 0;
  let lastFocused = null;

  const FOCUSABLE =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function showStep(i) {
    steps.forEach((s, idx) => s.classList.toggle("is-active", idx === i));
    dots.forEach((d, idx) => d.classList.toggle("is-active", idx <= i));
    current = i;
    const firstInput = steps[i].querySelector("input, select, button");
    if (firstInput) firstInput.focus();
  }

  function openModal(prefill) {
    lastFocused = document.activeElement;
    form.hidden = false;
    success.hidden = true;
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    if (prefill) {
      if (prefill.dest) {
        const sel = form.querySelector("#qDest");
        Array.from(sel.options).forEach((o) => {
          if (o.text.replace(/&amp;/g, "&") === prefill.dest) sel.value = o.value;
        });
      }
      if (prefill.plan) {
        const sel = form.querySelector("#qPlan");
        Array.from(sel.options).forEach((o) => {
          if (o.text === prefill.plan) sel.value = o.value;
        });
      }
    }
    showStep(0);
    if (window.gtag) window.gtag("event", "begin_checkout", { form: "quote" });
  }

  function closeModal() {
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll("[data-open-quote]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      openModal({
        dest: el.getAttribute("data-dest"),
        plan: el.getAttribute("data-plan"),
      });
    });
  });

  modal.querySelectorAll("[data-close-quote]").forEach((el) =>
    el.addEventListener("click", closeModal)
  );

  form.querySelectorAll("[data-next]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const step = steps[current];
      const required = Array.from(step.querySelectorAll("[required]"));
      const radios = step.querySelectorAll('input[type="radio"][required]');
      let ok = true;

      if (radios.length) {
        const name = radios[0].name;
        if (!form.querySelector(`input[name="${name}"]:checked`)) ok = false;
      }
      required.forEach((f) => {
        if (f.type !== "radio" && !f.checkValidity()) {
          f.reportValidity();
          ok = false;
        }
      });
      if (ok && current < steps.length - 1) showStep(current + 1);
    })
  );

  form.querySelectorAll("[data-prev]").forEach((btn) =>
    btn.addEventListener("click", () => {
      if (current > 0) showStep(current - 1);
    })
  );

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const btn = form.querySelector('button[type="submit"]');
    const data = Object.fromEntries(new FormData(form));
    setButtonLoading(btn, true);
    try {
      await submitToWebhook(cfg.quoteWebhook, { type: "quote", ...data });
      form.hidden = true;
      success.hidden = false;
      success.querySelector("h3").focus();
      if (window.gtag) window.gtag("event", "generate_lead", { form: "quote" });
    } catch {
      alert("Envoi impossible pour le moment. Appelez-nous au 01 80 00 00 00, nous vous aidons tout de suite.");
    } finally {
      setButtonLoading(btn, false);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (modal.getAttribute("aria-hidden") === "true") return;
    if (e.key === "Escape") {
      closeModal();
      return;
    }
    if (e.key === "Tab") {
      const dialog = modal.querySelector(".modal__dialog");
      const items = Array.from(dialog.querySelectorAll(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
})();
