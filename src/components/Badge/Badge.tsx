import type { ComponentChildren } from 'preact';
import { cx } from '../../internal/cx';
import styles from './Badge.module.css';

/**
 * Visual style of the badge.
 * - `tint`: filled accent chip (e.g. an "error" tag).
 * - `text`: bare accent-colored text (e.g. a "−84%" savings figure).
 * - `outline`: bordered surface chip.
 * - `neutral`: faint text, no fill.
 */
export type BadgeVariant = 'tint' | 'text' | 'outline' | 'neutral';

export interface BadgeProps {
  /** Visual style. Defaults to `tint`. */
  variant?: BadgeVariant;
  children?: ComponentChildren;
  class?: string;
}

/** A compact status or metric label. */
export function Badge({ variant = 'tint', children, class: className }: BadgeProps) {
  return <span class={cx(styles.badge, styles[variant], className)}>{children}</span>;
}
