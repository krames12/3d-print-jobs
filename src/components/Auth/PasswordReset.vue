<template>
  <div class="login-container">
    <h1>Password Reset</h1>

    <form
    class="py-5 mx-auto my-10 w-1/2"
    name="resetPasswordForm"
    @submit.prevent="resetUserPassword(resetPasswordForm)"
  >
    <fieldset class="my-5">
      <label for="email" class="leading-loose block">Email</label>
      <input
        type="email"
        class="border-b border-grey-darkest p-1 w-full"
        name="email"
        required
        v-model="resetPasswordForm.email"
      >
    </fieldset>
    <button
      type="submit"
      class="bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 rounded"
    >Submit</button>
  </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      resetPasswordForm: {
        email: '',
      },
    }
  },
  methods: mapActions([
    'resetUserPassword'
  ])
}
</script>