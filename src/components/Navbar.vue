<template>
  <div class="wrapper">
      <!-- Top Bar Start -->
      <div class="top-bar">
          <div class="container-fluid">
              <div class="row align-items-center">
                  <div class="col-lg-4 col-md-12">
                      <div class="logo">
                          <a href="index.html">
                              <h1>プロジェク</h1> <!-- Title -->
                              <!-- <img src="img/logo.jpg" alt="Logo"> -->
                          </a>
                      </div>
                  </div>
                  <div class="col-lg-8 col-md-7 d-none d-lg-block">
                      <div class="row">
                          <div class="col-4">
                              <div class="top-bar-item">
                                  <div class="top-bar-icon">
                                      <i class="flaticon-calendar"></i>
                                  </div>
                                  <div class="top-bar-text">
                                      <h3>Opening Hour</h3>
                                      <p>Mon - Fri, 8:00 - 9:00</p>
                                  </div>
                              </div>
                          </div>
                          <div class="col-4">
                              <div class="top-bar-item">
                                  <div class="top-bar-icon">
                                      <i class="flaticon-call"></i>
                                  </div>
                                  <div class="top-bar-text">
                                      <h3>Call Us</h3>
                                      <p>+012 345 6789</p>
                                  </div>
                              </div>
                          </div>
                          <div class="col-4">
                              <div class="top-bar-item">
                                  <div class="top-bar-icon">
                                      <i class="flaticon-send-mail"></i>
                                  </div>
                                  <div class="top-bar-text">
                                      <h3>Email Us</h3>
                                      <p>info@example.com</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- Top Bar End -->

      <!-- Nav Bar Start -->
      <div class="nav-bar">
          <div class="container-fluid">
              <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                  <a href="#" class="navbar-brand">MENU</a>
                  <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                      <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                      <div class="navbar-nav mr-auto">
                          <a href="index.html" class="nav-item nav-link active">Home</a>
                          <a href="about.html" class="nav-item nav-link">About</a>
                          <a href="service.html" class="nav-item nav-link">Service</a>
                          <!--div class="nav-item dropdown">
                              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                              <div class="dropdown-menu">
                                  <a href="blog.html" class="dropdown-item">Blog Page</a>
                                  <a href="single.html" class="dropdown-item">Single Page</a>
                              </div>
                          </div-->
                          <a href="contact.html" class="nav-item nav-link">Contact</a>
                      </div>
                      <!--div class="ml-auto">
                          <a class="btn" href="#">Get A Quote</a>
                      </div-->
                  </div>
              </nav>
          </div>
      </div>
    </div>
      <!-- Nav Bar End -->
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
</style>
