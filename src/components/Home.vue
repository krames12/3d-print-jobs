<template>
    <div v-if="user">
        <JobList />
        <NewJobForm />
    </div>
    <div class="text-center" v-else>
      <p>Please log in to see your jobs listing.</p>
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
  }
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
