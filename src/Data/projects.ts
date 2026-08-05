export type Project = {
  title: string;
  desc: string;
  tags: string[];
  link: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Aplikasi Todo List",
    desc: "Aplikasi manajemen tugas dengan fitur drag & drop dan penyimpanan lokal.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://example.com",
    github: "https://github.com/username/todo-app",
  },
  {
    title: "Satset Ai",
    desc: "Landing page responsif dengan animasi halus dan optimasi performa tinggi.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    link: "satset-ai.netlify.app/",
    github: "https://github.com/username/landing-page",
  },
  {
    title: "Listing Kendaraan",
    desc: "Dashboard interaktif untuk visualisasi data penjualan secara real-time.",
    tags: ["Next.js", "Chart.js", "API Integration"],
    link: "listing-web-kendaraan-syahrial.vercel.app/",
    github: "https://github.com/username/dashboard",
  },
];