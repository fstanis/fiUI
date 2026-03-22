import { cn } from '../lib/utils';
import type { InputHTMLAttributes } from 'preact';

type InputProps = Omit<InputHTMLAttributes, 'size'>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'h-8 w-full px-2 bg-muted text-foreground border border-border tabular-nums focus:outline-none focus:ring-1 focus:ring-ring',
        className,
      )}
      {...props}
    />
  );
}
