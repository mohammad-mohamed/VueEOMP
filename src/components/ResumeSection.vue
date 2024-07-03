<template>
    <section>
      <!-- Education Section -->
      <section class="education-section">
        <h2 class="education-title" id="text-glow5">Education</h2>
        <article class="education-item" v-for="education in $store.state.resume" :key="education">
          <h3 class="education-degree">{{ education.degree }}</h3>
          <div class="education-details">
            <img :src="education.icon" alt="" class="education-icon" />
            <time class="education-date">{{ education.dates }}</time>
          </div>
        </article>
        <div class="education-separator"></div>
      </section>
  
      <!-- Skills Section -->
      <section id="skills">
        <div class="resumeW text-uppercase">Skills</div>
        <div class="container-fluid theSk my-5">
          <div class="skilly" v-for="skill in $store.state.skills" :key="skill">
            <img class="imgIcon" :src="skill.skill" alt="Skill Icon" />
          </div>
        </div>
      </section>
    </section>
  </template>
  
  <script>
  export default {
    computed:{
        getResume(){
        return this.$store.dispatch("getResume")
        },
        getSkills(){
        return this.$store.dispatch("getSkills")
        }
    },
    mounted(){
        this.getResume
        this.getSkills
    },
  }
  </script>

<style>

.theSk {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.resumeW{
    text-transform: uppercase;
  background: linear-gradient(90deg, #2df872 0%, #0fc000 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font: 800 35px/102% Poppins, sans-serif;
}

.imgIcon {
  width: auto;
  height: 15vh;
}

</style>