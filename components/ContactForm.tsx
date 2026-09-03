"use client";

import { useState } from "react";

const SERVICES = [
  "Founder Bottleneck Audit",
  "SaaS Ops Sprint",
  "Agency Systems Intensive",
  "Something else",
];

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setState("success");
      setForm({ name: "", email: "", service: "", message: "" });
    } catch (err: unknown) {
      setState("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-muted-grey/40 focus:border-rust outline-none font-space-mono text-sm text-off-white placeholder-muted-grey/50 py-3 transition-colors duration-300";

  if (state === "success") {
    return (
      <div className="flex flex-col items-start justify-center min-h-[320px] space-y-4">
        <div className="w-8 h-1 bg-rust" />
        <h3 className="font-cormorant italic text-4xl text-rust">
          Message received.
        </h3>
        <p className="font-space-mono text-sm text-muted-grey max-w-sm leading-relaxed">
          I read every message personally. I&apos;ll get back to you within 48
          hours. Talk soon.
        </p>
        <button
          onClick={() => setState("idle")}
          className="font-space-mono text-xs uppercase tracking-widest text-rust hover:text-off-white transition-colors mt-4"
        >
          ← Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-1">
          <label
            htmlFor="contact-name"
            className="font-space-mono text-[10px] uppercase tracking-widest text-muted-grey"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            disabled={state === "loading"}
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="contact-email"
            className="font-space-mono text-[10px] uppercase tracking-widest text-muted-grey"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            disabled={state === "loading"}
          />
        </div>
      </div>

      <div className="space-y-1">
        <label
          htmlFor="contact-service"
          className="font-space-mono text-[10px] uppercase tracking-widest text-muted-grey"
        >
          What are you interested in?
        </label>
        <select
          id="contact-service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className={`${inputClass} cursor-pointer appearance-none`}
          disabled={state === "loading"}
        >
          <option value="" className="bg-bg-dark text-muted-grey">
            — Select a service —
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s} className="bg-bg-dark text-off-white">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-1">
        <label
          htmlFor="contact-message"
          className="font-space-mono text-[10px] uppercase tracking-widest text-muted-grey"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell me what you're building and where you're stuck."
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
          disabled={state === "loading"}
        />
      </div>

      {state === "error" && (
        <p className="font-space-mono text-xs text-red-400">{errorMsg}</p>
      )}

      <button
        id="contact-submit"
        type="submit"
        disabled={state === "loading"}
        className="group relative bg-rust text-bg-dark font-space-mono text-sm uppercase tracking-widest px-10 py-4 hover:bg-off-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-rust focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark focus-visible:outline-none overflow-hidden"
      >
        <span
          className={`transition-opacity duration-200 ${state === "loading" ? "opacity-0" : "opacity-100"}`}
        >
          Send Message →
        </span>
        {state === "loading" && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-4 h-4 border-2 border-bg-dark border-t-transparent rounded-full animate-spin" />
          </span>
        )}
      </button>
    </form>
  );
}
