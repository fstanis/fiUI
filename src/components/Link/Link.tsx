import type { AnchorHTMLAttributes, ComponentChildren } from 'preact';
import { cx } from '../../internal/cx';
import styles from './Link.module.css';

/** Color role of the link. */
export type LinkVariant = 'default' | 'accent';

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'class'> {
  /** Color role. Defaults to `default`. */
  variant?: LinkVariant;
  class?: string;
  children?: ComponentChildren;
}

/** An inline text hyperlink. */
export function Link({ variant = 'default', class: className, children, ...rest }: LinkProps) {
  return (
    <a class={cx(styles.link, styles[variant], className)} {...rest}>
      {children}
    </a>
  );
}
