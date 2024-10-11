<template>
  <section class="about-me py-5 mt-5" v-if="$store.state.aboutMe.length > 0">
    <div class="container" v-for="about in $store.state.aboutMe" :key="about">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="text-uppercase mb-4 about-me-title" id="text-glow1">About Me</h2>
          <p class="text-center about-me-description">
            {{ about.description }}
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-4 text-left">
          <div class="about-me-details-label">
            <p>Full Name:</p>
            <p>Date of Birth:</p>
            <p>Address:</p>
            <p>Email:</p>
            <p>Phone:</p>
            <p>Freelance:</p>
          </div>
        </div>
        <div class="col-md-4 text-left">
          <div class="about-me-details-value">
            <p>{{ about.fullname }}</p>
            <p>{{ about.dateofbirth }}</p>
            <p>{{ about.address }}</p>
            <p>{{ about.email }}</p>
            <p>{{ about.number }}</p>
            <p>{{ about.freelance }}</p>
          </div>
        </div>
        <div class="col-md-4 d-flex flex-column align-items-start align-items-md-end">
          <a class="custom-link mb-4" href="#contact">
            <button class="btn about-me-contact-btn">Get In Touch</button>
          </a>
          <a class="custom-link" href="https://mohammad-mohamed.github.io/hostedImages/images/Portfolio/Mohammad%20Mohamed%20CV.pdf" download target="_blank">
            <button class="btn about-me-download-btn">Download CV</button>
          </a>
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
  components: {
    SpinnerComp
  },
  computed: {
    getAbout() {
      return this.$store.dispatch('getAbout')
    }
  },
  mounted() {
    this.getAbout
  }
}
</script>

<style scoped>
/* General Styling */
.custom-link {
  text-decoration: none;
  color: inherit;
}

.custom-link:hover,
.custom-link:focus,
.custom-link:active {
  text-decoration: none;
  color: inherit;
}

/* Title Styling */
.about-me-title {
  background: linear-gradient(180deg, #9e5ef0 0%, #6a0dad 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  font-size: 40px;
  line-height: 1.2;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

/* Description Styling */
.about-me-description {
  color: #e0e0e0;
  font-size: 18px;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 40px;
  letter-spacing: 0.5px;
  text-align: justify;
}

/* Labels and Values Styling */
.about-me-details-label p,
.about-me-details-value p {
  color: #c5c5c5;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
}

.about-me-details-label {
  font-weight: 600;
  color: #ffffff;
}

.about-me-details-value {
  color: #f2f2f2;
  font-weight: 400;
}

/* Button Styling */
.about-me-contact-btn,
.about-me-download-btn {
  font-family: 'Poppins', sans-serif;
  border-radius: 50px;
  padding: 16px 35px;
  background: linear-gradient(145deg, #8e44ad, #9b59b6);
  color: white;
  border: none;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.about-me-contact-btn:hover,
.about-me-download-btn:hover {
  background: linear-gradient(145deg, #9b59b6, #8e44ad);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

/* Shadows and Visual Effects */
.about-me {
  background-color: #363535;
  border-radius: 15px;
  padding: 50px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .about-me-title {
    font-size: 32px;
  }
  .about-me-description {
    font-size: 16px;
  }
  .about-me-contact-btn,
  .about-me-download-btn {
    padding: 14px 30px;
    font-size: 16px;
  }
}

@media (max-width: 500px) {
  .about-me-title {
    font-size: 28px;
  }
  .about-me-description {
    font-size: 15px;
  }
  .about-me-contact-btn,
  .about-me-download-btn {
    padding: 12px 28px;
    font-size: 14px;
  }
}
</style>
