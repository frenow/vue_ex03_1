<template>
  <div class="userdetail">
    <h1>Detalhe de Usuario</h1>
    <p>id: {{usuarios.id}}</p>
    <p>Nome: {{usuarios.name}}</p>
    <p>Biografia: {{usuarios.bio}}</p>
    <p>Email: {{usuarios.email}}</p>
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
      .then(
        response =>
          (this.usuarios = response.data.results.find(
            user => user.id == this.$route.params.id
          ))
      );
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
