export async function forwardToWebhook(
  url: string | undefined,
  payload: Record<string, unknown>
) {
  if (!url) {
    console.info("[HSF] Webhook non configuré — mode démo", payload);
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

  if (!res.ok) {
    throw new Error(`Webhook error: ${res.status}`);
  }

  return res;
}
