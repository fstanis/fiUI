import type { ComponentChildren, JSX } from 'preact';
import { cx } from '../../internal/cx';
import styles from './StatusBar.module.css';

export interface StatusBarProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'class' | 'children'> {
  /** Content aligned to the left. */
  left?: ComponentChildren;
  /** Content aligned to the right. */
  right?: ComponentChildren;
  /** Raw children, used instead of `left`/`right` when provided. */
  children?: ComponentChildren;
  class?: string;
}

/** A slim bottom bar for contextual status text. */
export function StatusBar({ left, right, children, class: className, ...rest }: StatusBarProps) {
  return (
    <div class={cx(styles.statusbar, className)} {...rest}>
      {children ?? (
        <>
          <span>{left}</span>
          <span>{right}</span>
        </>
      )}
    </div>
  );
}
