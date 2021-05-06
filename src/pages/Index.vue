<template>
  <main>
    <transition name="fade" appear>
    <Layout>
        <Navbar/>
        <Carousel/>
        <Footer/>
    </Layout>
  </transition>
  </main>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Carousel from "../components/Carousel.vue"
import Body from "../components/Body.vue"
import Footer from "../components/Footer.vue"
export default {
  components: {
    Navbar,
    Carousel,
    Body,
    Footer
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>
