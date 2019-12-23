<template>
  <input type="text"
         :value="value"
         @input="$emit('input', $event.target.value)">
</template>
<script>
import Flatpickr from 'flatpickr';
import Russian from 'flatpickr/dist/l10n/ru';

export default {
  data() {
    return {
      fp: '',
    };
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    config: {
      type: Object,
      default: () => ({
        locale: Russian.ru,
      }),
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const elem = this.$el;
      this.fp = new Flatpickr(elem, this.config);
    },
  },
};
</script>
<style scoped lang="scss">
  @import '~flatpickr/dist/flatpickr.css';
</style>
