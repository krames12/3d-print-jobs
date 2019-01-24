<template>
  <div class="login-container">
    <h1>Password Reset</h1>

    <form
    class="py-5 mx-auto my-10 w-1/2"
    name="forgotPasswordForm"
    v-if="!resetPasswordForm.token"
    @submit.prevent="resetUserPassword(forgotPasswordForm)"
  >
    <fieldset class="my-5">
      <label for="email" class="leading-loose block">Email</label>
      <input
        type="email"
        class="border-b border-grey-darkest p-1 w-full"
        name="email"
        required
        v-model="forgotPasswordForm.email"
      >
    </fieldset>
    <button
      type="submit"
      class="bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 rounded"
    >Submit</button>
  </form>
  <form 
    class="py-5 mx-auto my-10 w-1/2"
    name="resetPasswordForm"
    v-else
    @submit.prevent="handlePasswordReset(resetPasswordForm)"
  >
    <fieldset class="my-5">
      <label for="new-password" class="leading-loose block">New Password</label>
      <input
        type="password"
        class="border-b border-grey-darkest p-1 w-full"
        name="new-password"
        required
        v-model="resetPasswordForm.password"
      >
      <input type="hidden" name="email" v-model="resetPasswordForm.email">
      <input type="hidden" name="token" v-model="resetPasswordForm.token">
    </fieldset>
  </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PasswordReset',

  data() {
    return {
      forgotPasswordForm: {
        email: '',
      },
      resetPasswordForm: {
        email: this.$route.query.email,
        token: this.$route.query.token,
      }
    }
  },

  methods: mapActions([
    'resetUserPassword',
    'handlePasswordReset',
  ])
}
</script>