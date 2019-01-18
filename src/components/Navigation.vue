<template>
    <header>
        <router-link to="/">
            <h1><span class="three-d">3D</span> Jobber</h1>
        </router-link>
        <div id="user-info">
            <router-link to="/logout" v-if="user">
                <a>Logout <i class="icon fas fa-sign-out-alt"></i></a>
            </router-link>
            <router-link to="/login" v-else>
                <a>Login <i class="icon fas fa-sign-in-alt"></i></a>
            </router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Navigation',
    computed: {
    user() {
      return this.$store.state.user
    },
  },
}
</script>


<style>
header {
    padding: 1rem;
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: center;
    border-bottom: 1px solid #ddd;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

#user-info {
    text-align: right;
}

a {
    text-decoration: none;
}
a:visited {
    color: #2c3e50;
}

a h1 {
    text-transform: uppercase;
    background: linear-gradient(135deg, #41B883 0%, #34495E 30%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3rem;
}
</style>
