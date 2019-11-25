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
    <small v-if="error.trim()"
           class="mt-1 color-danger">{{ error }}</small>
  </div>
</template>
<script>
import Flatpickr from './_Flatpickr.vue';
import counterLeftDays from '@/utils/counterLeftDays';

export default {
  components: { Flatpickr },
  data() {
    return {
      ev: {
        id: `_ ${Math.random().toString(36).substr(2, 9)}`,
        name: '',
        date: `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`,
        time: '',
        hasCome: false,
      },
      submitStatus: '',
      dateConfig: {
        minDate: 'today',
        defaultDate: 'today',
        dateFormat: 'd-m-Y',
      },
      timeConfig: {
        noCalendar: true,
        enableTime: true,
        dateFormat: 'H:i',
        time_24hr: true,
        minuteIncrement: 1,
      },
      error: '',
    };
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

      const diff = counterLeftDays(this.ev);
      if (diff <= 100) {
        this.error = 'Это событие уже наступило!';
        this.submitStatus = 'ERROR';
        return;
      }

      this.submitStatus = '';
      this.$emit('countLeftTime', this.ev);
      this.$emit('setLocaleStorage', this.ev);
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
