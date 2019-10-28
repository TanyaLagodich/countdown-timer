<template>
  <div>
    <h1>{{ leftTimes.days }} : {{ leftTimes.hours }} :
        {{ leftTimes.minutes }} : {{ leftTimes.seconds }}</h1>
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
