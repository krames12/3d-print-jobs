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
  width: max-content;
  color: #2c3e50;
  margin: 60px auto 0 auto;
}

button {
  border: none;
  background: none;
}

button .icon {
  font-size: 1.2em;
  background: white;
  padding: 5px;
  border: 1px solid #333;
  border-radius: 5px;
}

</style>
