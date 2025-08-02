"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Card, CardContent } from "@/app/components/ui/card";
import {
  Brain,
  Glasses,
  Search,
  Hand,
  Repeat,
  Network,
  Trophy,
  User,
  Pencil,
  ChevronDown,
} from "lucide-react";

const colorData = [
  {
    title: "Jaune",
    description: "Le jaune stimule la mémoire et l’attention.",
  },
  {
    title: "Vert",
    description: "Le vert favorise la concentration et l'équilibre.",
  },
  {
    title: "Violet",
    description: "Le violet est associé à la créativité et à l’intuition.",
  },
];

const iconsData = [
  {
    icon: <Brain className="w-10 h-10 text-secondary" />,
    description: "Utilisé pour représenter la mémoire à long terme.",
  },
  {
    icon: <Glasses className="w-10 h-10 text-secondary" />,
    description: "Symbolise l’analyse ou l’observation.",
  },
  {
    icon: <Search className="w-10 h-10 text-secondary" />,
    description: "Focalisation sur les détails.",
  },
  {
    icon: <Hand className="w-10 h-10 text-secondary" />,
    description: "Mise en application des connaissances.",
  },
  {
    icon: <Repeat className="w-10 h-10 text-secondary" />,
    description: "Indique un processus ou une boucle d’apprentissage.",
  },
  {
    icon: <Network className="w-10 h-10 text-secondary" />,
    description: "Organisation visuelle des idées.",
  },
  {
    icon: <Trophy className="w-10 h-10 text-secondary" />,
    description: "Représente la réussite ou l’objectif atteint.",
  },
  {
    icon: <User className="w-10 h-10 text-secondary" />,
    description: "Cible l’individualisation de l’apprentissage.",
  },
  {
    icon: <Pencil className="w-10 h-10 text-secondary" />,
    description: "Activité d’expression écrite ou prise de notes.",
  },
];

export default function ColorInfoSection() {
  return (
    <section className="py-16 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
          Présentation des éléments
        </h2>

        {/* Couleurs */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-primary">Couleurs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {colorData.map((item, index) => (
              <Card
                key={index}
                className="rounded-2xl shadow-md p-6 bg-background hover:shadow-lg transition-all"
              >
                <CardContent className="text-center">
                  <div className="text-lg font-semibold text-foreground mb-4">
                    {item.title}
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="flex justify-center">
                        <ChevronDown className="w-6 h-6 text-primary cursor-pointer hover:text-secondary transition-colors" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-64 text-sm text-muted-foreground">
                      {item.description}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Icônes */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-primary">Icônes</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {iconsData.map((item, index) => (
              <Card
                key={index}
                className="rounded-2xl shadow-md p-6 flex items-center justify-center bg-background hover:shadow-lg transition-all"
              >
                <CardContent className="flex flex-col items-center gap-4 text-center">
                  {item.icon}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="flex justify-center">
                        <ChevronDown className="w-5 h-5 text-primary cursor-pointer hover:text-secondary transition-colors" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-64 text-sm text-muted-foreground text-left mt-2">
                      {item.description}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
