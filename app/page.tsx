import Image from "next/image";
import HeroSection from "./components/sections/HeroSection";
import ColorInfoSection from "./components/sections/ColorInfosSection";
import MenuSection from "./components/sections/MenuSections";
import ColorPaletteSection from "./components/sections/ColorPaletteSection";
import HowItWorksSection from "./components/sections/HowItWorkSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <ColorInfoSection />
      <MenuSection /> 
      <ColorPaletteSection />   
    </>
  );
}
