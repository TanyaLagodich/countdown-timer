<template>
  <div v-if="leftTimes && Object.keys(leftTimes).length">
    <button class="btn btn-dark"
            @click="$emit('reset')">Back</button>
    <div class="row wrap justify-content-center align-items-center">
      <ul class="d-flex">
        <li><h1 class="text-center">{{ leftTimes.days }}</h1>days</li>
        <li><h1 class="text-center">{{ leftTimes.hours }}</h1>hours</li>
        <li> <h1 class="text-center">{{ leftTimes.minutes }}</h1>minutes</li>
        <li> <h1 class="text-center">{{ leftTimes.seconds }}</h1>seconds</li>
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
