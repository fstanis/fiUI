import type { ComponentChildren } from 'preact';
import { useEffect, useId, useRef } from 'preact/hooks';
import { cx } from '../../internal/cx';
import styles from './Modal.module.css';

export interface ModalProps {
  /** Whether the dialog is on screen. Nothing is rendered while it is closed. */
  isOpen: boolean;
  /** The dialog's heading, which also names it for assistive technology. */
  title: ComponentChildren;
  /** Called when the backdrop is clicked, Escape is pressed, or the close control is chosen. */
  onDismiss: () => void;
  /** Renders a `close` control beside the title. Defaults to `false`. */
  hasCloseControl?: boolean;
  /** Buttons for the footer row, right-aligned in the order given. */
  actions?: ComponentChildren;
  class?: string;
  children?: ComponentChildren;
}

/** A dialog laid over the page that takes focus until it is dismissed. */
export function Modal({
  isOpen,
  title,
  onDismiss,
  hasCloseControl = false,
  actions,
  class: className,
  children,
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const previouslyFocused = document.activeElement;
    dialogRef.current?.focus();
    return () => {
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const dismissOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onDismiss();
      }
    };
    document.addEventListener('keydown', dismissOnEscape);
    return () => document.removeEventListener('keydown', dismissOnEscape);
  }, [isOpen, onDismiss]);

  if (!isOpen) {
    return null;
  }

  return (
    <div class={styles.backdrop} onClick={onDismiss}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        class={cx(styles.dialog, className)}
        onClick={(event) => event.stopPropagation()}
      >
        <div class={styles.header}>
          <span id={titleId} class={styles.title}>
            {title}
          </span>
          {hasCloseControl && (
            <button type="button" class={styles.close} onClick={onDismiss}>
              close
            </button>
          )}
        </div>
        {children}
        {actions && <div class={styles.actions}>{actions}</div>}
      </div>
    </div>
  );
}
