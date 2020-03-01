import { action } from '@storybook/addon-actions';

import AppButton from './AppButton';

export default { title: 'Button' };

export const button = () => ({
  components: { AppButton },
  template: '<app-button>Button</app-button>',
});

export const buttonPrimary = () => ({
  components: { AppButton },
  template: '<app-button :is-primary="true">Button</app-button>',
});

export const buttonClick = () => ({
  components: { AppButton },
  template: '<app-button @click="handleClick">Button</app-button>',
  methods: {
    handleClick: action('Click'),
  },
});
