"use client"

import Image from "next/image"
import { motion } from "motion/react"

export function HeroCard() {
  return (
    <motion.div
      className="sport-card relative overflow-hidden"
      initial={{ x: 18, y: 18 }}
      animate={{ x: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
    >
      <div className="jersey-band h-3" />
      <div className="flex items-center justify-between px-4 py-2">
        <span className="font-display text-3xl uppercase">01</span>
        <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-steel">
          Springfield card
        </span>
      </div>
      <Image
        src="/mark.svg"
        alt="Muscular cartoon shark in a green hoodie pushing a walk-behind mower, grass flying"
        width={720}
        height={576}
        className="mx-auto w-full max-w-md object-contain"
        unoptimized
        priority
      />
      <div className="flex items-center justify-between border-t-4 border-ink bg-hot px-4 py-3 text-ground">
        <span className="font-display text-3xl uppercase leading-none">Sharky</span>
        <span className="text-xs font-extrabold uppercase tracking-widest">
          Walk-behind
        </span>
      </div>
    </motion.div>
  )
}
