<template>

  <nav class="container-fluid navbar navbar-expand-md p-0 navbar-light  bg-white m-0 py-0 justify-content-around"  id="nav">

    <div class="d-flex m-0">
      <!--      <a href="index.html" class="logo"><img src="images/logo.png" alt=""></a>-->
      <router-link class="nav-link" to="/"> <img src="../assets/images/TreeValley.png" class="align-self-center" alt="logo"></router-link>
      <div class="pt-2">
        <button class="navbar-toggler align-self-baseline" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse align-items-stretch mt-0" id="mynavbar">
        <ul class="navbar-nav mt-0 m-0">
          <li class="nav-item home-top home">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item  ">
            <!--            <a  href="blog.html">Blog</a>-->
            <router-link class="nav-link " to="/shop">Shop</router-link>
          </li>
          <li class="nav-item ">
            <!--            <a class="nav-link" href="contact.html">Contact</a>-->
            <router-link class="nav-link " to="/contact">Contact</router-link>
<!--            <ListShopping/>-->
          </li>
<!--          <li class="nav-item ">-->
<!--            &lt;!&ndash;            <a class="nav-link" href="contact.html">Contact</a>&ndash;&gt;-->
<!--             <ListShopping/>-->

<!--          </li>-->
        </ul>
      </div>
    </div>

  </nav>

  <router-view/>

</template>

<script>
// import Shop from "../views/Shop";

// import ListShopping from "./ListShopping";
export default {
  name: "Header",
  // components: {
  //   ListShopping
  // }
}
</script>

<style scoped>

</style>