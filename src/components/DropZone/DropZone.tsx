import type { ComponentChildren } from 'preact';
import { useRef, useState } from 'preact/hooks';
import { cx } from '../../internal/cx';
import styles from './DropZone.module.css';

export interface DropZoneProps {
  /** Called with the dropped or browsed files. */
  onFiles: (files: File[]) => void;
  /** `accept` attribute forwarded to the underlying file input. */
  accept?: string;
  /** Allow selecting more than one file. Defaults to `true`. */
  multiple?: boolean;
  /** Idle prompt. The word "browse" is appended as a link automatically. */
  prompt?: ComponentChildren;
  /** Secondary hint line shown under the prompt when idle. */
  hint?: ComponentChildren;
  /** Builds the drag-over message from the number of items being dragged. */
  dragLabel?: (count: number) => ComponentChildren;
  disabled?: boolean;
  class?: string;
}

const defaultDragLabel = (count: number) =>
  count > 0 ? `Release to add ${count} file${count === 1 ? '' : 's'}` : 'Release to add files';

/** A drag-and-drop target for files that also opens a file picker on click. */
export function DropZone({
  onFiles,
  accept,
  multiple = true,
  prompt = 'Drop images here, or',
  hint,
  dragLabel = defaultDragLabel,
  disabled = false,
  class: className,
}: DropZoneProps) {
  const [dragCount, setDragCount] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isDragging = dragCount !== null;

  const openPicker = () => {
    if (!disabled) {
      inputRef.current?.click();
    }
  };

  const emitFiles = (fileList: FileList | null) => {
    if (fileList && fileList.length > 0) {
      onFiles(Array.from(fileList));
    }
  };

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      class={cx(styles.zone, isDragging && styles.dragging, className)}
      onClick={openPicker}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openPicker();
        }
      }}
      onDragEnter={(event) => {
        if (disabled) {
          return;
        }
        event.preventDefault();
        setDragCount(event.dataTransfer?.items.length ?? 0);
      }}
      onDragOver={(event) => {
        if (!disabled) {
          event.preventDefault();
        }
      }}
      onDragLeave={(event) => {
        if (event.currentTarget === event.target) {
          setDragCount(null);
        }
      }}
      onDrop={(event) => {
        if (disabled) {
          return;
        }
        event.preventDefault();
        setDragCount(null);
        emitFiles(event.dataTransfer?.files ?? null);
      }}
    >
      {isDragging ? (
        <span class={styles.prompt}>{dragLabel(dragCount)}</span>
      ) : (
        <>
          <span class={styles.prompt}>
            {prompt} <span class={styles.browse}>browse</span>
          </span>
          {hint && <span class={styles.hint}>{hint}</span>}
        </>
      )}
      <input
        ref={inputRef}
        type="file"
        class={styles.input}
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={(event) => {
          const target = event.currentTarget;
          emitFiles(target.files);
          target.value = '';
        }}
      />
    </div>
  );
}
