<template>
  <Layout>
  <Navbar/>
  <Carousel/>
  <Footer/>
</Layout>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Carousel from "../components/Carousel.vue"
import Footer from "../components/Footer.vue"
export default {
  components: {
    Navbar,
    Carousel,
    Footer
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
</style>
