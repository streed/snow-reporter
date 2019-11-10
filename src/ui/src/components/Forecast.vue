<template>
  Current Weather Summary: {{forecast.currently.summary}}
</template>

<script>
export default {
  name: 'Forecast',
  props: {
    forecast: Object
  }
}
</script>
