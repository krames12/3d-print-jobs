<template>
  <form
    class="py-5 mx-auto my-10 w-1/2"
    name="newJobForm"
    @submit.prevent="addJob(newPrintForm)"
  >
    <h3>New Job</h3>
    <fieldset class="my-5">
      <label for="newName" class="leading-loose block">Name</label>
      <input
        type="text"
        class="border-b border-grey-darkest p-1 w-full"
        name="newName"
        v-model="newPrintForm.name"
      >
    </fieldset>
    <fieldset class="my-5">
      <label for="newQty" class="leading-loose block">Quantity</label>
      <input
        type="text"
        class="border-b border-grey-darkest p-1 w-full"
        name="newQty"
        v-model="newPrintForm.qty"
      >
    </fieldset>
    <fieldset class="my-5">
      <label for="newColor" class="leading-loose block">Color</label>
      <input
        type="text"
        class="border-b border-grey-darkest p-1 w-full"
        name="newColor"
        v-model="newPrintForm.color"
      >
    </fieldset>
    <button
      type="submit"
      class="bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 rounded"
    >Add New Job</button>
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
    addJob: function(newPrintForm) {
      this.$store.dispatch('addJob', newPrintForm);
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
