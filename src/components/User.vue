<template>
  <div class="user">
    <h1>Nomes de Usuarios</h1>
    <ul id="lista">
      <li v-for="user in usuarios" :key="user.id">
        <router-link :to="{ path: `user/${user.id}` }">{{ user.name }} - {{user.email}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "User",
  props: {
    msg: String
  },
  data() {
    return {
      usuarios: null
    };
  },
  mounted() {
    axios
      .get("https://www.mocky.io/v2/5ebdbed93100008e00c5cd2d")
      .then(response => (this.usuarios = response.data.results));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
