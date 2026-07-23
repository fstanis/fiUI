import type { ComponentChildren } from 'preact';
import { cx } from '../../internal/cx';
import styles from './Kbd.module.css';

export interface KbdProps {
  children?: ComponentChildren;
  class?: string;
}

/** Displays a keyboard key or shortcut hint. */
export function Kbd({ children, class: className }: KbdProps) {
  return <kbd class={cx(styles.kbd, className)}>{children}</kbd>;
}
