import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import EventList from '@/components/EventsList.vue';

describe('EventList.vue', () => {
  it('renders props.eventList is empty when passed', () => {
    const eventList = [];
    const wrapper = shallowMount(EventList, {
      propsData: { eventList },
    });
    expect(wrapper.text()).to.include(eventList);
  });

  it('renders event for eact event in props.eventList', () => {
    const eventList = ['', ''];
    const wrapper = shallowMount(EventList, {
      propsDate: { eventList },
    });
    // expect(wrapper.findAll('tbody tr').length.toMatch(eventList.length));
  });
});
