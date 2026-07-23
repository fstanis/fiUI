import { cx } from '../../internal/cx';
import styles from './Spinner.module.css';

export interface SpinnerProps {
  /** Diameter in pixels. Defaults to `14`. */
  size?: number;
  /** Ring thickness in pixels. Defaults to `2`. */
  thickness?: number;
  /** Accessible label. Defaults to `Loading`. */
  label?: string;
  class?: string;
}

/** An indeterminate loading indicator. */
export function Spinner({ size = 14, thickness = 2, label = 'Loading', class: className }: SpinnerProps) {
  return (
    <span
      class={cx(styles.spinner, className)}
      role="status"
      aria-label={label}
      style={{ width: `${size}px`, height: `${size}px`, borderWidth: `${thickness}px` }}
    />
  );
}
