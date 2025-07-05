"use client"

import ContactContent from "@/components/contactcontent";
import Contacts from "@/components/contacts";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { NextSeo } from "next-seo";
import { useSelector } from "react-redux";


export default function Home() {
  const language = useSelector((state) => state.languageReducer.language)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative grid-background">
      <div className="fixed top-[-25vw] right-[-25vw] rotate-45 w-[50vw] h-[50vw] bg-[var(--primary20)] rounded-3xl z-0 "></div>
      <div className="fixed top-[-22vw] right-[-25vw] rotate-45 w-[50vw] h-[50vw] bg-[var(--primary10)] rounded-3xl z-0"></div>
      <Header />
      <Contacts />
      <ContactContent />
      <Footer />
    </main>
  )
}
