import type { ComponentChildren } from 'preact';

interface DataRowProps {
  label: string;
  children: ComponentChildren;
}

export function DataRow({ label, children }: DataRowProps) {
  return (
    <div className="flex justify-between items-baseline gap-4 py-1.5">
      <span className="text-sm uppercase tracking-widest text-muted-foreground/80 shrink-0">{label}</span>
      <span className="text-foreground/80 text-right tabular-nums">{children}</span>
    </div>
  );
}
