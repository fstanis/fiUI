import type { ComponentChildren } from 'preact';
import { cx } from '../../internal/cx';
import styles from './Menu.module.css';

/** A single option in a menu. */
export interface MenuItem<T extends string> {
  label: ComponentChildren;
  value: T;
  disabled?: boolean;
}

export interface MenuProps<T extends string> {
  /** The selectable items, rendered top to bottom. */
  items: ReadonlyArray<MenuItem<T>>;
  /** The currently selected value, highlighted in the list. */
  value?: T;
  /** Called with an item's value when it is chosen. */
  onSelect: (value: T) => void;
  class?: string;
}

/** A floating list of selectable options. */
export function Menu<T extends string>({ items, value, onSelect, class: className }: MenuProps<T>) {
  return (
    <div class={cx(styles.menu, className)} role="menu">
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          role="menuitem"
          disabled={item.disabled}
          class={cx(styles.item, item.value === value && styles.selected)}
          onClick={() => onSelect(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
