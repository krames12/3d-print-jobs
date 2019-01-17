<template>
  <li class="job flex justify-between py-2 my-5 border-b border-grey-dark">
    <p class="self-center w-1/5">{{ job.name }}</p>
    <p class="self-center w-1/5">{{ job.color }}</p>
    <p class="self-center w-1/5">
      {{ job.qty }}
      <span
        class="cursor-pointer text-grey-darkest hover:text-green-dark"
        v-if="!job.completed"
        @click="incrementQty(job.id)"
      >
        <i class="icon fas fa-plus"></i>
      </span>
      <span
        class="cursor-pointer text-grey-darkest hover:text-red-dark"
        v-if="!job.completed"
        @click="decrementQty(job.id)"
      >
        <i class="icon fas fa-minus"></i>
      </span>
    </p>
    <p class="self-center w-1/5">
      {{ job.qtyCompleted }}
      <span
        class="cursor-pointer text-grey-darkest hover:text-green-dark"
        v-if="!job.completed"
        @click="incrementQtyCompleted(job.id)"
      >
        <i class="icon fas fa-check"></i>
      </span>
    </p>
    <button
      class="
        cursor-pointer text-grey-darkest
        hover:text-red-dark font-bold py-2 px-4
      "
      @click="deleteJob(keyProp)"
    >
      <i class="icon far fa-trash-alt"></i>
    </button>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Job',
  props: {
    job: Object,
    keyProp: String,
  },
  methods: mapActions([
    'incrementQty',
    'decrementQty',
    'incrementQtyCompleted',
    'deleteJob'
  ]),
}
</script>
