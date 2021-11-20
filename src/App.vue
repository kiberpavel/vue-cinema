<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Header from './template/Header.vue';
import Footer from './template/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  created() {
    this.$http.interceptors.response.use(undefined, (err) => new Promise(function
    (resolve, reject) {
      if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
        this.$store.dispatch('logout');
      }
      throw err;
    }));
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
