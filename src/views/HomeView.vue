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
      <section id="contact">
        <ContactSection/>
      </section>
      <FooterComp/>
      <SpinnerComp/>  
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import FooterComp from '@/components/Footer.vue'
import HomeSection from '@/components/HomeSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ResumeSection from '@/components/ResumeSection.vue'
import ProjectSection from '@/components/ProjectSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import SpinnerComp from '@/components/SpinnerComp.vue'


export default {
  name: 'HomeView',
  components: {
    NavBar,
    FooterComp,
    HomeSection,
    AboutSection,
    ResumeSection,
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
#home{
  background-color: rgb(31, 31, 31);
}
#about{
  background-color: rgb(31, 31, 31);
}
#projects{
  background-color: rgb(31, 31, 31);
  padding-top: 50px
}
#resume{
  background-color: rgb(31, 31, 31);
  padding-top: 50px
}
#contact{
  background-color: rgb(31, 31, 31);
  padding-top: 50px; 

}
</style>

