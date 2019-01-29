<template>
  <div class="login-container">
    <h1>Password Reset</h1>

    <form
    class="py-5 mx-auto my-10 w-1/2"
    name="forgotPasswordForm"
    v-if="!verifiedToken"
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
        name="newPassword"
        required
        v-model="resetPasswordForm.newPassword"
      >
      <input type="hidden" name="token" v-model="resetPasswordForm.token">
    </fieldset>
    <button
      type="submit"
      class="bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 rounded"
    >Submit</button>
  </form>
  </div>
</template>

<script>
import firebase from '@/firebase.js';
import router from '@/router.js';
import { mapActions } from 'vuex'

export default {
  name: 'PasswordReset',

  data() {
    return {
      forgotPasswordForm: {
        email: '',
      },
      resetPasswordForm: {
        newPassword: '',
        token: this.$route.query.oobCode,
      },
      verifiedToken: false,
    }
  },

  methods: {
    ...mapActions([
      'resetUserPassword',
    ]),
    
    verifyToken() {
      if(this.$route.query.oobCode) {
        firebase.auth
            .verifyPasswordResetCode(this.$route.query.oobCode)
            .then(() => {
              this.verifiedToken = true;
            })
            .catch(error => {
              this.$store.dispatch("updateMessage", {
                status: "error",
                message:
                  "The reset token provided is invalid. Please try resetting your password again.",
                error: error,
                read: false,
              });
              return { verified: false };
            });
      }
    },

    handlePasswordReset({ token, newPassword }) {
      firebase.auth.confirmPasswordReset(token, newPassword)
        .then( response => {
          console.log('wut', response);
          this.$store.dispatch("updateMessage", {
              status: "success",
              message:
                "You're password has been reset. Please log in.",\
              read: false,
            });
          router.push({ path: "/login"});
        })
        .catch( error => {
          this.$store.dispatch("updateMessage", {
            status: "error",
            message:
              "There was an issue resetting your password",
            error: error,
            read: false,
          });
        });
    }
  },

  beforeMount: function() {
    this.verifyToken()
  }

}
</script>