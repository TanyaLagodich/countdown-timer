<template>
  <div id="app">
    <div class="container">
      <h1 class="text-center">Countdown Timer</h1>
      <events-list v-if="!newEvent"
                    @addEvent="addEvent" />
      <input-box v-if="newEvent && !event"
                @countLeftTime="countLeftTime"
                :error="error" />
      <count-left v-if="!newEvent && event"
                  :leftTimes="leftTimes" />
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
    };
  },
  methods: {
    addEvent() {
      this.newEvent = true;
    },
    countLeftTime(ev) {
      this.event = true;
      this.newEvent = false;
      const today = new Date().getTime();
      const eventDate = new Date(`${ev.date} ${ev.time}`).getTime();
      const diff = eventDate - today;
      if (diff <= 0) {
        this.error = 'Это событие уже наступило!';
        this.event = false;
        return;
      }
      this.leftTimes.days = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.leftTimes.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.leftTimes.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      this.leftTimes.seconds = Math.floor((diff % (1000 * 60)) / 1000);
      let timerId = setInterval(() => {
        timerId = setInterval(() => this.countLeftTime(ev), 1000);
        if (diff === 0 || diff < 0) clearInterval(timerId);
      }, 0);
    },
  },
};
</script>

<style lang="scss">
@import './styles/main';
</style>
