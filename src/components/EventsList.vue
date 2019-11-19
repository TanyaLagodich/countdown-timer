<template>
  <div>
    <div class="d-flex justify-content-space-betnween w-100 mb-4">
      <h2 class="text-left w-100">Event list</h2>
      <button class="btn btn-dark w-50"
              @click="$emit('addEvent')">Add timer</button>
    </div>
    <table class="table"
           v-if="eventList && eventList.length">
      <thead>
        <th>Название</th>
        <th>Дата</th>
        <th>Время</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="ev in eventList"
            :key="ev.name">
            <td>{{ ev.name }}</td>
            <td>{{ formatDate(ev.date) }}</td>
            <td>{{ ev.time }}</td>
            <td class="text-center">
              <button class="btn btn-dark mr-3"
                      @click="$emit('countLeftTime', ev)">Show</button>
              <button class="btn btn-dark"
                      @click="$emit('removeEvent', ev.id)">Delete</button>
            </td>
        </tr>
      </tbody>
    </table>
    <p v-else>You have not added any events yet.</p>
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
