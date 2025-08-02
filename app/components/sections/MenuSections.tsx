"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const menus = [
  { label: "Vocabulaire", href: "/vocabulaire", style: "top-[100px] left-[80px]" },
  { label: "Lecture", href: "/lecture", style: "top-[80px] left-[280px]" },
  { label: "Grammaire", href: "/grammaire", style: "top-[100px] right-[80px]" },
  { label: "Tongue twister", href: "/twister", style: "top-[220px] left-[120px]" },
  { label: "Musique", href: "/musique", style: "top-[260px] left-[50%] -translate-x-1/2" },
  { label: "Vidéo", href: "/video", style: "top-[220px] right-[120px]" },
];

export default function MenuSection() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden text-white">
      {/* Image de fond */}
      <Image
        src="/white-motif-bg.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Blobs décoratifs visibles avec couleur secondary */}
      <div className="absolute top-[-30px] left-[-30px] w-60 h-60 bg-secondary/30 rounded-full blur-xl z-20" />
      <div className="absolute bottom-[-30px] right-[30px] w-52 h-52 bg-secondary/20 rounded-full blur-xl z-20" />

      {/* Titre repositionné en haut centré */}
      <h2 className="absolute top-8 left-1/2 -translate-x-1/2 text-3xl font-bold text-white z-30">
        Programmes
      </h2>

      {/* Boutons de menu repositionnés */}
      <div className="relative w-full h-full z-30">
        {menus.map((menu, idx) => (
          <div key={idx} className={cn("absolute", menu.style)}>
            <Link href={menu.href}>
              <Button className="bg-primary text-white rounded-md shadow-md px-6 py-2 hover:bg-secondary transition-colors flex items-center gap-2">
                {menu.label}
              </Button>
            </Link>
          </div>
        ))}

        {/* Bouton "Continuer" centré en bas */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <Link href="/continuer">
            <Button className="bg-white text-primary font-semibold px-8 py-2 rounded-md hover:bg-secondary/20 shadow-lg transition-colors">
              Continuer
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
