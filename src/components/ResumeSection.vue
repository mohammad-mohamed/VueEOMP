<template>
  <section>
    <!-- Education Section -->
    <section id="resume" class="education-section" v-if="$store.state.resume && $store.state.resume.length > 0">
      <h1 class="education-title-2">Resume</h1>
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
    <section v-else>
      <SpinnerComp/>
    </section>

    <!-- Skills Section -->
    <section id="skills" v-if="$store.state.skills && $store.state.skills.length > 0">
      <div class="resumeW text-uppercase">Skills</div>
      <div class="container-fluid theSk my-5">
        <div class="skilly" v-for="skill in $store.state.skills" :key="skill">
          <img class="imgIcon" :src="skill.skill" alt="Skill Icon" />
        </div>
      </div>
    </section>
    <section v-else>
      <SpinnerComp/>
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

.education-title-2{
  text-transform: uppercase;
  background: linear-gradient(180deg, #ff5b5b 0%, #d11313 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    align-self: center;
    font: 800 35px/102% Poppins, sans-serif;
    margin-bottom: -30px;
}

.theSk {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.resumeW{
    text-transform: uppercase;
    background: linear-gradient(180deg, #ff5b5b 0%, #d11313 100%);
  background-clip: text;
  text-align: center;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font: 700 25px/102% Poppins, sans-serif;
}

.imgIcon {
  width: auto;
  height: 15vh;
}

/* education */

.education-section {
    display: flex;
    flex-direction: column;
    max-width: 799px;
    padding: 0 20px;
    margin: 0 auto; /* Center horizontally */
  }
  
  .education-title {
    margin-top: 100px;
    text-transform: uppercase;
    background: linear-gradient(180deg, #ff5b5b 0%, #d11313 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    align-self: center;
    font: 700 25px/102% Poppins, sans-serif;
  }
  
  .education-item {
    display: flex;
    width: 100%;
    gap: 20px;
    font-weight: 400;
    margin-top: 88px;
  }
  
  @media (max-width: 991px) {
    .education-item {
      flex-wrap: wrap;
      margin-top: 40px;
    }
  }
  
  .education-degree {
    color: var(--dark-content, #666);
    letter-spacing: 1px;
    flex-grow: 1;
    flex-basis: auto;
    font: 20px/140% Poppins, sans-serif;
  }
  
  @media (max-width: 991px) {
    .education-degree {
      max-width: 100%;
    }
  }
  
  .education-details {
    align-self: start;
    display: flex;
    gap: 7px;
    font-size: 14px;
    color: var(--Light-Grey, #8491a0);
    text-align: center;
    line-height: 150%;
  }
  
  .education-icon {
    width: 18px;
    aspect-ratio: 1.39;
    object-fit: auto;
    object-position: center;
  }
  
  .education-date {
    font-family: Poppins, sans-serif;
    flex-grow: 1;
    flex-basis: auto;
  }
  
  .education-institute {
    align-self: start;
    display: flex;
    gap: 5px;
    font-size: 12px;
    color: var(--light-Content, #a7a7a7);
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 233%;
  }
  
  .education-location-icon {
    width: 18px;
    aspect-ratio: 1.49;
    object-fit: auto;
    object-position: center;
    align-self: start;
  }
  
  .education-location {
    font-family: Poppins, sans-serif;
    flex-grow: 1;
    flex-basis: auto;
  }
  
  .education-separator {
    width: 100%;
    min-height: 2px;
    margin-top: 25px;
    background-color: var(--Colors-Grey, #ebeaed);
  }
  
  @media (max-width: 991px) {
    .education-separator {
      max-width: 100%;
    }
  }
  

</style>