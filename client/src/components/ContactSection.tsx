import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      message: String(data.get("message") || ""),
    };

    try {
      // TODO: replace with your Microsoft Power Automate webhook URL
      const FLOW_URL = "PASTE_YOUR_POWER_AUTOMATE_WEBHOOK_URL_HERE";

      const res = await fetch(FLOW_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto w-full max-w-3xl px-4 py-16">
      <h2 className="text-3xl font-semibold">Contact Us</h2>
      <p className="mt-2 text-sm opacity-80">
        Send us a message and we’ll get back to you.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 outline-none"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 outline-none"
          />
        </div>

        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 outline-none"
        />

        <textarea
          name="message"
          placeholder="How can we help you?"
          required
          rows={6}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 outline-none"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "sent" && (
          <p className="text-sm text-green-400">Message sent. Thank you.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400">
            Something went wrong. Please try again.
