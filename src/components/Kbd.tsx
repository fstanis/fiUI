import { cn } from '../lib/utils';
import type { HTMLAttributes } from 'preact';

export function Kbd({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <kbd
      className={cn(
        'text-sm px-1.5 py-0.5 bg-muted text-muted-foreground border border-border tracking-wider',
        className,
      )}
      {...props}
    />
  );
}
