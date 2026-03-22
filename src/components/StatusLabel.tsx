import { cn } from '../lib/utils';
import type { HTMLAttributes } from 'preact';

export function StatusLabel({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('text-sm uppercase tracking-widest text-muted-foreground/80', className)} {...props} />;
}
