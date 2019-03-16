<template>
  <div id="app" class='app'>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    let script = document.createElement('script');

    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB1JByjXXnbrGvZYMYoIrPEXlk0qvdjUhM';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }
}
</script>

<style>
/* default styles - end */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* default styles - end */

body {
  margin: 0;
}

.app {
  height: 100vh;
  width: 100vw;
  overflow:auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
