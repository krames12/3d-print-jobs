<template>
  <div id="app">
    <JobList />
  </div>
</template>

<script>
import JobList from './components/JobList.vue'

export default {
  name: 'app',
  components: {
    JobList
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
</style>
