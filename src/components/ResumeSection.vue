<template>
  <section>
    <!-- Education Section -->
    <section
      id="resume"
      class="education-section"
      v-if="$store.state.resume && $store.state.resume.length > 0"
    >
      <h1 class="education-title-2">Resume</h1>
      <h2 class="education-title" id="text-glow5">Education</h2>
      <article
        class="education-item"
        v-for="education in $store.state.resume"
        :key="education"
      >
        <h3 class="education-degree">{{ education.degree }}</h3>
        <div class="education-details">
          <img :src="education.icon" alt="" class="education-icon" />
          <time class="education-date">{{ education.dates }}</time>
        </div>
      </article>
      <div class="education-separator"></div>
    </section>
    <section v-else>
      <SpinnerComp />
    </section>

    <!-- Skills Section -->
    <section class="skills-section">
      <h2 class="resumeW">Skills</h2>
      <div class="theSk">
        <div
          class="skill-item cards"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div class="icon-container">
            <box-icon type="logo" name="html5" color="#532823b4" class="skill-icon"></box-icon>
            <h4 class="cards-title">HTML</h4>
          </div>
        </div>
        <div
          class="skill-item cards"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div class="icon-container">
            <box-icon type="logo" name="css3" color="#532823b4" class="skill-icon"></box-icon>
            <h4 class="cards-title">CSS</h4>
          </div>
        </div>
        <div
          class="skill-item cards"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div class="icon-container">
            <box-icon type="logo" name="bootstrap" color="#532823b4" class="skill-icon"></box-icon>
            <h4 class="cards-title">Bootstrap</h4>
          </div>
        </div>
        <div
          class="skill-item cards"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <div class="icon-container">
            <box-icon type="logo" name="javascript" color="#532823b4" class="skill-icon"></box-icon>
            <h4 class="cards-title">Javascript</h4>
          </div>
        </div>
        <div
          class="skill-item cards"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="700"
        >
          <div class="icon-container">
            <box-icon type="logo" name="vuejs" color="#532823b4" class="skill-icon"></box-icon>
            <h4 class="cards-title">Vue.JS</h4>
          </div>
        </div>
        <div
          class="skill-item cards"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          <div class="icon-container">
            <box-icon type="logo" name="nodejs" color="#532823b4" class="skill-icon"></box-icon>
            <h4 class="cards-title">Node.js</h4>
          </div>
        </div>
        <div
          class="skill-item cards"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="900"
        >
          <div class="icon-container">
            <img src="https://erin-caitlin.github.io/all-images/VuePortfolio/programing.png" class="skill-icon" />
            <h4 class="cards-title">MySQL</h4>
          </div>
        </div>
        <div
          class="skill-item cards"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <div class="icon-container">
            <box-icon type="logo" name="firebase" color="#532823b4" class="skill-icon"></box-icon>
            <h4 class="cards-title">Firebase</h4>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  computed: {
    getResume() {
      return this.$store.dispatch("getResume");
    },
    getSkills() {
      return this.$store.dispatch("getSkills");
    }
  },
  mounted() {
    this.getResume;
    this.getSkills;
  }
}
</script>

<style>
/* Updated CSS for a professional, polished look */

/* Skills Section */
.skills-section {
  background-color: #1c1c1c; /* Dark background */
  border-radius: 12px; /* Rounded corners */
  padding: 40px; /* Padding for the section */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2); /* Shadow for depth */
}

.theSk {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px; /* Adjusted gap between skill items */
}

.cards {
  background: linear-gradient(135deg, #6a11cb, #2575fc); /* Purple gradient */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  padding: 20px; /* Padding inside the card */
  text-align: center; /* Centering text inside cards */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Animation on hover */
  width: calc(25% - 20px); /* 4 items in a row with space for gaps */
}

.cards:hover {
  transform: translateY(-5px); /* Lift effect on hover */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3); /* Deeper shadow on hover */
}

.skill-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%; /* Ensuring items are full height */
}

.skill-icon {
  width: 64px; /* Size of the icons */
  height: 64px;
  margin-bottom: 10px; /* Space between icon and title */
}

.cards-title {
  font-size: 18px; /* Larger font size for titles */
  font-weight: 600; /* Bold titles */
  color: #ffffff; /* White color for text */
  letter-spacing: 0.5px; /* Letter spacing for clarity */
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5); /* Text shadow for depth */
}

.resumeW {
  text-transform: uppercase;
  background: linear-gradient(180deg, #ff5b5b 0%, #d11313 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font: 700 26px Poppins, sans-serif;
  text-align: center;
  /* margin-top: 60px; */
  margin-bottom: 30px;
}

/* Education Section */
.education-section {
  display: flex;
  flex-direction: column;
  max-width: 900px;
  padding: 20px;
  margin: 0 auto;
}

.education-title-2 {
  text-transform: uppercase;
  background: linear-gradient(180deg, #ff5b5b 0%, #d11313 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font: 800 36px Poppins, sans-serif;
  text-align: center;
  margin-bottom: 10px;
}

.education-title {
  text-transform: uppercase;
  background: linear-gradient(180deg, #ff5b5b 0%, #d11313 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font: 700 28px Poppins, sans-serif;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
}

.education-item {
  display: flex;
  align-items: center;
  padding: 20px;
  background: #bbbbbb;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.education-item:hover {
  transform: translateY(-5px); /* Hover lift effect */
}

.education-degree {
  flex: 1;
  font-size: 24px;
  font-weight: bold;
}

.education-details {
  display: flex;
  align-items: center;
}

.education-icon {
  width: 50px;
  height: 50px;
  margin-right: 10px; /* Space between icon and date */
}

.education-date {
  font-size: 16px;
  color: #555; /* Gray color for date */
}

.education-separator {
  height: 2px;
  background-color: #d1d1d1;
  margin-top: 30px;
}

</style>
