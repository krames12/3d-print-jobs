<template>
  <form  name="newJobForm" @submit.prevent="handleSubmit" >
    <fieldset class="my-5">
      <label for="newName" class="leading-loose">Name</label>
      <input
        type="text"
        class="border-b border-grey-darkest p-1"
        name="newName"
        v-model="newPrintForm.name"
      >
    </fieldset>
    <fieldset class="my-5">
      <label for="newQty" class="leading-loose">Quantity</label>
      <input
        type="text"
        class="border-b border-grey-darkest p-1"
        name="newQty"
        v-model="newPrintForm.qty"
      >
    </fieldset>
    <fieldset class="my-5">
      <label for="newColor" class="leading-loose">Color</label>
      <input
        type="text"
        class="border-b border-grey-darkest p-1"
        name="newColor"
        v-model="newPrintForm.color"
      >
    </fieldset>
    <button
      type="submit"
      class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
    >Click to add generic job</button>
  </form>
</template>

<script>
export default {
  name: "NewJobForm",
  data() {
    return {
      newPrintForm: {
        name: '',
        qty: 0,
        color: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('add-new-job', this.newPrintForm);

      this.newPrintForm = {
        name: '',
        qty: 0,
        color: '',
      }
    }
  }
}
</script>

<style>
fieldset {
  padding-left: 0;
  border: none;
}
</style>
