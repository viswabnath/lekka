"use client";

import dynamic from "next/dynamic";

const LedgerHero = dynamic(() => import("./LedgerHero"), { ssr: false });

export default function LedgerHeroLoader({ compact = false }) {
  return <LedgerHero compact={compact} />;
}
