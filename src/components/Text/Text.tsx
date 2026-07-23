import type { ComponentChildren, JSX } from 'preact';
import { cx } from '../../internal/cx';
import styles from './Text.module.css';

/** Typographic role, matching the design system's type scale. */
export type TextVariant = 'logo' | 'heading' | 'emphasis' | 'body' | 'caption' | 'overline';

/** Color role applied to the text. Overrides the variant's default tone. */
export type TextTone = 'default' | 'muted' | 'faint' | 'disabled' | 'accent';

export interface TextProps extends Omit<JSX.HTMLAttributes<HTMLElement>, 'class'> {
  /** Typographic role. Defaults to `body`. */
  variant?: TextVariant;
  /** Color role. When omitted the variant's own default tone is used. */
  tone?: TextTone;
  /** HTML tag to render. Defaults to `span`. */
  as?: keyof JSX.IntrinsicElements;
  class?: string;
  children?: ComponentChildren;
}

/** Renders text at one of the design system's typographic roles. */
export function Text({ variant = 'body', tone, as = 'span', class: className, children, ...rest }: TextProps) {
  const Tag = as as 'span';
  return (
    <Tag class={cx(styles.text, styles[variant], tone && styles[tone], className)} {...rest}>
      {children}
    </Tag>
  );
}
