import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Flatpickr from '@/components/_Flatpickr.vue';

describe('Flatpickr.vue', () => {
  it('renders component with props.date when passed', () => {
    const value = '26-12-2019';
    const wrapper = shallowMount(Flatpickr, {
      propsData: { value },
    });
    expect(wrapper.html().includes('2019-12-26'));
  });
  it('renders component with props.time when passed', () => {
    const value = '12:15';
    const wrapper = shallowMount(Flatpickr, {
      propsData: { value },
    });
    expect(wrapper.html().includes('12:15'));
  });
});
