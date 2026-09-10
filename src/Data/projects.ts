export type Project = {
  title: string;
  desc: string;
  tags: string[];
  link: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Coffee Lassik",
    desc: "Coffee shop website with modern design and responsive layout.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
    link: "https://coffee-lassik.vercel.app/",
    github: "https://github.com/Yaalleee/CoffeeLassik",
  },
  {
    title: "Satset Ai",
    desc: "satset ai adalah aplikasi berbasis kecerdasan buatan untuk membantu dalam proses pengambilan keputusan.",
    tags: ["TypeScript", "Framer Motion", "Tailwind CSS"],
    link: "satset-ai.netlify.app//",
    github: "https://github.com/Yaalleee/",
  },
  {
    title: "Listing Kendaraan",
    desc: "Dashboard interaktif untuk visualisasi data penjualan secara real-time.",
    tags: ["Next.js", "Chart.js", "API Integration"],
    link: "https://listing-web-kendaraan-syahrial.vercel.app/",
    github: "https://github.com/Yaalleee/",
  },
];