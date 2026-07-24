import type { ComponentChildren } from 'preact';
import { cx } from '../../internal/cx';
import styles from './Tabs.module.css';

/** A single selectable tab. */
export interface TabOption<T extends string> {
  label: ComponentChildren;
  value: T;
}

export interface TabsProps<T extends string> {
  /** The tabs, rendered left to right. */
  options: ReadonlyArray<TabOption<T>>;
  /** The currently selected value. */
  value: T;
  /** Called with the new value when a tab is chosen. */
  onChange: (value: T) => void;
  class?: string;
}

/** A horizontal, underline-style tab navigation for switching between views. */
export function Tabs<T extends string>({ options, value, onChange, class: className }: TabsProps<T>) {
  return (
    <div class={cx(styles.tabs, className)} role="tablist">
      {options.map((option) => {
        const isSelected = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isSelected}
            class={cx(styles.tab, isSelected && styles.selected)}
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
  );
}
