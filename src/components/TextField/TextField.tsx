import type { ComponentChildren, InputHTMLAttributes } from 'preact';
import { cx } from '../../internal/cx';
import styles from './TextField.module.css';

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'class' | 'prefix'> {
  /** Content rendered inside the field, before the input (e.g. an icon or label). */
  prefix?: ComponentChildren;
  /** Content rendered inside the field, after the input (e.g. a unit like `px`). */
  suffix?: ComponentChildren;
  /** Marks the field as invalid. */
  invalid?: boolean;
  /** Class applied to the outer field wrapper. */
  class?: string;
}

/** A single-line text input with an optional prefix, suffix, and focus ring. */
export function TextField({ prefix, suffix, invalid = false, disabled, class: className, ...rest }: TextFieldProps) {
  return (
    <div class={cx(styles.field, invalid && styles.invalid, disabled && styles.disabled, className)}>
      {prefix && <span class={styles.affix}>{prefix}</span>}
      <input class={styles.input} disabled={disabled} aria-invalid={invalid || undefined} {...rest} />
      {suffix && <span class={styles.affix}>{suffix}</span>}
    </div>
  );
}
