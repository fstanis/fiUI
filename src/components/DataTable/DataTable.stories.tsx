import type { Meta, StoryObj } from '@storybook/preact';
import { DataTable, type Column } from './DataTable';
import { Badge } from '../Badge/Badge';
import { Link } from '../Link/Link';
import { ProgressBar } from '../ProgressBar/ProgressBar';

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
};

export default meta;

interface QueueRow {
  file: string;
  before: string;
  after: string;
  saved: string;
  progress: number;
  state: 'done' | 'working' | 'queued' | 'error';
}

const rows: QueueRow[] = [
  { file: 'hero-banner.png', before: '2.4 MB', after: '381 KB', saved: '−84%', progress: 100, state: 'done' },
  { file: 'screenshot-04.png', before: '1.1 MB', after: '…', saved: '60%', progress: 60, state: 'working' },
  { file: 'export-final.png', before: '3.3 MB', after: '—', saved: '—', progress: 0, state: 'queued' },
  { file: 'corrupt-file.jpg', before: '812 KB', after: 'failed', saved: '—', progress: 0, state: 'error' },
];

const columns: Column<QueueRow>[] = [
  { id: 'file', header: 'file', width: '1fr', render: (row) => row.file },
  { id: 'before', header: 'before', width: '110px', align: 'right', render: (row) => row.before },
  { id: 'after', header: 'after', width: '110px', align: 'right', render: (row) => row.after },
  {
    id: 'saved',
    header: 'saved',
    width: '80px',
    align: 'right',
    render: (row) => (row.saved.startsWith('−') ? <Badge variant="text">{row.saved}</Badge> : row.saved),
  },
  {
    id: 'action',
    header: '',
    width: '130px',
    align: 'right',
    render: (row) => {
      if (row.state === 'working') {
        return (
          <div style={{ width: 80, marginLeft: 'auto' }}>
            <ProgressBar value={row.progress} />
          </div>
        );
      }
      if (row.state === 'done') {
        return <Link href="#">download</Link>;
      }
      if (row.state === 'error') {
        return <Link href="#">retry</Link>;
      }
      return 'queued';
    },
  },
  {
    id: 'state',
    header: 'state →',
    width: '90px',
    align: 'right',
    render: (row) => <Badge variant="neutral">{row.state}</Badge>,
  },
];

type Story = StoryObj<typeof DataTable>;

export const Queue: Story = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <DataTable columns={columns} rows={rows} rowKey={(row) => row.file} />
    </div>
  ),
};

export const EmptyState: Story = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <DataTable columns={columns} rows={[]} emptyText="drop images to get started" />
    </div>
  ),
};
