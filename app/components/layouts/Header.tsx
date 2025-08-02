"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between">
        {/* Logo image cliquable */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo Talky"
            width={100}
            height={40}
            // className="h-auto w-auto"
            priority
          />
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-foreground hover:text-primary transition"
          >
            Accueil
          </Link>
          <Link
            href="/a-propos"
            className="text-sm font-medium text-foreground hover:text-primary transition"
          >
            À propos
          </Link>
          <Link
            href="/programmes"
            className="text-sm font-medium text-foreground hover:text-primary transition"
          >
            Programmes
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground hover:text-primary transition"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
