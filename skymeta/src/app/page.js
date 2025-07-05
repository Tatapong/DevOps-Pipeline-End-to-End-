"use client"

import Features from "@/components/feature";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Tech from "@/components/tech";
import Technologies from "@/components/technologies";
import Testimony from "@/components/testimony";
import { useSelector } from "react-redux";

export default function Home() {
  const language = useSelector((state) => state.languageReducer.language);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative grid-background overflow-x-hidden">
      <div className="absolute top-[-25vw] right-[-25vw] rotate-45 w-[50vw] h-[50vw] bg-[var(--primary20)] rounded-3xl z-0 "></div>
      <div className="absolute top-[-22vw] right-[-25vw] rotate-45 w-[50vw] h-[50vw] bg-[var(--primary10)] rounded-3xl z-0"></div>
      <Header />
      <Hero />
      <Tech />
      <Features />
      <Technologies />
      <Testimony />
      <Footer />
    </main>
  )
}
