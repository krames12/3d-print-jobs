<template>
  <div id="app-container">
    <Navigation />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>
#app-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
}

.content {
  width: 70%;
  margin: 2rem auto;
}

.icon {
  margin: 5px;
}
</style>
