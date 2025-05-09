import { GlowEffect } from './GlowEffect';
import { ArrowRight } from 'lucide-react';

export function GlowEffectButton() {
  return (
    <div className="relative inline-block">
      <GlowEffect
        colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
        mode="colorShift"
        blur="soft"
        duration={3}
        scale={0.9}
      />
      <button
        className="
          relative flex items-center gap-2 
          rounded-lg bg-zinc-950 px-6 py-3 
          text-base text-zinc-50
          outline-1 outline-white/10
          hover:bg-zinc-900 transition
        "
      >
        Explore <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
}
