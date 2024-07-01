<template>
  <router-view/>
  <div class="wrapper">
    <NavBar/>
    <section id="home">
        <HomeSection/>
      </section>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import HomeSection from '@/components/HomeSection.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    Footer,
    HomeSection,
  }
}
</script>

