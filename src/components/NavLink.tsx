import type { ComponentChildren, AnchorHTMLAttributes } from 'preact';
import { cn } from '../lib/utils';

type NavLinkProps = Omit<AnchorHTMLAttributes, 'icon'> & {
  active?: boolean;
  icon?: ComponentChildren;
  children: ComponentChildren;
};

export function NavLink({ active, icon, className, children, ...props }: NavLinkProps) {
  let stateClass = 'text-muted-foreground hover:text-foreground hover:bg-accent/50';
  if (active) {
    stateClass = 'bg-primary/10 text-primary font-semibold';
  }

  return (
    <a
      className={cn('flex items-center gap-2.5 px-3 py-2 tracking-wide transition-colors', stateClass, className)}
      {...props}
    >
      {icon}
      <span className="uppercase tracking-widest">{children}</span>
    </a>
  );
}
