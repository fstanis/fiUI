import type { ComponentChildren } from 'preact';
import { cn } from '../lib/utils';

interface DropZoneProps {
  onClick?: () => void;
  className?: string;
  children: ComponentChildren;
}

export function DropZone({ onClick, className, children }: DropZoneProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full h-full min-h-80 border-2 border-dashed border-border flex flex-col items-center justify-center gap-4 cursor-pointer transition-colors hover:border-primary/40 hover:bg-accent/30 group',
        className,
      )}
    >
      {children}
    </button>
  );
}
