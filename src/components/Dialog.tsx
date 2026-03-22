import { useEffect, useRef } from 'preact/hooks';
import { createContext } from 'preact';
import { useContext } from 'preact/hooks';
import type { ComponentChildren, HTMLAttributes } from 'preact';
import { cn } from '../lib/utils';

const DialogContext = createContext<((open: boolean) => void) | null>(null);

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ComponentChildren;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }
    if (open && !el.open) {
      el.showModal();
    } else if (!open && el.open) {
      el.close();
    }
  }, [open]);

  return (
    <DialogContext.Provider value={onOpenChange}>
      <dialog
        ref={ref}
        onClose={() => onOpenChange(false)}
        onClick={(e) => {
          if (e.target === ref.current) {
            onOpenChange(false);
          }
        }}
        className="backdrop:bg-black/80 bg-transparent p-0 m-auto border-none outline-none open:animate-dialog-in"
      >
        {open && children}
      </dialog>
    </DialogContext.Provider>
  );
}

interface DialogContentProps {
  className?: string;
  children: ComponentChildren;
}

export function DialogContent({ className, children }: DialogContentProps) {
  const onOpenChange = useContext(DialogContext);

  return (
    <div
      className={cn('bg-background border border-border rounded-lg shadow-lg p-6 w-full max-w-lg relative', className)}
    >
      {children}
      <button
        onClick={() => onOpenChange?.(false)}
        className="absolute right-4 top-4 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
        <span className="sr-only">Close</span>
      </button>
    </div>
  );
}

export function DialogHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col space-y-1.5 text-left', className)} {...props} />;
}

export function DialogTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        'text-2xl mb-3 font-semibold font-display leading-none tracking-wide uppercase text-foreground/80',
        className,
      )}
      {...props}
    />
  );
}

export function DialogSubtitle({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="w-1.5 h-4 rounded-full bg-primary" />
      <h3
        className={cn('text-lg font-semibold font-display uppercase tracking-wide text-foreground/70', className)}
        {...props}
      >
        {' '}
        {children}{' '}
      </h3>
    </div>
  );
}
