import type { StorybookConfig } from '@storybook/preact-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/preact-vite',
    options: {},
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      resolve: {
        dedupe: ['preact', 'preact/hooks', 'preact/jsx-runtime', 'preact/compat'],
      },
      optimizeDeps: {
        include: ['preact', 'preact/hooks', 'preact/jsx-runtime'],
      },
    });
  },
};

export default config;
