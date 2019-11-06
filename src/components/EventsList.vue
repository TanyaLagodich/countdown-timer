<template>
  <div class="d-flex justify-content-center align-items-center wrap">
    <h3 v-if="eventsList.length">Список событий</h3>
    <button class="btn btn-dark"
            @click="$emit('addEvent')">Добавить таймер</button>
    <a></a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      eventsList: [],
    };
  },
};
</script>
