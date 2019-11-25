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
        <th>Name</th>
        <th>Data</th>
        <th>Time</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="ev in eventList"
            :key="ev.name">
            <td>{{ ev.name }}</td>
            <td>{{ ev.date }}</td>
            <td>{{ ev.time }}</td>
            <td v-if="ev.hasCome"
                class="d-flex align-items-center justify-content-end">
              <p class="mr-3 mb-0">Event has come!</p>
              <button class="btn btn-dark"
                      @click="$emit('removeEvent', ev.id)">Delete</button>
            </td>
            <td v-else
                class="d-flex justify-content-end text-center">
              <button class="btn btn-dark mr-3"
                      @click="$emit('countLeftTime', ev)">Show</button>
              <button class="btn btn-dark"
                      @click="$emit('removeEvent', ev.id)"
                      id="remove">Delete</button>
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
};
</script>
