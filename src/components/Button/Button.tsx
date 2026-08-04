import type { ButtonHTMLAttributes, ComponentChildren } from 'preact';
import { cx } from '../../internal/cx';
import styles from './Button.module.css';

/** Visual weight of the button. */
export type ButtonVariant = 'primary' | 'secondary' | 'toolbar' | 'quiet';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'class'> {
  /** Visual weight. Defaults to `primary`. */
  variant?: ButtonVariant;
  class?: string;
  children?: ComponentChildren;
}

/** A clickable action styled to the design system. */
export function Button({ variant = 'primary', type = 'button', class: className, children, ...rest }: ButtonProps) {
  return (
    <button type={type} class={cx(styles.button, styles[variant], className)} {...rest}>
      {children}
    </button>
  );
}
