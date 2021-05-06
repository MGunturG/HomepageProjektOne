// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

// import css dari Template
import '~/assets/css/style.css'
import '~/assets/lib/animate/animate.min.css'
import '~/assets/lib/flaticon/font/flaticon.css'
import '~/assets/lib/owlcarousel/assets/owl.carousel.min.css'
import '~/assets/lib/lightbox/css/lightbox.min.css'
import '~/assets/lib/slick/slick.css'
import '~/assets/lib/slick/slick-theme.css'

import '~/assets/css/bootstrap.min.css'
import '~/assets/css/all.min.css' // Fontawesome lib

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
  })

  head.script.push({
    src: "https://code.jquery.com/jquery-3.4.1.min.js"
  })

  head.script.push({
    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"
  })

  head.script.push({
    src: "~/assets/lib/easing/easing.min.js"
  })

  head.script.push({
    src: "~/assets/lib/wow/wow.min.js"
  })

  head.script.push({
    src: "~/assets/lib/owlcarousel/owl.carousel.min.js"
  })

  head.script.push({
    src: "~/assets/lib/isotope/isotope.pkgd.min.js"
  })

  head.script.push({
    src: "~/assets/lib/lightbox/js/lightbox.min.js"
  })

  head.script.push({
    src: "~/assets/lib/waypoints/waypoints.min.js"
  })

  head.script.push({
    src: "~/assets/lib/counterup/counterup.min.js"
  })

  head.script.push({
    src: "~/assets/lib/slick/slick.min.js"
  })
}
