<template>
  <form  name="newJobForm" @submit.prevent="handleSubmit" >
    <fieldset>
      <label for="newName">Name</label>
      <input type="text" name="newName" v-model="newPrintForm.name">
    </fieldset>
    <fieldset>
      <label for="newQty">Quantity</label>
      <input type="text" name="newQty" v-model="newPrintForm.qty">
    </fieldset>
    <fieldset>
      <label for="newColor">Color</label>
      <input type="text" name="newColor" v-model="newPrintForm.color">
    </fieldset>
    <button type="submit">Click to add generic job</button>
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
