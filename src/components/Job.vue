<template>
  <li class="job">
    <p class="job-description">{{ job.name }} - {{ job.qty }}</p>
    <button class="button-delete-job" @click="handleDelete">
      <i class="icon far fa-trash-alt"></i>
    </button>
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
<style>
.job {
  display: flex;
  justify-content: space-between;
}

.button-delete-job {

}

.job-description {
  display: inline-block;
  margin: 5px;
}
</style>
