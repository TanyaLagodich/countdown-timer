<template>
  <div class="form-group d-flex flex-column w-50 h-100 mx-auto
              justify-content-center align-items-center">
    <label class="w-100 mb-4">Название
      <input type="text"
            v-model="ev.name"
            class="form-control mt-2"
            :class="{'border-danger': submitStatus === 'ERROR' && !ev.name.trim()}">
      <small v-if="submitStatus === 'ERROR' && !ev.name.trim()"
             class="position-absolute">Вы пропустили поле</small>
    </label>
    <label class="w-100 mb-4">Дата
      <flatpickr v-model="ev.date"
                :config="dateConfig"
                class="form-control mt-2" />
    </label>
    <label class="w-100 mb-5">Время
      <flatpickr v-model="ev.time"
                :config="timeConfig"
                class="form-control mt-2" />
    </label>
    <button @click="createEvent"
            class="btn btn-dark">Создать</button>
    <small v-if="submitStatus === 'ERROR' && error.trim()"
           class="mt-1 color-danger">{{ error }}</small>
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
        date: `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`,
        time: '',
      },
      submitStatus: '',
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
        minuteIncrement: 1,
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
      if (!this.ev.name.trim()) {
        this.submitStatus = 'ERROR';
        return;
      }
      const [date, month, year] = this.ev.date.split('-');
      this.ev.date = `${year}, ${month}, ${date}`;
      this.submitStatus = '';
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
