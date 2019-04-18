<template>
<div class ="home">
    <h1>Provo Married Student 1st Ward</h1>
    <hr>
    <div v-if="user" class="header">
      <div>
        <h2>Hello, {{user.name}}</h2>
      </div>
      <div class="button">
        <p><button @click="logout" class="pure-button pure-button-primary">Logout</button></p>
      </div>
    </div>
    <div v-else>
      <p>Register or Login to edit the directory.</p>
      <router-link to="/register" class="pure-button">Register</router-link> or
      <router-link to="/login" class="pure-button">Login</router-link>
    </div>
</div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    this.$store.dispatch("getUser");
  },
  methods: {
    async logout() {
      try {
        this.error = await this.$store.dispatch("logout");
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
.pure-button {
  margin: 0px 20px;
  background-color: #8C281F;
  color: #fff;
}
</style>
