<template>
  <div v-if="leftTimes && Object.keys(leftTimes).length">
    <button class="btn btn-dark"
            @click="$emit('reset')">Back</button>
    <div v-if="leftTimes.diff <= 100">
      <h2 class="text-center">Event has come!</h2>
    </div>
    <div v-else
         class="row wrap justify-content-center align-items-center">
      <ul class="d-flex">
        <li>
          <h1 class="text-center border-bottom border-dark">{{ leftTimes.days }}</h1>days
        </li>
        <li>
          <h1 class="text-center border-bottom border-dark">{{ leftTimes.hours }}</h1>hours
        </li>
        <li>
          <h1 class="text-center border-bottom border-dark">{{ leftTimes.minutes }}</h1>minutes
        </li>
        <li>
          <h1 class="text-center border-bottom border-dark">{{ leftTimes.seconds }}</h1>seconds
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    leftTimes: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style scoped lang="scss">
  ul {
    list-style: none;
  }
  li {
    display: inline-block;
    font-size: 1.5em;
    list-style-type: none;
    padding: 1em;
    text-transform: uppercase;
  }
</style>
