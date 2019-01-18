<template>
  <div class="login-container">
    <h1>Sign Up</h1>

    <form
    class="py-5 mx-auto my-10 w-1/2"
    name="loginForm"
    @submit.prevent="createNewUser(signUpForm)"
  >
    <fieldset class="my-5">
      <label for="email" class="leading-loose block">Email</label>
      <input
        type="email"
        class="border-b border-grey-darkest p-1 w-full"
        name="email"
        required
        v-model="signUpForm.email"
      >
    </fieldset>
    <fieldset class="my-5">
      <label for="password" class="leading-loose block">Password</label>
      <input
        type="password"
        class="border-b border-grey-darkest p-1 w-full"
        name="password"
        required
        v-model="signUpForm.password"
      >
    </fieldset>
    <button
      type="submit"
      class="bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 rounded"
    >Sign Up</button>
  </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SignUp',
  data() {
    return {
      signUpForm: {
        email: '',
        password: '',
      },
    }
  },
  methods: mapActions([
    'createNewUser'
  ])
}
</script>