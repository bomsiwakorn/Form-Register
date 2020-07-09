<template>
  <div id="app">
    <div class="logo">
      <img alt="Vue logo" src="./assets/logo.png">
    </div>
    <Form />
  </div>
</template>

<script>
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    Form
  }
}
</script>

<style scoped>
  #app {
    display: grid;
    justify-content: center;
  }
  .logo {
    text-align: center;
  }
  .logo img {
    width: 120px;
  }
</style>
