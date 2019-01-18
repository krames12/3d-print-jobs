<template>
  <div><h1>Logging out...</h1></div>
</template>

<script>
export default {
  name: 'Logout',
  mounted: function() {
    this.$store.dispatch('logoutUser');
  }
}
</script>