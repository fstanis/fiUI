import type { ComponentChildren } from 'preact';
import { cx } from '../../internal/cx';
import styles from './SegmentedControl.module.css';

/** A single selectable option in a segmented control. */
export interface SegmentOption<T extends string> {
  label: ComponentChildren;
  value: T;
}

export interface SegmentedControlProps<T extends string> {
  /** The selectable options, rendered left to right. */
  options: ReadonlyArray<SegmentOption<T>>;
  /** The currently selected value. */
  value: T;
  /** Called with the new value when a segment is chosen. */
  onChange: (value: T) => void;
  /** Optional label rendered before the control. */
  label?: ComponentChildren;
  /** Disables all segments. */
  disabled?: boolean;
  class?: string;
}

/** A single-select control rendering mutually exclusive options as joined buttons. */
export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  label,
  disabled = false,
  class: className,
}: SegmentedControlProps<T>) {
  return (
    <div class={cx(styles.wrapper, disabled && styles.disabled, className)}>
      {label}
      <div class={styles.group} role="radiogroup">
        {options.map((option) => {
          const isSelected = option.value === value;
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={disabled}
              class={cx(styles.segment, isSelected && styles.selected)}
              onClick={() => {
                if (!isSelected) {
                  onChange(option.value);
                }
              }}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
