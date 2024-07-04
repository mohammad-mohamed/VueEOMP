<template>
  <div class="page-background">
    <div class="wrapper">
      <NavBar/>
      <section id="home">
        <HomeSection/>
      </section>
      <section id="about">
        <AboutSection :aboutMe="aboutMe"/>
      </section>
      <section id="project">
        <ProjectSection/>
      </section>
      <section id="resume">
        <ResumeSection/>
      </section>
      <section id="testimonials">
        <TestimonialSection/>
      </section>
      <section id="contact">
        <ContactSection/>
      </section>
      <SpinnerComp/>  
      <Footer/>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import HomeSection from '@/components/HomeSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ResumeSection from '@/components/ResumeSection.vue'
import TestimonialSection from '@/components/TestimonialSection.vue'
import ProjectSection from '@/components/ProjectSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import SpinnerComp from '@/components/SpinnerComp.vue'


export default {
  name: 'HomeView',
  components: {
    NavBar,
    Footer,
    HomeSection,
    AboutSection,
    ResumeSection,
    TestimonialSection,
    ProjectSection,
    ContactSection,
    SpinnerComp
  },
  computed:{
  
  },
  mounted(){
  
  }
}
</script>
<style>

/* Add a global style for the body */
body {
  background-color: gray;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* Page background to cover the entire page */
.page-background {
  background-color: black;
  width: 100%;
}

/* Wrapper to center the content and add padding on sides */
.wrapper {
  background-color: rgb(31, 31, 31);
  max-width: 1200px; /* Adjust the width as needed */
  margin: 0 auto;
  padding: 0 20px; /* Adjust the padding as needed */
  box-shadow: 0 0 0 10px black;
}

/* Content section styles */
section {
  min-height: 100vh;
}

#home, #about, #project, #resume, #testimonial, #contact {
  padding: 20px 0; /* Adjust padding as needed */
}

/* Additional styles for the components */
.navbar, .footer {
  background-color: gray;
  padding: 20px;
}

/* Ensure the navbar and footer are within the wrapper */
.navbar {
  box-shadow: 0 0 0 10px black;
}

.footer {
  box-shadow: 0 0 0 10px black;
}


</style>

