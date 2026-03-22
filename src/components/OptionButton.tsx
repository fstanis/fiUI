import type { ComponentChildren } from 'preact';

interface OptionButtonProps {
  active: boolean;
  onClick: () => void;
  children: ComponentChildren;
}

export function OptionButton({ active, onClick, children }: OptionButtonProps) {
  let stateClass = 'bg-muted text-muted-foreground hover:text-foreground hover:bg-accent';
  if (active) {
    stateClass = 'bg-primary text-primary-foreground';
  }

  return (
    <button onClick={onClick} className={`h-8 px-3 transition-colors cursor-pointer ${stateClass}`}>
      {children}
    </button>
  );
}
