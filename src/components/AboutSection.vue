<template>
    <section class="about-me py-5 mt-5">
      <div class="container" v-for="about in $store.state.aboutMe" :key="about">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="text-uppercase mb-4 about-me-title" id="text-glow1">About me</h2>
            <p class="text-center about-me-description">
              {{ about.description }}
            </p>
          </div>
        </div>
        <div class="row mt-5">
          <div id="textss" class="col-md-4">
            <div class="about-me-details-label">
              <p>Full Name:</p>
              <p>Date of birth:</p>
              <p>Address:</p>
              <p>Email:</p>
              <p>Number:</p>
              <p>Freelance:</p>
            </div>
          </div>
          <div id="textss" class="col-md-4">
            <div class="about-me-details-value">
              <p>{{ about.fullname }}</p>
              <p>{{ about.dateofbirth }}</p>
              <p>{{ about.address }}</p>
              <p>{{ about.email }}</p>
              <p>{{ about.number }}</p>
              <p>{{ about.freelance }}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="d-flex flex-column about-me-actions">
              <button class="btn about-me-contact-btn mb-4">
                <a class="nav-link" href="#contact">Get In Touch</a>
              </button>
              <button class="btn about-me-download-btn">Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    computed:{
         getAbout(){
            return this.$store.dispatch('getAbout')
     },
     },
     mounted(){
         this.getAbout
     },

  }
  </script>
  
  <style scoped>
  </style>
  