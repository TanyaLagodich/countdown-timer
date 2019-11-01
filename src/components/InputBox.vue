<template>
  <div class="input-box">
    <label>Название
      <input type="text"
             v-model="ev.name">
    </label>
    <label>Дата
      <flatpickr v-model="ev.date"
                 :config="dateConfig" />
    </label>
    <label>Время
      <flatpickr v-model="ev.time"
                 :config="timeConfig" />
    </label>
    <button @click="createEvent">Создать</button>
    <!-- <p v-if="error"
       class="error">{{ error }}</p> -->
  </div>
</template>
<script>
import Russian from 'flatpickr/dist/l10n/ru';
import Flatpickr from './_Flatpickr.vue';

export default {
  components: { Flatpickr },
  data() {
    return {
      ev: {
        name: '',
        date: '',
        time: '',
      },
      dateConfig: {
        minDate: 'today',
        defaultDate: 'today',
        locale: Russian.ru,
        dateFormat: 'd-m-Y',
      },
      timeConfig: {
        noCalendar: true,
        enableTime: true,
        dateFormat: 'H:i',
        time_24hr: true,
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
    const now = new Date();
    this.ev.time = `${now.getHours()}:${now.getMinutes()}`;
  },
  methods: {
    createEvent() {
      const [date, month, year] = this.ev.date.split('-');
      this.ev.date = `${year}, ${month + 1}, ${date}`;
      this.$emit('countLeftTime', this.ev);
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
