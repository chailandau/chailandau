import { themes } from '@storybook/theming';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Atoms', 'Molecules', 'Components'],
      },
      showPanel: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      sort: 'requiredFirst',
      expanded: true,
    },
    darkMode: {
      light: { ...themes.light, brandImage: './images/c-logo-blue.svg' },
      dark: { ...themes.dark, brandImage: './images/c-logo-white.svg' },
    },
  },
};

export default preview;
