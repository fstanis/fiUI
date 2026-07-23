import type { ComponentChildren, JSX } from 'preact';
import { cx } from '../../internal/cx';
import styles from './MenuBar.module.css';

export interface MenuBarProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'class'> {
  class?: string;
  children?: ComponentChildren;
}

/** A top application bar for branding, navigation, and primary actions. */
export function MenuBar({ class: className, children, ...rest }: MenuBarProps) {
  return (
    <div class={cx(styles.menubar, className)} role="menubar" {...rest}>
      {children}
    </div>
  );
}
