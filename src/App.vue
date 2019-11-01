<template>
  <div id="app">
    <input-box v-if="!event"
               @countLeftTime="countLeftTime"
               :error="error" />
    <count-left v-else
                :leftTimes="leftTimes" />
  </div>
</template>
<script>
import InputBox from './components/InputBox.vue';
import CountLeft from './components/CountLeft.vue';

export default {
  components: { InputBox, CountLeft },
  data() {
    return {
      event: false,
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
    countLeftTime(ev) {
      this.event = true;
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
