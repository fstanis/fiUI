import type { ComponentChildren, JSX } from 'preact';
import { cx } from '../../internal/cx';
import styles from './Toolbar.module.css';

export interface ToolbarProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'class'> {
  class?: string;
  children?: ComponentChildren;
}

/** A secondary bar holding controls such as navigation and view options. */
export function Toolbar({ class: className, children, ...rest }: ToolbarProps) {
  return (
    <div class={cx(styles.toolbar, className)} role="toolbar" {...rest}>
      {children}
    </div>
  );
}
