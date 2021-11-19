<template>
  <div class="popup">
    <h1>Hello {{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'popup',
  data () {
    return {
      msg: 'popup'
    }
  }
}

</script>

<style>
.popup {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
