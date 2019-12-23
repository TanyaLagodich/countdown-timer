import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import InputBox from '@/components/InputBox.vue';

describe('InputBox.vue', () => {
  const wrapper = shallowMount(InputBox);
  it('text click button', () => {
    wrapper.find('button').trigger('click');
    expect(wrapper.find('button'));
  });
});
