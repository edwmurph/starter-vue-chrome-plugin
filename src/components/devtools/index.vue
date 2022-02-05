<template>
  <div class="devtools">
    <h1>Hello {{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'devtools-index',
  data () {
    return {
      msg: 'devtools'
    };
  }
};

</script>

<style>
.devtools {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
