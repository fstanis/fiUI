import type { ComponentChildren } from 'preact';
import { cx } from '../../internal/cx';
import styles from './Field.module.css';

/** Where the caption sits: beneath the label, or beneath the field as a whole. */
export type FieldCaptionPlacement = 'with-label' | 'below';

export interface FieldProps {
  /** Names the setting. */
  label: ComponentChildren;
  /** Sits at the end of the label's line — a control, or a short annotation. */
  control?: ComponentChildren;
  /** A sentence explaining what the setting does. */
  caption?: ComponentChildren;
  /** Where the caption goes. Defaults to `with-label`. */
  captionPlacement?: FieldCaptionPlacement;
  /** Content spanning the field's full width, for a control too wide to sit beside the label. */
  children?: ComponentChildren;
  class?: string;
}

/** One labelled setting: a label, an optional control beside it, and an optional caption. */
export function Field({
  label,
  control,
  caption,
  captionPlacement = 'with-label',
  children,
  class: className,
}: FieldProps) {
  const hasStackedLabel = caption !== undefined && captionPlacement === 'with-label';
  return (
    <div class={cx(styles.field, className)}>
      <div class={cx(styles.row, hasStackedLabel && styles.stacked)}>
        <span class={styles.labelGroup}>
          <span class={styles.label}>{label}</span>
          {hasStackedLabel && <span class={styles.caption}>{caption}</span>}
        </span>
        {control !== undefined && <span class={styles.control}>{control}</span>}
      </div>
      {children}
      {caption !== undefined && !hasStackedLabel && <span class={styles.caption}>{caption}</span>}
    </div>
  );
}
