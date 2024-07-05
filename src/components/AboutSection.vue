<template>
    <section class="about-me py-5 mt-5" v-if="$store.state.aboutMe.length > 0">
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
              <a class="nav-link custom-link" href="#contact">Get In Touch</a>
            </button>
            <button class="btn about-me-download-btn">
              <a class="custom-link" href="https://mohammad-mohamed.github.io/hostedImages/images/Portfolio/Mohammad Mohamed CV.pdf" download target="_blank">Download CV</a>
            </button>
          </div>
        </div>
      </div>
      </div>
    </section>
    <section v-else>
      <SpinnerComp/>
    </section>
  </template>
  
  <script>
  import SpinnerComp from '@/components/SpinnerComp.vue'
  export default {
    components:{
      SpinnerComp
    },    
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
.custom-link {
  text-decoration: none;
  color: inherit; /* This will inherit the color of the parent element */
}

.custom-link:hover,
.custom-link:focus,
.custom-link:active {
  text-decoration: none;
  color: inherit;
}

/* about me */
.about-me-title {
  background: linear-gradient(180deg, #9360ff 0%, #8f1dd5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  font-size: 35px;
  line-height: 102%;
  font-family: Poppins, sans-serif;
}

.about-me-description {
  color: #c5c5c5;
  letter-spacing: 0.36px;
  font-weight: 300;
  font-size: 18px;
  font-family: Poppins, sans-serif;
  text-align: justify;
}

.about-me-details-label p,
.about-me-details-value p {
  color: #161513;
  margin: 0;
}

.about-me-details-label {
  text-align: left;
}

.about-me-details-value {
  text-align: left;
}

.about-me-actions {
  font-size: 21px;
  font-weight: 600;
}

.about-me-contact-btn,
.about-me-download-btn {
  font-family: Poppins, sans-serif;
  border-radius: 50px;
  padding: 24px 30px;
  text-align: center;
  display: inline-block;
  background: linear-gradient(0deg, #fff 0%, #fff 100%);
  color: #161513;
  border: 1px solid #fff;
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}

.about-me-contact-btn:hover,
.about-me-download-btn:hover {
  animation: growShrink 0.5s infinite alternate;
  color: #161513; 
}

@keyframes growShrink {
  0% {
    transform: scale(1);
    color: #161513; 

  }
  100% {
    transform: scale(1.1);
    color: #161513; 

  }
}

/* #about {
  margin-bottom: 120px;
} */

#textss p {
  color: #c5c5c5;
}

@media (max-width: 768px) {
  .about-me-actions {
    text-align: center;
  }
}
@media (max-width: 700px) {
  .about-me-title {
    font-size: 28px;
  }
  .about-me-description {
    font-size: 16px;
  }
  .about-me-contact-btn,
  .about-me-download-btn {
    padding: 20px 25px;
    font-size: 18px;
  }
}

@media (max-width: 300px) {
  .about-me-title {
    font-size: 24px;
  }
  .about-me-description {
    font-size: 14px;
  }
  .about-me-contact-btn,
  .about-me-download-btn {
    padding: 18px 22px;
    font-size: 16px;
  }
}

  
</style>
  