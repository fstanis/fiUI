import type { ComponentChildren } from 'preact';
import { cx } from '../../internal/cx';
import styles from './Stat.module.css';

/** Color role applied to the stat's value. */
export type StatTone = 'default' | 'accent';

/** Horizontal alignment of the value and label. */
export type StatAlign = 'start' | 'center';

export interface StatProps {
  /** The prominent figure (e.g. a reading or count). */
  value: ComponentChildren;
  /** The overline caption beneath the value. */
  label: ComponentChildren;
  /** Color role for the value. Defaults to `default`. */
  tone?: StatTone;
  /** Alignment of value and label. Defaults to `center`. */
  align?: StatAlign;
  class?: string;
}

/** A single labelled metric: a prominent value above an overline caption. */
export function Stat({ value, label, tone = 'default', align = 'center', class: className }: StatProps) {
  return (
    <div class={cx(styles.stat, styles[align], tone === 'accent' && styles.accent, className)}>
      <span class={styles.value}>{value}</span>
      <span class={styles.label}>{label}</span>
    </div>
  );
}
