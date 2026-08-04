import type { ComponentChildren } from 'preact';
import { cx } from '../../internal/cx';
import styles from './Stepper.module.css';

export interface StepperProps {
  /** The current value, already formatted — the caller owns both the units and the bounds. */
  value: ComponentChildren;
  onDecrement: () => void;
  onIncrement: () => void;
  /** Disables both steps. */
  disabled?: boolean;
  /** Names the decrement step for assistive technology. Defaults to `decrease`. */
  decrementLabel?: string;
  /** Names the increment step for assistive technology. Defaults to `increase`. */
  incrementLabel?: string;
  class?: string;
}

/** A value flanked by the two steps that move it. */
export function Stepper({
  value,
  onDecrement,
  onIncrement,
  disabled = false,
  decrementLabel = 'decrease',
  incrementLabel = 'increase',
  class: className,
}: StepperProps) {
  return (
    <div class={cx(styles.stepper, className)}>
      <button type="button" class={styles.step} disabled={disabled} aria-label={decrementLabel} onClick={onDecrement}>
        −
      </button>
      <output class={styles.value}>{value}</output>
      <button type="button" class={styles.step} disabled={disabled} aria-label={incrementLabel} onClick={onIncrement}>
        +
      </button>
    </div>
  );
}
