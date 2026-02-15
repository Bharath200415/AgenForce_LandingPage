import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logo-cloud";
import { Features } from "@/components/features";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <LogoCloud/>
      <Features/>
    </div>
  );
}
