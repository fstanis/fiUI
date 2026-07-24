import type { ComponentChildren } from 'preact';
import { cx } from '../../internal/cx';
import styles from './Callout.module.css';

/** Visual tone of the callout. */
export type CalloutVariant = 'accent' | 'neutral';

/** An inline, clickable affordance rendered at the end of the callout. */
export interface CalloutAction {
  label: ComponentChildren;
  onClick: () => void;
}

export interface CalloutProps {
  /** Visual tone. Defaults to `accent`. */
  variant?: CalloutVariant;
  /** Optional trailing action, rendered as an underlined control. */
  action?: CalloutAction;
  /** The message. */
  children?: ComponentChildren;
  class?: string;
}

/** A compact, inline banner for a contextual notice with an optional action. */
export function Callout({ variant = 'accent', action, children, class: className }: CalloutProps) {
  return (
    <div class={cx(styles.callout, styles[variant], className)} role="status">
      <span class={styles.message}>{children}</span>
      {action && (
        <button type="button" class={styles.action} onClick={action.onClick}>
          {action.label}
        </button>
      )}
    </div>
  );
}
