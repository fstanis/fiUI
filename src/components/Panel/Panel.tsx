import type { ComponentChildren, JSX } from 'preact';
import { cx } from '../../internal/cx';
import styles from './Panel.module.css';

export interface PanelProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'class'> {
  /** Applies default internal padding. Defaults to `true`. */
  padded?: boolean;
  class?: string;
  children?: ComponentChildren;
}

/** A raised, bordered surface used to group related content. */
export function Panel({ padded = true, class: className, children, ...rest }: PanelProps) {
  return (
    <div class={cx(styles.panel, padded && styles.padded, className)} {...rest}>
      {children}
    </div>
  );
}
