import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      lazyCompilation: true,
      builder: {
        useSWC: true,
      },
    },
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: true,
    defaultName: 'Overview',
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
