import { addDecorator, configure } from '@storybook/vue';
import { ThemeProvider } from 'vue-styled-components';

import defaultTheme from '../src/themes/default';
import '../src/themes/global.styles';

const Provider = () => {
  return {
    components: {
      ThemeProvider,
    },
    computed: {
      theme() {
        return defaultTheme;
      },
    },
    template: `
      <theme-provider :theme="theme">
        <story />
      </theme-provider>
    `,
  };
};

addDecorator(Provider);

configure(require.context('../src', true, /\.stories\.js$/), module);