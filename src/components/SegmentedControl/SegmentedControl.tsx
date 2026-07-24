import { Fragment } from 'preact';
import type { ComponentChildren } from 'preact';
import { cx } from '../../internal/cx';
import styles from './SegmentedControl.module.css';

/** A single selectable option in a segmented control. */
export interface SegmentOption<T extends string> {
  label: ComponentChildren;
  value: T;
}

/**
 * Visual style of the control.
 * - `boxed`: bordered, joined buttons.
 * - `inline`: bare text options joined by middot separators.
 */
export type SegmentedControlVariant = 'boxed' | 'inline';

export interface SegmentedControlProps<T extends string> {
  /** The selectable options, rendered left to right. */
  options: ReadonlyArray<SegmentOption<T>>;
  /** The currently selected value. */
  value: T;
  /** Called with the new value when a segment is chosen. */
  onChange: (value: T) => void;
  /** Optional label rendered before the control. */
  label?: ComponentChildren;
  /** Visual style. Defaults to `boxed`. */
  variant?: SegmentedControlVariant;
  /** Disables all segments. */
  disabled?: boolean;
  class?: string;
}

/** A single-select control rendering mutually exclusive options. */
export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  label,
  variant = 'boxed',
  disabled = false,
  class: className,
}: SegmentedControlProps<T>) {
  return (
    <div class={cx(styles.wrapper, disabled && styles.disabled, className)}>
      {label}
      <div class={cx(styles.group, styles[variant])} role="radiogroup">
        {options.map((option, index) => {
          const isSelected = option.value === value;
          const hasSeparator = variant === 'inline' && index > 0;
          return (
            <Fragment key={option.value}>
              {hasSeparator && (
                <span class={styles.separator} aria-hidden="true">
                  ·
                </span>
              )}
              <button
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
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
