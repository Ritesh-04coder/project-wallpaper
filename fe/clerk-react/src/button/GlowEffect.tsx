import { cn } from '../lib/utils';
import { motion, type Transition, type TargetAndTransition } from 'framer-motion';

export type GlowEffectProps = {
  className?: string;
  style?: React.CSSProperties;
  colors?: string[];
  mode?: 'rotate' | 'pulse' | 'breathe' | 'colorShift' | 'flowHorizontal' | 'static';
  blur?: number | 'softest' | 'soft' | 'medium' | 'strong' | 'stronger' | 'strongest' | 'none';
  transition?: Transition;
  scale?: number;
  duration?: number;
};

export function GlowEffect({
  className,
  style,
  colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F'],
  mode = 'rotate',
  blur = 'medium',
  transition,
  scale = 1,
  duration = 5,
}: GlowEffectProps) {
  const BASE_TRANS: Transition = { repeat: Infinity, duration, ease: 'linear' };
  const t = transition ?? BASE_TRANS;
  const animations = {
    rotate: {
      background: [
        `conic-gradient(from 0deg at 50% 50%, ${colors.join(', ')})`,
        `conic-gradient(from 360deg at 50% 50%, ${colors.join(', ')})`,
      ],
      transition: t,
    },
    pulse: {
      background: colors.map(c => `radial-gradient(circle at 50% 50%, ${c} 0%, transparent 100%)`),
      scale: [scale, scale * 1.1, scale],
      opacity: [0.5, 0.8, 0.5],
      transition: { ...t, repeatType: 'mirror' as const },
    },
    breathe: {
      background: colors.map(c => `radial-gradient(circle at 50% 50%, ${c} 0%, transparent 100%)`),
      scale: [scale, scale * 1.05, scale],
      transition: { ...t, repeatType: 'mirror' as const },
    },
    colorShift: {
      background: colors.map((c, i) => {
        const next = colors[(i + 1) % colors.length];
        return `conic-gradient(from 0deg at 50% 50%, ${c} 0%, ${next} 50%, ${c} 100%)`;
      }),
      transition: { ...t, repeatType: 'mirror' as const },
    },
    flowHorizontal: {
      background: colors.map((c, i) => {
        const next = colors[(i + 1) % colors.length];
        return `linear-gradient(to right, ${c}, ${next})`;
      }),
      transition: { ...t, repeatType: 'mirror' as const },
    },
    static: {
      background: `linear-gradient(to right, ${colors.join(', ')})`,
    },
  };

  const blurMap = {
    softest:  'blur-sm',
    soft:     'blur',
    medium:   'blur-md',
    strong:   'blur-lg',
    stronger: 'blur-xl',
    strongest:'blur-2xl',
    none:     'blur-none',
  } as const;

  const blurClass =
    typeof blur === 'number'
      ? `blur-[${blur}px]`
      : blurMap[blur as keyof typeof blurMap];

  return (
    <motion.div
      style={{ ...style, '--scale': scale, willChange: 'transform' } as React.CSSProperties}
      animate={animations[mode] as TargetAndTransition}
      className={cn(
        'pointer-events-none absolute inset-0 transform-gpu scale-[var(--scale)]',
        blurClass,
        className
      )}
    />
  );
}
