<template>
  <li class="job">
    <p>{{ job.name }} - {{ job.qty }}</p>
    <button @click="handleDelete">Delete me!!!</button>
  </li>
</template>

<script>
export default {
  name: 'Job',
  props: {
    job: Object
  },
  methods: {
    handleDelete() {
      this.$emit('delete', this.job.id);
    }
  }
}
</script>
