import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import EventList from '@/components/EventsList.vue';

const eventList = [
  {
    name: 'test',
    date: '12-12-2019',
    time: '12:13',
  },
];

describe('EventList.vue', () => {
  it('renders props.eventList is empty when passed', () => {
    const emptyEventList = [];
    const wrapper = shallowMount(EventList, {
      propsData: { emptyEventList },
    });
    expect(wrapper.find('p')).to.equal(true);
  });

  it('renders event for eact event in props.eventList', () => {
    const wrapper = shallowMount(EventList, {
      propsData: { eventList },
    });
    expect(wrapper.findAll('tbody tr').length).to.equal(eventList.length);
  });

  it('check removeEvent emit function', () => {
    const wrapper = shallowMount(EventList, {
      propsData: { eventList },
    });
    wrapper.vm.$emit('removeEvent');
    console.log(wrapper.emitted().removeEvent);
    // expect(wrapper.emitted().removeEvent).toBeTruthy();
  });
});
