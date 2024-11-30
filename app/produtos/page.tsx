"use client";

import "@/app/produtos/produtos.css"
import TopSection from "./components/topsection/TopSection";
import Modalities from "./components/modalities/Modalities";

export default function Produtos() {

  const onBeMemberClick = () => {
    console.log("Clicked")
  }

  return (
    <main className="main">
      <TopSection onBeMemberClick={onBeMemberClick} />
      <Modalities />
    </main>
  );
}
