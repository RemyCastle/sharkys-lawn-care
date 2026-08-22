"use client"

import Image from "next/image"
import { motion } from "motion/react"

export function HeroCard() {
  return (
    <motion.div
      className="sport-card overflow-hidden"
      initial={{ x: 18, y: 18 }}
      animate={{ x: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
    >
      <Image
        src="/logo-profile.jpg"
        alt="Sharky's Lawn Care mark: polo shark pushing a walk-behind mower"
        width={720}
        height={720}
        className="w-full bg-white object-contain"
        unoptimized
        priority
      />
    </motion.div>
  )
}
