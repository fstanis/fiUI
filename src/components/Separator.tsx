import { cn } from '../lib/utils';
import type { HTMLAttributes } from 'preact';

type SeparatorProps = HTMLAttributes<HTMLDivElement> & {
  orientation?: 'horizontal' | 'vertical';
};

export function Separator({ className, orientation = 'horizontal', ...props }: SeparatorProps) {
  let sizeClass = 'h-full w-px';
  if (orientation === 'horizontal') {
    sizeClass = 'h-px w-full';
  }

  return <div role="separator" className={cn('shrink-0 bg-border', sizeClass, className)} {...props} />;
}
