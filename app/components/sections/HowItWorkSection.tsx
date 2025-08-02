"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import { GraduationCap, BookOpenCheck } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section className="bg-muted py-12 px-4">
      <div className="max-w-7xl mx-auto px-4 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
          Comment ça marche ?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <Card className="bg-background shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="flex items-start gap-4 p-6">
              <div className="bg-primary/10 p-3 rounded-md">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  Comprendre son processus d’apprentissage
                </h3>
                <p className="text-muted-foreground">
                  Identifie ta manière d’apprendre pour mieux progresser et rester motivé.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="bg-background shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="flex items-start gap-4 p-6">
              <div className="bg-primary/10 p-3 rounded-md">
                <BookOpenCheck className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  Découvre les consignes pour bien étudier
                </h3>
                <p className="text-muted-foreground">
                  Suis des conseils clairs et adaptés pour rendre ton apprentissage plus efficace.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
