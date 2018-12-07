<template>
  <form  name="newJobForm" @submit.prevent="handleSubmit" >
    <div>
      <label for="newName">Name</label>
      <input type="text" name="newName" v-model="newPrintForm.name">
    </div>
    <div>
      <label for="newQty">Quantity</label>
      <input type="text" name="newQty" v-model="newPrintForm.qty">
    </div>
    <div>
      <label for="newColor">Color</label>
      <input type="text" name="newColor" v-model="newPrintForm.color">
    </div>
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
