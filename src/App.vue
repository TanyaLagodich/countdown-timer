<template>
  <div id="app">
    <div class="container">
      <h1 class="text-center mb-5">Countdown Timer</h1>
      <events-list v-if="!newEvent && !event"
                    @addEvent="addEvent"
                     @countLeftTime="countLeftTime"
                     @removeEvent="removeEvent"
                    :event-list="eventList" />
      <input-box v-if="newEvent && !event"
                @countLeftTime="countLeftTime"
                :error="error" />
      <count-left v-if="!newEvent && event"
                  :leftTimes="leftTimes"
                  @reset="reset" />
    </div>
  </div>
</template>
<script>
import InputBox from './components/InputBox.vue';
import CountLeft from './components/CountLeft.vue';
import EventsList from './components/EventsList.vue';

export default {
  components: { InputBox, CountLeft, EventsList },
  data() {
    return {
      event: false,
      newEvent: false,
      leftTimes: {
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
      },
      error: '',
      timerId: null,
      eventList: [],
    };
  },
  created() {
    this.eventList = JSON.parse(localStorage.getItem('eventList')) || [];
    console.log(this.eventList);
  },
  methods: {
    reset() {
      this.newEvent = false;
      this.event = false;
      clearInterval(this.timerId);
    },
    addEvent() {
      this.newEvent = true;
      this.error = '';
    },
    countLeftTime(ev) {
      this.timerId = setInterval(() => {
        const today = new Date().getTime();
        const eventDate = new Date(`${ev.date} ${ev.time}`).getTime();
        const diff = eventDate - today;
        if (diff <= 0) {
          clearInterval(this.timerId);
          this.error = 'Это событие уже наступило!';
          return;
        }
        this.setLocaleStorage(ev);
        this.event = true;
        this.newEvent = false;
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
      localStorage.setItem('eventList', JSON.stringify(this.eventList));
    },
    removeEvent(id) {
      const index = this.eventList.findIndex(ev => ev.id === id);
      this.eventList.splice(index, 1);
      localStorage.setItem('eventList', JSON.stringify(this.eventList));
    },
  },
};
</script>

<style lang="scss">
@import './styles/main';
</style>
