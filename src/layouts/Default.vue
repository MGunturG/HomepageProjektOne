<template>
  <div>
    <Navbar />
    <Carousel />
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from "../components/Navbar"
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
export default {
  components: {
    Navbar,
    Carousel,
    Footer
  }
}
</script>

<style>
</style>
