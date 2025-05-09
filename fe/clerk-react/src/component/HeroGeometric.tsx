import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { ElegantShape } from "./ElegantShape";
import { cn } from "../lib/utils";

import logoUrl from '../assets/icons8-obs-studio.svg';

interface HeroGeometricProps {
  badge?: string;
  title1?: string;
  title2?: string;
}

export function HeroGeometric({
  badge = "OBS Studio",
  title1 = "Elevate Your Quality Wallpaper",
  title2 = "Best Wallpapers",
}: HeroGeometricProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5 + i * 0.2, ease: [0.25, 0.4, 0.25, 1] },
    }),
  };

  return (
    <div className="w-full min-h-full flex items-center justify-center relative bg-[#030303] flex-col">

      <motion.img
        src={logoUrl}
        width={48}
        height={48}
        alt="App Logo"
        className="absolute top-6 left-6 z-20 drop-shadow-lg cursor-pointer"
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{ opacity: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }, scale: { duration: 0.8 }, rotate: { repeat: Infinity, duration: 10, ease: 'linear' } }}
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(99,102,241,0.05),transparent,rgba(244,63,94,0.05))] blur-[100px]" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] top-[15%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] top-[70%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] bottom-[5%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] top-[10%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] top-[5%]"
        />
      </div>

      <div className="relative z-10 p-8 text-center max-w-7xl">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-10 md:mb-16"
        >
          <Circle className="h-2 w-2 fill-rose-500/80" />
          <span className="text-sm text-white/60 tracking-wide">{badge}</span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-6xl md:text-8xl font-bold mb-8 md:mb-12 tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
            {title1}
          </span>
          <br />
          <span className={cn("bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300")}>
            {title2}
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-base sm:text-lg md:text-xl text-white/40 mb-12 md:mb-16 leading-relaxed font-light max-w-xl mx-auto"
        >
          Crafting exceptional digital experiences through innovative design and cutting-edge technology.
        </motion.p>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_top,#030303,transparent,rgba(3,3,3,0.8))] pointer-events-none" />
    </div>
  );
}