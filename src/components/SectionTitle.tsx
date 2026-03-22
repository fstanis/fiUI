import type { ComponentChildren } from 'preact';
import { cn } from '../lib/utils';

export function SectionTitle({ className, children }: { className?: string; children: ComponentChildren }) {
  return (
    <div
      className={cn(
        'flex items-center gap-2.5 mb-3 text-2xl text-foreground/80 uppercase tracking-widest font-display font-bold',
        className,
      )}
    >
      <div className="w-1.5 h-5 rounded-full bg-primary" />
      <h1>{children}</h1>
    </div>
  );
}

export function SectionSubtitle({ className, children }: { className?: string; children: ComponentChildren }) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 mb-3 text-lg text-foreground/70 uppercase tracking-wide font-display font-semibold',
        className,
      )}
    >
      <div className="w-1.5 h-4 rounded-full bg-primary" />
      <h2>{children}</h2>
    </div>
  );
}
