<template>
  <div id="app">
    <input-box @countLeftTime="countLeftTime" />
    <h1>{{ leftTimes.days }} : {{ leftTimes.hours }} :
      {{ leftTimes.minutes }} : {{ leftTimes.seconds }}</h1>

  </div>
</template>
<script>
import InputBox from './components/InputBox.vue';

export default {
  components: { InputBox },
  data() {
    return {
      leftTimes: {
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
      },
    };
  },
  methods: {
    countLeftTime(ev) {
      const today = new Date().getTime();
      const eventDate = new Date(`${ev.date} ${ev.time}`).getTime();
      const diff = eventDate - today;
      this.leftTimes.days = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.leftTimes.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.leftTimes.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      this.leftTimes.seconds = Math.floor((diff % (1000 * 60)) / 1000);
      let timerId = setInterval(() => {
        console.log(diff < 0, timerId);
        timerId = setInterval(this.countLeftTime, 1000);
        if (diff === 0 || diff < 0) clearInterval(timerId);
      }, 0);
    },
  },
};
</script>

<style lang="scss">
@import './styles/main';
</style>
