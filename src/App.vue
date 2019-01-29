<template>
  <div id="app-container">
    <Navigation />
    <div class="content">
      <Notification v-bind="message" />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
const Notification = () => import('@/components/Notification.vue');

export default {
  name: 'app',
  components: {
    Navigation,
    Notification
  },

  computed: {
    message() {
      return this.$store.state.message
    },
  },
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
