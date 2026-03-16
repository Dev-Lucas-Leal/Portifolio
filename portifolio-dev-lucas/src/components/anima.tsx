"use client"
import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/tech/foto-html.png", alt: "html foto", href: "https://google.com" },
  { src: "/tech/css-foto.png", alt: "Css foto", href: "https://google.com" },
  { src: "/tech/c-foto.png", alt: "c foto", href: "https://google.com" },
  { src: "/tech/foto-node.png", alt: "node foto", href: "https://google.com" },
  { src: "/tech/foto-python.png", alt: "python foto", href: "https://google.com" },
  { src: "/tech/foto-react.png", alt: "react foto", href: "https://google.com" },
  { src: "/tech/foto-ts.png", alt: "ts foto", href: "https://google.com" },
  { src: "/tech/javascript-foto.png", alt: "js foto", href: "https://google.com" },
  { src: "/tech/php-foto.png", alt: "php foto", href: "https://google.com" },
  { src: "/tech/sql-foto.png", alt: "sql foto", href: "https://google.com" },
  { src: "/tech/express-js-foto.png", alt: "express foto", href: "https://google.com" },
  { src: "/tech/next-foto.png", alt: "next foto", href: "https://google.com" },
];

export default function App() {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={imageLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
      

    </div>
  );
}