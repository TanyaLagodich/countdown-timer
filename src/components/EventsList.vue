<template>
  <div class="input-box">
    <h3 v-if="eventsList.length">Список событий</h3>
    <h3 v-else>Вы еще не добавили ни одного события</h3>
    <button>Добавить</button>
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
