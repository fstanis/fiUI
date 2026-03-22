import { cn } from '../lib/utils';
import type { HTMLAttributes } from 'preact';

export function ListRow({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex items-center gap-4 px-3 py-2.5 hover:bg-accent/30 transition-colors group', className)}
      {...props}
    />
  );
}
