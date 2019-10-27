<template>
  <div id="app">
    <label>Название
      <input type="text"
             v-model="ev.name">
    </label>
    <label>Дата
      <input type="date"
             v-model="ev.date">
             {{ev.date}}
    </label>
    <label>Время
      <input type="time"
             v-model="ev.time">
    </label>
    <button @click="countLeftTime">Создать</button>

    <h1>{{ leftTimes.days }} : {{ leftTimes.hours }} :
      {{ leftTimes.minutes }} : {{ leftTimes.seconds }}</h1>

  </div>
</template>
<script>
export default {
  data() {
    return {
      ev: {
        name: '',
        date: new Date(),
        time: '00:00',
      },
      leftTimes: {
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
      },
    };
  },
  created() {
    this.ev.date = this.createEvDate();
  },
  methods: {
    createEvDate() {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
      const date = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
      return `${year}-${month}-${date}`;
    },
    countLeftTime() {
      const today = new Date().getTime();
      const eventDate = new Date(`${this.ev.date} ${this.ev.time}`).getTime();
      const diff = eventDate - today;
      this.leftTimes.days = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.leftTimes.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.leftTimes.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      this.leftTimes.seconds = Math.floor((diff % (1000 * 60)) / 1000);
      let timerId = setTimeout(() => {
        console.log(diff < 0, timerId);
        timerId = setTimeout(this.countLeftTime, 1000);
        if (diff === 0 || diff < 0) clearTimeout(timerId);
      }, 0);
    },
    count(diff) {
      let timerId = setTimeout(() => {
        console.log('work', timerId);
        // if (diff < 0) clearTimeout(timerId);
        timerId = setTimeout(() => {
          this.leftTimes.days = Math.floor(diff / (1000 * 60 * 60 * 24));
          this.leftTimes.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          this.leftTimes.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          this.leftTimes.seconds = Math.floor((diff % (1000 * 60)) / 1000);
        }, 1000);
      }, 0);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
