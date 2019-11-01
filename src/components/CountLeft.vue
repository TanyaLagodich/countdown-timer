<template>
  <div>
    <h1>{{ leftTimes.days }}дн : {{ leftTimes.hours }}ч :
        {{ leftTimes.minutes }}мин : {{ leftTimes.seconds }}сек</h1>
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
