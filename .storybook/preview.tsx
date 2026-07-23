import type { Preview } from '@storybook/preact';
import '../src/styles/theme.css';

const preview: Preview = {
  parameters: {
    layout: 'padded',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        canvas: { name: 'canvas', value: '#fcfcfb' },
        surface: { name: 'surface', value: '#f5f4f0' },
        raised: { name: 'raised', value: '#ffffff' },
      },
    },
    initialGlobals: {
      backgrounds: { value: 'canvas' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ fontFamily: "var(--fi-font-mono)", color: 'var(--fi-ink)' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
