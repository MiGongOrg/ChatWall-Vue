<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: auto;
  overflow: hidden;
}
ul,li {
  padding: 0;
  margin: 0;
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url('assets/bg.jpg');
  background-position: center;
  background-size: cover;
}
/* 可见区域1920执行 */
@media only screen and (max-width: 1920px) {
  html {
    font-size: 90px;
  }
}

/* 可见区域1680执行 */
@media only screen and (max-width: 1680px) {
  html {
    font-size: 90px;
  }
}

/* 可见区域1600执行 */
@media only screen and (max-width: 1600px) {
  html {
    font-size: 80px;
  }
}

/* 可见区域1440执行 */
@media only screen and (max-width: 1440px) {
  html {
    font-size: 75px;
  }
}

/* 可见区域1366执行 */
@media only screen and (max-width: 1366px) {
  html {
    font-size: 70px;
  }
}

/* 可见区域1280执行 */
@media only screen and (max-width: 1280px) {
  html {
    font-size: 65px;
  }
}

/* 可见区域1100执行 */
@media only screen and (max-width: 1100px) {
  html {
    font-size: 55px;
  }
}

/* 可见区域1024执行 */
@media only screen and (max-width: 1024px) {
  html {
    font-size: 53px;
  }
}

/* 可见区域992执行 */
@media only screen and (max-width: 992px) {
  html {
    font-size: 50px;
  }
}

/* 可见区域768执行 */
@media only screen and (max-width: 768px) {
  html {
    font-size: 40px;
  }
}

/* 可见区域640执行 */
@media only screen and (max-width: 640px) {
  html {
    font-size: 30px;
  }
}
</style>
