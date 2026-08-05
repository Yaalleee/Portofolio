"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xqpzzjja");

  if (state.succeeded) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-slate-900/80 p-10 ring-1 ring-white/10 text-center gap-4">
        <div className="text-5xl">🎉</div>
        <h3 className="text-xl font-semibold text-white">Pesan Terkirim!</h3>
        <p className="text-sm text-slate-400">
          Terima kasih sudah menghubungi saya. Saya akan membalas dalam 1-2 hari kerja.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-slate-900/80 p-6 ring-1 ring-white/10 backdrop-blur-xl">
      <h3 className="mb-5 text-xl font-semibold text-white">Kirim Pesan</h3>
      <form onSubmit={handleSubmit} className="grid gap-5">
        <label className="space-y-2 text-sm text-slate-300">
          <span>Nama</span>
          <input id="name" type="text" name="name" placeholder="Nama Anda" required
            className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20" />
          <ValidationError prefix="Nama" field="name" errors={state.errors} className="text-red-400 text-xs" />
        </label>

        <label className="space-y-2 text-sm text-slate-300">
          <span>Email</span>
          <input id="email" type="email" name="email" placeholder="email@domain.com" required
            className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20" />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs" />
        </label>

        <label className="space-y-2 text-sm text-slate-300">
          <span>Pesan</span>
          <textarea id="message" name="message" rows={4} placeholder="Ceritakan proyek atau ide Anda..." required
            className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20" />
          <ValidationError prefix="Pesan" field="message" errors={state.errors} className="text-red-400 text-xs" />
        </label>

        <button type="submit" disabled={state.submitting}
          className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-50">
          {state.submitting ? "Mengirim..." : "Kirim Pesan"}
        </button>
      </form>
    </div>
  );
}