import type { ComponentChildren } from 'preact';
import { cx } from '../../internal/cx';
import styles from './KeyValueList.module.css';

/** A single key/value pair. */
export interface KeyValueEntry {
  key: ComponentChildren;
  value: ComponentChildren;
}

export interface KeyValueListProps {
  /** Optional overline title above the rows. */
  title?: ComponentChildren;
  /** The rows to render. When empty, `emptyText` is shown instead. */
  entries: ReadonlyArray<KeyValueEntry>;
  /** Message shown when `entries` is empty. */
  emptyText?: ComponentChildren;
  class?: string;
}

/** A titled list of key/value rows, with a graceful empty state. */
export function KeyValueList({ title, entries, emptyText = 'No data', class: className }: KeyValueListProps) {
  return (
    <div class={cx(styles.list, className)}>
      {title && <div class={styles.title}>{title}</div>}
      {entries.length === 0 ? (
        <div class={styles.empty}>{emptyText}</div>
      ) : (
        <div class={styles.rows}>
          {entries.map((entry, index) => (
            <div key={index} class={styles.row}>
              <span class={styles.key}>{entry.key}</span>
              <span class={styles.value}>{entry.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
