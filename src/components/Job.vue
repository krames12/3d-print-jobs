<template>
  <li class="job flex justify-between py-2 my-5 border-b border-grey-dark">
    <p class="self-center w-1/5">{{ job.name }}</p>
    <p class="self-center w-1/5">{{ job.color }}</p>
    <p class="self-center w-1/5">
      {{ job.qty }}
      <span
        class="cursor-pointer text-grey-darkest hover:text-green-dark"
        v-if="!job.completed"
        @click="handleIncrementQty"
      >
        <i class="icon fas fa-plus"></i>
      </span>
      <span
        class="cursor-pointer text-grey-darkest hover:text-red-dark"
        v-if="!job.completed"
        @click="handleDecrementQty"
      >
        <i class="icon fas fa-minus"></i>
      </span>
    </p>
    <p class="self-center w-1/5">
      {{ job.qtyCompleted }}
      <span
        class="cursor-pointer text-grey-darkest hover:text-green-dark"
        v-if="!job.completed"
        @click="handleIncrementQtyCompleted"
      >
        <i class="icon fas fa-check"></i>
      </span>
    </p>
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
    },

    handleIncrementQty() {
      this.$emit('incrementQty', this.job.id);
    },

    handleDecrementQty() {
      this.$emit('decrementQty', this.job.id);
    },

    handleIncrementQtyCompleted() {
      this.$emit('incrementQtyCompleted', this.job.id);
    }
  }
}
</script>
