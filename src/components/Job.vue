<template>
  <li class="job">
    <p>{{ job.name }} - {{ job.qty }}</p>
  </li>
</template>

<script>
export default {
  name: 'Job',
  props: {
    job: Object
  }
}
</script>
