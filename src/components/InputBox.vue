<template>
  <div class="input-box">
    <label>Название
      <input type="text"
             v-model="ev.name">
    </label>
    <label>Дата
      <input type="date"
             v-model="ev.date">
    </label>
    <label>Время
      <input type="time"
             v-model="ev.time">
    </label>
    <button @click="$emit('countLeftTime', ev)">Создать</button>
    <p v-if="error"
       class="error">{{ error }}</p>
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
    };
  },
  props: {
    error: {
      type: String,
      default: '',
    },
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
  },
};
</script>
<style scoped lang="scss">
  .error {
    color: red;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
