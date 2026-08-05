"use client";

import { motion } from "framer-motion";
import SkillBadge from "@/components/SkillBadge";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import { projects } from "@/Data/projects";

const skills = [
  "Next.js", "React", "TypeScript",
  "Tailwind CSS", "Node.js", "Git & GitHub",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  // keep transition simple to satisfy Framer Motion's TypeScript types
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Home() {
  return (
    <div className="flex flex-col gap-32 pb-20">

      {/* ═══════════════ HERO ═══════════════ */}
      <section id="home" className="relative isolate overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_32px_120px_-48px_rgba(15,23,42,0.8)] ring-1 ring-white/5 sm:p-14">

        {/* Glow background */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-125 w-200 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative mx-auto flex max-w-4xl flex-col items-center gap-10 text-center md:flex-row md:items-center md:text-left"
        >
          {/* Foto Profil */}
          <motion.div variants={fadeUp} className="shrink-0">
            <div className="relative h-40 w-40 sm:h-52 sm:w-52">
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-sky-400 to-indigo-500 blur-xl opacity-50" />
              <img
                src="/iyal.png"
                alt="Foto Profil"
                className="relative h-full w-full rounded-full object-cover ring-4 ring-white/10"
              />
            </div>
          </motion.div>

          {/* Teks Hero */}
          <div className="flex flex-col items-center md:items-start">
            <motion.span variants={fadeUp}
              className="rounded-full bg-slate-900/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-300 ring-1 ring-sky-300/20">
              Portofolio | Web Developer
            </motion.span>

            <motion.h1 variants={fadeUp}
              className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Halo, saya{" "}
              <span className="bg-linear-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                Syahrial Hardi Akbar
              </span>
            </motion.h1>

            <motion.p variants={fadeUp}
              className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Saya membuat pengalaman digital modern dan performa tinggi dengan
              Next.js, Tailwind CSS, dan prinsip desain minimalis.
            </motion.p>

            <motion.div variants={fadeUp}
              className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <button onClick={() => scrollTo("projects")}
                className="inline-flex items-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
                Lihat Proyek
              </button>
              <button onClick={() => scrollTo("contact")}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-300 hover:text-sky-200">
                Hubungi Saya
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mt-16 grid gap-4 sm:grid-cols-3"
        >
          {[
            { label: "Fast", title: "Performa Cepat", desc: "Halaman cepat, interaksi halus, dan arsitektur modern." },
            { label: "Responsive", title: "Mobile-first", desc: "Desain adaptif yang elegan di semua ukuran layar." },
            { label: "UI", title: "Kesan Profesional", desc: "Antarmuka bersih dengan tipografi kuat dan detail visual modern." },
          ].map((item, i) => (
            <motion.article key={i} variants={fadeUp}
              className="rounded-3xl bg-slate-900/60 p-6 ring-1 ring-white/10 backdrop-blur-xl transition hover:ring-sky-400/20">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">{item.label}</p>
              <h2 className="mt-4 text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section id="about" className="mx-auto w-full max-w-6xl">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mb-12 text-center">
          <motion.span variants={fadeUp}
            className="inline-block rounded-full border border-white/10 bg-slate-900/50 px-4 py-1 text-xs font-medium tracking-widest text-slate-400 uppercase">
            Tentang Saya
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Mengenal Lebih Dekat
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-slate-400 leading-relaxed">
            Web developer yang berfokus pada pengalaman pengguna, performa,
            dan desain yang bersih namun fungsional.
          </motion.p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2">
          <motion.article variants={fadeUp}
            className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 ring-1 ring-white/10 backdrop-blur-xl transition hover:border-white/20">
            <h3 className="text-xl font-semibold text-white">Keahlian</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              {["Next.js & React", "Tailwind CSS & desain responsif", "UI/UX minimalis", "Optimasi performa dan aksesibilitas"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article variants={fadeUp}
            className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 ring-1 ring-white/10 backdrop-blur-xl transition hover:border-white/20">
            <h3 className="text-xl font-semibold text-white">Nilai Saya</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              {["Kolaborasi dan komunikasi transparan", "Pengiriman tepat waktu dengan kualitas tinggi", "Penyelesaian masalah secara kreatif", "Fokus pada pengalaman pengguna"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mt-6 rounded-3xl border border-white/10 bg-slate-900/50 p-8 ring-1 ring-white/10 backdrop-blur-xl">
          <motion.h3 variants={fadeUp} className="text-xl font-semibold text-white">Tech Stack</motion.h3>
          <motion.div variants={stagger} className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.div key={i} variants={fadeUp}>
                <SkillBadge name={skill} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mt-6 rounded-3xl border border-white/10 bg-slate-900/50 p-8 ring-1 ring-white/10 backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-white">Sedikit Cerita</h3>
          <p className="mt-4 text-slate-300 leading-7">
            Dalam setiap proyek, saya selalu mencari cara untuk menyampaikan cerita brand
            melalui antarmuka yang intuitif. Bagi saya, kode yang baik bukan hanya soal
            fungsi, tapi juga bagaimana pengalaman yang dirasakan pengguna saat berinteraksi dengannya.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════ PROJECTS ═══════════════ */}
      <section id="projects" className="mx-auto w-full max-w-6xl">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mb-12 text-center">
          <motion.span variants={fadeUp}
            className="inline-block rounded-full border border-white/10 bg-slate-900/50 px-4 py-1 text-xs font-medium tracking-widest text-slate-400 uppercase">
            Portofolio
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-9 text-4xl font-bold text-white sm:text-5xl">
            Proyek Saya
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-slate-400 leading-relaxed">
            Beberapa proyek yang pernah saya kerjakan, mulai dari aplikasi web hingga dashboard interaktif.
          </motion.p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div key={i} variants={fadeUp}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════ CONTACT ═══════════════ */}
      <section id="contact" className="mx-auto w-full max-w-6xl">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mb-12">
          <motion.span variants={fadeUp}
            className="inline-flex rounded-full bg-sky-400/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-sky-300 ring-1 ring-sky-300/20">
            Kontak
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Mari membuat ide Anda jadi nyata.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-slate-300 leading-relaxed">
            Jika Anda ingin bekerja sama atau sekadar menyapa, silakan kirim pesan.
            Saya biasanya merespons dalam 1-2 hari kerja.
          </motion.p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2">
          <motion.div variants={fadeUp}
            className="rounded-3xl bg-slate-900/80 p-6 ring-1 ring-white/10 backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">Informasi</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Gunakan cara yang paling nyaman untuk Anda.
            </p>
            <dl className="mt-6 space-y-4 text-sm">
              {[
                { label: "Email", value: "nama@domain.com", sky: true },
                { label: "Telegram", value: "@namauser", sky: true },
                { label: "Lokasi", value: "Jakarta, Indonesia", sky: false },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <dt className="font-medium text-slate-200">{item.label}</dt>
                  <dd className={`mt-1 ${item.sky ? "text-sky-300" : "text-slate-300"}`}>
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div variants={fadeUp}>
            <ContactForm />
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}