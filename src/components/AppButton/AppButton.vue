<template>
  <wrapper
    :class="{ 'is-primary': isPrimary }"
    :disabled="isDisabled"
    :type="type"
    @click="onClick"
  >
    <slot></slot>
  </wrapper>
</template>

<script>
import { Wrapper } from './AppButton.styles';

export default {
  name: 'app-button',
  components: {
    Wrapper,
  },
  computed: {
    primaryClass: function () {
      return this.isPrimary ? 'is-primary' : null;
    },
  },
  methods: {
    onClick () {
      this.$emit('click');
    },
  },
  props: {
    isDisabled: {
      default: false,
      type: Boolean,
    },
    isPrimary: {
      default: false,
      type: Boolean,
    },
    type: {
      default: 'button',
      type: String,
      validator: value => {
        return value.match(/(button|submit)/);
      },
    },
  },
};
</script>
