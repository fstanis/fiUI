import { cx } from '../../internal/cx';
import styles from './ProgressBar.module.css';

export interface ProgressBarProps {
  /** Current progress. */
  value: number;
  /** Value representing 100% complete. Defaults to `100`. */
  max?: number;
  class?: string;
}

/** A thin horizontal determinate progress indicator. */
export function ProgressBar({ value, max = 100, class: className }: ProgressBarProps) {
  const ratio = max <= 0 ? 0 : value / max;
  const percent = Math.min(100, Math.max(0, ratio * 100));
  return (
    <div
      class={cx(styles.track, className)}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
    >
      <div class={styles.fill} style={{ width: `${percent}%` }} />
    </div>
  );
}
