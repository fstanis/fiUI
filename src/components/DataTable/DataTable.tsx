import type { ComponentChildren } from 'preact';
import { cx } from '../../internal/cx';
import styles from './DataTable.module.css';

/** Horizontal alignment of a column's cells. */
export type ColumnAlign = 'left' | 'right' | 'center';

/** Describes one column of a {@link DataTable}. */
export interface Column<Row> {
  /** Stable identifier, also used as the React key for cells. */
  id: string;
  /** Header label. */
  header?: ComponentChildren;
  /** CSS grid track size for this column (e.g. `1fr`, `110px`). Defaults to `1fr`. */
  width?: string;
  /** Cell alignment. Defaults to `left`. */
  align?: ColumnAlign;
  /** Renders a cell for the given row. */
  render: (row: Row) => ComponentChildren;
}

export interface DataTableProps<Row> {
  /** Column definitions, left to right. */
  columns: ReadonlyArray<Column<Row>>;
  /** Row data. */
  rows: ReadonlyArray<Row>;
  /** Derives a stable key for each row. Defaults to the row index. */
  rowKey?: (row: Row, index: number) => string | number;
  /** Message shown when there are no rows. */
  emptyText?: ComponentChildren;
  /** Renders the column header row. Set to `false` for header-less tables. Defaults to `true`. */
  showHeader?: boolean;
  class?: string;
}

/** Minimum width, in pixels, a flexible (`fr`/`auto`) column keeps before the table scrolls. */
const FLEX_COLUMN_MIN = 120;

const trackMinWidth = (width: string) => {
  const pixels = /^(\d+(?:\.\d+)?)px$/.exec(width.trim());
  return pixels ? Number(pixels[1]) : FLEX_COLUMN_MIN;
};

/** A compact, grid-based table driven by column definitions. Scrolls horizontally when its container is too narrow. */
export function DataTable<Row>({
  columns,
  rows,
  rowKey,
  emptyText = 'No rows',
  showHeader = true,
  class: className,
}: DataTableProps<Row>) {
  const gridTemplateColumns = columns.map((column) => column.width ?? '1fr').join(' ');
  const minWidth = columns.reduce((total, column) => total + trackMinWidth(column.width ?? '1fr'), 0);
  const rowStyle = { gridTemplateColumns, minWidth: `${minWidth}px` };

  return (
    <div class={cx(styles.table, className)} role="table">
      {showHeader && (
        <div class={styles.header} style={rowStyle} role="row">
          {columns.map((column) => (
            <span key={column.id} role="columnheader" class={cx(styles.cell, styles[column.align ?? 'left'])}>
              {column.header}
            </span>
          ))}
        </div>
      )}
      {rows.length === 0 ? (
        <div class={styles.empty}>{emptyText}</div>
      ) : (
        rows.map((row, index) => (
          <div key={rowKey ? rowKey(row, index) : index} class={styles.row} style={rowStyle} role="row">
            {columns.map((column) => (
              <span key={column.id} role="cell" class={cx(styles.cell, styles[column.align ?? 'left'])}>
                {column.render(row)}
              </span>
            ))}
          </div>
        ))
      )}
    </div>
  );
}
