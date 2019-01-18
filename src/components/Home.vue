<template>
    <div v-if="user">
        <JobList />
        <NewJobForm />
    </div>
    <div class="flex items-center justify-center my-20" v-else>
      <div>
        <h3 class="my-10">Please log in to see your jobs listing.</h3>
        <div class="text-center">
          <router-link to="/login">
            <button
              class="bg-teal-dark hover:bg-teal-darker text-white hover:text-white font-bold mx-5 py-2 px-4 rounded"
            >
              Login
            </button>
          </router-link>
          <router-link to="/sign-up">
            <button
              class="border border-grey-dark hover:bg-grey-dark text-grey-dark hover:text-white font-bold mx-5 py-2 px-4 rounded"
            >
              Sign Up
            </button>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
import JobList from './JobList.vue'
import NewJobForm from './NewJobForm.vue'

export default {
  name: 'Home',
  components: {
    JobList,
    NewJobForm
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 70%;
  color: #2c3e50;
  margin: 60px auto 0 auto;
}

.icon {
  margin: 5px;
}
</style>
