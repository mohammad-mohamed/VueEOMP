<template>
  <router-view/>
  <div class="wrapper">
    <NavBar/>
    <!-- <section class="bg-dark"> -->
    <section id="home">
        <HomeSection/>
      </section>
      <section id="about">
        <AboutSection :aboutMe="aboutMe"/>
      </section>
      <section id="resume">
        <ResumeSection/>
      </section>
    <Footer/>
  <!-- </section> -->
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import HomeSection from '@/components/HomeSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ResumeSection from '@/components/ResumeSection.vue'


export default {
  name: 'HomeView',
  components: {
    NavBar,
    Footer,
    HomeSection,
    AboutSection,
    ResumeSection
  },
  computed:{
  
  },
  mounted(){
  
  }
}
</script>

