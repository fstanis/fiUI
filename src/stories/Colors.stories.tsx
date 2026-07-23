import type { Meta, StoryObj } from '@storybook/preact';

const meta: Meta = {
  title: 'Foundations/Colors',
};

export default meta;
type Story = StoryObj;

const swatches: Array<{ name: string; token: string; hex: string; border?: boolean }> = [
  { name: 'accent', token: '--fi-accent', hex: '#a32626' },
  { name: 'accent-hover', token: '--fi-accent-hover', hex: '#7c1c1c' },
  { name: 'accent-tint', token: '--fi-accent-tint', hex: '#f3dcdc' },
  { name: 'ink', token: '--fi-ink', hex: '#1c1e21' },
  { name: 'ink-muted', token: '--fi-ink-muted', hex: '#6f6a60' },
  { name: 'ink-faint', token: '--fi-ink-faint', hex: '#9a958a' },
  { name: 'ink-disabled', token: '--fi-ink-disabled', hex: '#c9c5ba' },
  { name: 'border-strong', token: '--fi-border-strong', hex: '#d9d5ca', border: true },
  { name: 'border', token: '--fi-border', hex: '#eceae4', border: true },
  { name: 'surface', token: '--fi-surface', hex: '#f5f4f0', border: true },
  { name: 'background', token: '--fi-background', hex: '#fcfcfb', border: true },
  { name: 'surface-raised', token: '--fi-surface-raised', hex: '#ffffff', border: true },
];

export const Palette: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, fontFamily: 'var(--fi-font-mono)', fontSize: 11.5 }}>
      {swatches.map((swatch) => (
        <div key={swatch.token} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div
            style={{
              width: 120,
              height: 56,
              borderRadius: 6,
              background: `var(${swatch.token})`,
              border: swatch.border ? '1px solid var(--fi-border)' : 'none',
            }}
          />
          <span>
            {swatch.name}
            <br />
            <span style={{ color: 'var(--fi-ink-faint)' }}>{swatch.hex}</span>
          </span>
        </div>
      ))}
    </div>
  ),
};
