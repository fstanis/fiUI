import type { ComponentChildren } from 'preact';
import { cn } from '../lib/utils';

interface TooltipProps {
  content: string;
  side?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  children: ComponentChildren;
}

export function Tooltip({ content, side = 'bottom', className, children }: TooltipProps) {
  return (
    <div className="relative group/tip inline-flex">
      {children}
      <div
        role="tooltip"
        className={cn(
          'absolute z-50 hidden group-hover/tip:block pointer-events-none whitespace-nowrap',
          'overflow-hidden rounded-xs border border-border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md',
          side === 'bottom' && 'top-full mt-1 left-1/2 -translate-x-1/2',
          side === 'top' && 'bottom-full mb-1 left-1/2 -translate-x-1/2',
          side === 'left' && 'right-full mr-1 top-1/2 -translate-y-1/2',
          side === 'right' && 'left-full ml-1 top-1/2 -translate-y-1/2',
          className,
        )}
      >
        {content}
      </div>
    </div>
  );
}
