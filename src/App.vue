<template>
  <Header/>
  <Footer/>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
// import ListShopping from "./components/ListShopping";
export default {
  name: 'Home',
  components: {
    Footer,
    Header,
  }
}

</script>
<style lang="scss">
@import "style/custom.scss";

</style>
