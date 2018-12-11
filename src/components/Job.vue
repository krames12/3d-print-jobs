<template>
  <li class="job flex justify-between py-2 my-5 border-b border-grey-dark">
    <p class="self-center w-1/5">{{ job.name }}</p>
    <p class="self-center w-1/5">{{ job.color }}</p>
    <p class="self-center w-1/5">{{ job.qty }}</p>
    <p class="self-center w-1/5">{{ job.completed }}</p>
    <button
      class="
        cursor-pointer text-grey-darkest
        hover:text-red-dark font-bold py-2 px-4
      "
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
