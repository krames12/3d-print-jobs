<template>
  <div class="login-container">
    <h1>Login</h1>

    <form
    class="py-5 mx-auto my-10 w-1/2"
    name="loginForm"
    @submit.prevent="loginUser(loginForm)"
  >
    <fieldset class="my-5">
      <label for="email" class="leading-loose block">Email</label>
      <input
        type="email"
        class="border-b border-grey-darkest p-1 w-full"
        name="email"
        required
        v-model="loginForm.email"
      >
    </fieldset>
    <fieldset class="my-5">
      <label for="password" class="leading-loose block">Password</label>
      <input
        type="password"
        class="border-b border-grey-darkest p-1 w-full"
        name="password"
        required
        v-model="loginForm.password"
      >
    </fieldset>
    <fieldset class="my-5">
      <router-link to="/password-reset" class="text-grey-dark hover:text-grey-darker">
        Forgot your password?
      </router-link>
    </fieldset>
    <button
      type="submit"
      class="bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 rounded"
    >Login</button>
    <router-link to="/sign-up">
      <button
        class="border border-grey-dark hover:bg-grey-dark text-grey-dark hover:text-white font-bold mx-5 py-2 px-4 rounded"
      >Sign Up</button>
    </router-link>
  </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
      },
    }
  },
  methods: mapActions([
    'loginUser'
  ])
}
</script>