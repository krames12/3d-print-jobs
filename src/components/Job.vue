<template>
  <li class="job flex justify-between  my-5">
    <p class="self-center">{{ job.name }} - {{ job.qty }}</p>
    <button
      class="cursor-pointer text-grey-darkest hover:text-grey-dark font-bold py-2 px-4 rounded"
      @click="handleDelete"
    >
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
