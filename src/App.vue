<template>
  <div id="app">
    <div class="container">
      <h1 class="text-center mb-5">Countdown Timer</h1>
      <events-list v-if="!newEvent && !event"
                   @addEvent="newEvent = true"
                   @countLeftTime="countLeftTime"
                   @removeEvent="removeEvent"
                   :event-list="eventList" />
      <input-box v-if="newEvent && !event"
                @countLeftTime="countLeftTime"
                @setLocaleStorage="setLocaleStorage" />
      <count-left v-if="!newEvent && event"
                  :leftTimes="leftTimes"
                  @reset="reset"
                  @eventHasCome="eventHasCome" />
    </div>
  </div>
</template>
<script>
import InputBox from './components/InputBox.vue';
import CountLeft from './components/CountLeft.vue';
import EventsList from './components/EventsList.vue';
import counterLeftDays from '@/utils/counterLeftDays';

export default {
  components: { InputBox, CountLeft, EventsList },
  data() {
    return {
      event: false,
      newEvent: false,
      leftTimes: {
        diff: '',
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
      },
      timerId: null,
      eventList: [],
    };
  },
  watch: {
    eventList: {
      handler(val) {
        localStorage.setItem('eventList', JSON.stringify(val));
      },
      deep: true,
    },
  },
  created() {
    this.eventList = JSON.parse(localStorage.getItem('eventList')) || [];
  },
  beforeDestroy() {
    clearInterval(this.timerId);
  },
  methods: {
    reset() {
      this.newEvent = false;
      this.event = null;
      clearInterval(this.timerId);
    },
    countLeftTime(ev) {
      this.timerId = setInterval(() => {
        const diff = counterLeftDays(ev);
        if (diff <= 100) {
          this.eventHasCome(ev.id);
          this.reset();
        }
        this.event = ev;
        this.newEvent = false;
        this.leftTimes.diff = diff;
        this.leftTimes.days = Math.floor(diff / (1000 * 60 * 60 * 24));
        this.leftTimes.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.leftTimes.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        this.leftTimes.seconds = Math.floor((diff % (1000 * 60)) / 1000);
      }, 0);
    },
    setLocaleStorage(ev) {
      const items = JSON.parse(localStorage.getItem('eventList')) || [];
      if (items.find(item => item.id === ev.id)) return;
      this.eventList.push(ev);
    },
    eventHasCome(id) {
      const index = this.eventList.findIndex(ev => ev.id === id);
      if (index !== -1) {
        this.$set(this.eventList[index], 'hasCome', true);
      }
    },
    removeEvent(id) {
      const index = this.eventList.findIndex(ev => ev.id === id);
      this.eventList.splice(index, 1);
    },
  },
};
</script>

<style lang="scss">
@import './styles/main';
</style>
