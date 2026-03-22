import { cn } from '../lib/utils';

interface FilePreviewProps {
  src: string;
  className?: string;
}

export function FilePreview({ src, className }: FilePreviewProps) {
  return (
    <div className={cn('w-10 h-10 overflow-hidden bg-muted shrink-0 border border-border', className)}>
      <img src={src} alt="" className="w-full h-full object-cover" />
    </div>
  );
}
