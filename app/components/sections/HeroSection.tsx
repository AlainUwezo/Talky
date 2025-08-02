"use client";

import Image from "next/image";
import { Button } from "@/app/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-[#3D003A] py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/5 flex justify-center">
          <Image
            src="/hero-bg.png"
            alt="Apprentissage de l'anglais"
            width={500}
            height={500}
            className="w-full max-w-md h-auto object-contain"
            priority
          />
        </div>
        {/* Texte à gauche */}
        <div className="w-full md:w-3/5 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-center">
            Apprends l'anglais autrement
          </h1>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            Une méthode moderne, interactive et efficace pour progresser
            rapidement à ton rythme.
          </p>
          <div className="text-center">
            <Button size="lg">S’authentifier</Button>
          </div>
        </div>

        {/* Image à droite */}
        <div className="w-full md:w-1/5 flex justify-center">
          <Image
            src="/hero2.png"
            alt="Apprentissage de l'anglais"
            width={500}
            height={500}
            className="w-full max-w-md h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
