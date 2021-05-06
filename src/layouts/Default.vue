<template>
  <div>
    <Navbar />
    <Carousel />
    <Body />
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
import Body from "../components/Body"
import Footer from "../components/Footer"
export default {
  components: {
    Navbar,
    Carousel,
    Body,
    Footer
  }
}
</script>

<style>
</style>
