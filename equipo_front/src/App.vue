<template>

  <!-- NO ES NECESARIO TOCAR ESTE ARCHIVO -->

  <nav>
    <router-link to="/">VISTA1</router-link> |
    <router-link to="/vista2">VISTA2</router-link> |
    <router-link to="/vista3">VISTA3</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
