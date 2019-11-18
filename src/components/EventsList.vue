<template>
  <div class="d-flex justify-content-between align-items-center wrap">
    <div>
      <h2 v-if="eventList && eventList.length">Список событий</h2>
      <div v-for="ev in eventList"
          :key="ev.name"
          @click="$emit('countLeftTime', ev)">
        <h3>{{ ev.name }}</h3>
        <p>{{ formatDate(ev.date) }} {{ ev.time }}</p>
      </div>
    </div>
    <button class="btn btn-dark"
            @click="$emit('addEvent')">Добавить таймер</button>
    <a></a>
  </div>
</template>
<script>
export default {
  props: {
    eventList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    formatDate(date) {
      return date.split(', ').reverse().join('-');
    },
  },
};
</script>
