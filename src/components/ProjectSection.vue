<template>
  <section id="projects" v-if="$store.state.projects.length > 0">
    <div class="projects-heading-container">
      <button @click="prevSlide" class="carousel-control-btn">
        <svg class="icon-prev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        <span class="visually-hidden">Previous</span>
      </button>
      <h2 class="projects-heading">Projects</h2>
      <button @click="nextSlide" class="carousel-control-btn">
        <svg class="icon-next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <!-- Calculate number of slides needed based on projects length -->
        <div v-for="(projectsChunk, index) in chunks" :key="index" :class="{ 'carousel-item': true, 'active': index === 0 }">
          <div class="row row-cols-1 row-cols-md-3 g-3">
            <div v-for="(project, pIndex) in projectsChunk" :key="pIndex" class="col">
              <div class="card project-card shadow-sm mx-8 my-5">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <image :xlink:href="project.images" height="100%" width="100%" />
                </svg>
                <div class="card-body bg-secondary">
                  <p class="card-text">{{ project.name }}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <!-- Buttons for Vercel and GitHub -->
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-warning">
                        <a :href="project.vercel" target="_blank" rel="noopener noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="bi bi-cursor-fill" viewBox="0 0 16 16">
                            <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                          </svg>
                        </a>
                      </button>
                    </div>
                    <div class="btn-group">
                      <button type="button" class="btn btn-primary">
                        <a :href="project.github" target="_blank" rel="noopener noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                          </svg>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section v-else>
    <SpinnerComp />
  </section>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
import { Carousel } from 'bootstrap'; // Import Carousel from Bootstrap

export default {
  components: {
    SpinnerComp,
  },
  computed: {
    getProjects() {
      return this.$store.dispatch('getProjects');
    },
    chunks() {
      // Chunk the projects into arrays of 3
      const chunkSize = 3;
      const projects = this.$store.state.projects;
      return projects.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / chunkSize);
        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = []; // start a new chunk
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
      }, []);
    },
  },
  methods: {
    prevSlide() {
      const carousel = Carousel.getInstance(document.querySelector('#carouselExampleCaptions')) || new Carousel(document.querySelector('#carouselExampleCaptions'));
      carousel.prev();
    },
    nextSlide() {
      const carousel = Carousel.getInstance(document.querySelector('#carouselExampleCaptions')) || new Carousel(document.querySelector('#carouselExampleCaptions'));
      carousel.next();
    },
  },
  mounted() {
    this.getProjects;
  },
};
</script>
<style scoped>
.projects-heading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.projects-heading {
  text-transform: uppercase;
  font: 800 35px/102% Poppins, sans-serif;
  background: linear-gradient(180deg, #FF8660 0%, #D5491D 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 50px;
  margin-bottom: 50px;
}

.carousel-control-btn {
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  border-radius: 50%;
}

.carousel-control-btn:hover {
  transform: scale(1.2);
  background-color: rgba(255, 255, 255, 0.2);
}

.icon-prev,
.icon-next {
  width: 40px;
  height: 40px;
  stroke: currentColor;
  color: #D5491D;
}



.projects-section {
  padding: 0 20px;
}

.projects-container {
  margin-top: 33px;
}

.project-thumbnail {
  display: block;
  margin: 0 auto;
  max-width: 20%;
  height: auto;
}

.carousel-inner {
  width: 100%;
  height: auto;
}

.carousel-item {
  text-align: center;
}

.carousel-caption {
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 10px;
  font-size: medium;
  color: #161513;
}

.project-card {
  transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
}

.project-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
}

.makeBig {
  text-align: center;
}

.makeBig img {
  width: 200%;
}
</style>
