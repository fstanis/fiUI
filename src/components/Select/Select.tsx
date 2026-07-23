import type { ComponentChildren } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { Menu, type MenuItem } from '../Menu/Menu';
import { cx } from '../../internal/cx';
import styles from './Select.module.css';

export interface SelectProps<T extends string> {
  /** The selectable options. */
  options: ReadonlyArray<MenuItem<T>>;
  /** The currently selected value. */
  value?: T;
  /** Called with the new value when an option is chosen. */
  onChange: (value: T) => void;
  /** Text shown in the trigger when no value is selected. */
  placeholder?: string;
  /** Content rendered before the value in the trigger (e.g. a field name). */
  label?: ComponentChildren;
  /** Content rendered after the value in the trigger (e.g. a unit like `px`). */
  suffix?: ComponentChildren;
  disabled?: boolean;
  class?: string;
}

/** A button that reveals a menu of options and reflects the chosen value. */
export function Select<T extends string>({
  options,
  value,
  onChange,
  placeholder = 'Select…',
  label,
  suffix,
  disabled = false,
  class: className,
}: SelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const handlePointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div ref={rootRef} class={cx(styles.root, className)}>
      <button
        type="button"
        class={cx(styles.trigger, isOpen && styles.open)}
        disabled={disabled}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {label}
        {selectedOption ? (
          <span class={styles.value}>{selectedOption.label}</span>
        ) : (
          <span class={styles.placeholder}>{placeholder}</span>
        )}
        {suffix}
        <span class={styles.caret} aria-hidden="true">
          ▾
        </span>
      </button>
      {isOpen && (
        <div class={styles.popover}>
          <Menu
            items={options}
            value={value}
            onSelect={(next) => {
              onChange(next);
              setIsOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
