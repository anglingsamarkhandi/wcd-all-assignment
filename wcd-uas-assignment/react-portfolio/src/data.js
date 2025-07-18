import HeroImage from "/assets/hero-img.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/js.png";
import Tools6 from "/assets/tools/github.png";
import Tools7 from "/assets/tools/canva.png";
import Tools8 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Wabah Kolera",
    desk: "Website ini menyediakan informasi tentang wabah kolera, termasuk pengertian, penyebab, gejala, cara pencegahan, dan langkah-langkah yang perlu diambil untuk mencegah penyebaran penyakit ini.",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "200",
    url: "https://smakbo.github.io/2020-wabah-xi-3-kolera/",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website Pokemon Mobile",
    desk: "Website ini menampilkan informasi detail tentang Pokémon, dengan desain responsif menggunakan ReactJS dan Tailwind CSS. Pengguna dapat melihat statistik Pokémon secara interaktif di perangkat mobile.",
    tools: ["C#", "Unity Hub", "Unity Script", "itch.io"],
    dad: "300",
    url: "https://github.com/anglingsamarkhandi/wcd-all-assignment/tree/main/assignment-5",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "VR Shoot Range Project",
    desk: "Proyek VR ini memungkinkan pengguna merasakan pengalaman interaktif dalam dunia virtual, dengan fitur seperti permainan tembak-menembak menggunakan teknologi Unity.",
    tools: ["Vite", "ReactJS", "TailwindCSS"],
    dad: "400",
    url: "https://danielsatria.itch.io/utsvr-vr03-kelompok3",
  },
];
