import { shallowMount } from '@vue/test-utils';
import Component from './AppButton.vue';

describe('AppButton', () => {
  let vm;
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Component);
    vm = wrapper.vm;
  });

  describe('onClick', () => {
    it('emits click', () => {
      vm.$emit = jest.fn();
      vm.onClick();
      expect(vm.$emit).toHaveBeenCalledWith('click');
    });
  });
});
