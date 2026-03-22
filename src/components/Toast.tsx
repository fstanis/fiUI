import { signal } from '@preact/signals';

interface ToastItem {
  id: string;
  message: string;
  type: 'success' | 'error';
}

export const toasts = signal<ToastItem[]>([]);

function addToast(message: string, type: 'success' | 'error') {
  const id = crypto.randomUUID();
  toasts.value = [...toasts.value, { id, message, type }];
  setTimeout(() => {
    toasts.value = toasts.value.filter((t) => t.id !== id);
  }, 3000);
}

export const toast = Object.assign((message: string) => addToast(message, 'success'), {
  success: (message: string) => addToast(message, 'success'),
  error: (message: string) => addToast(message, 'error'),
});

export function Toaster() {
  if (toasts.value.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.value.map((t) => {
        let colorClass = 'bg-card text-foreground';
        if (t.type === 'error') {
          colorClass = 'bg-destructive text-destructive-foreground';
        }
        return (
          <div
            key={t.id}
            className={`px-4 py-2.5 rounded-xs text-sm shadow-lg border border-border animate-toast-in ${colorClass}`}
          >
            {t.message}
          </div>
        );
      })}
    </div>
  );
}
