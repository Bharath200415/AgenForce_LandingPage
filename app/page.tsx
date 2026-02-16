import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logo-cloud";
import { Features } from "@/components/features";
import { Hero_v2 } from "@/components/hero_v2";
import { FeaturesSecondary } from "@/components/features-secondary/index";

export default function Home() {
  return (
    <div className="min-h-screen">

        <Hero/>
        <LogoCloud/>
        <Features/>
        <Hero_v2/>
        <FeaturesSecondary/>

    </div>
  );
}
