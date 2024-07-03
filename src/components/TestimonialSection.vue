<template lang="">
    <div id="testimonial" class="testimonials">
        <h1 class="testheader text-uppercase fw-bold-semi">Testimonial</h1>
        <section class="testimon container">
          <div class="card row" v-for="testimonial in $store.state.testimonials" :key="testimonial">
            <div class="poster">
              <img :src= testimonial.profile alt="" />
            </div>
            <div class="details">
              <h1 class="testname1">{{testimonial.name}} {{testimonial.surname}}</h1>
              <div class="info">
                <p>
                 {{testimonial.quotes}}
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
    <div class="spacer"></div>
  </template>
  <script>
  
  export default {
    computed:{
        getTestimonials(){
            return this.$store.dispatch('getTestimonials')
     },
     },
     mounted(){
         this.getTestimonials
     },

  }
  </script>
 <style scoped>
 .spacer {
  margin-bottom: 100px;
}

.testheader {
  font-size: 50px;
}

.testimonials {
  text-align: center;
  position: relative;
  height: 100vh;
}

.testimonials h1 {
  margin-top: 65px;
  color: #8f1dd5;
  text-shadow: 2px 1px 1px #070606;
}

.testimon {
  display: flex;
  gap: 10%;
  height: 0%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: small;
}

.testname {
  color: #8f1dd5;
}

.testname1 {
  color: #8f1dd5;
  text-shadow: 2px 1px 1px #070606;
  font-size: 30px;
}

.card {
  flex-direction: column;
  position: relative;
  width: 260px;
  height: 240px;
  background: #070606;
  border: 5px double #8f1dd5;
  border-radius: 0px;
  overflow: hidden;
  box-shadow: 0 15px 35px #9360ff; /* Updated box-shadow color here */
}

.card .poster {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
}

.card .poster::before {
  content: "";
  position: absolute;
  bottom: -180px;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg #070606 20%, transparent);
  transition: 3s;
  z-index: 1;
}

.card .poster img {
  width: 100%;
  height: 100%;
}

.card:hover .poster img {
  transition: 0.5s;
  transform: translateY(-20px);
  filter: blur(100px);
}

.card .details {
  position: absolute;
  bottom: -180px;
  left: 0;
  width: 100%;
  z-index: 2;
  transition: 0.5s;
  color: #b82d24;
  text-shadow: 3px 1px 1px #070606;
}

.card:hover .details {
  bottom: 10px;
}

.card .details .info {
  color: #fff;
  margin-top: 10px;
  z-index: 1;
}

@media (max-width: 425px) {
  .card {
    flex-direction: column;
    position: relative;
    width: 200px;
    height: 180px;
    background: #070606;
    border: 5px double #8f1dd5;
    border-radius: 0px;
    box-shadow: 0 15px 35px #9360ff; /* Updated box-shadow color here */
  }

  .card .poster {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .card .poster img {
    width: 100%;
    height: 100%;
  }

  .card .poster::before {
    content: "";
    position: absolute;
    bottom: -200px;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg #070606 20%, transparent);
    transition: 3s;
    z-index: 1;
  }

  .card .details {
    position: absolute;
    bottom: -800px;
    left: 0;
    width: 100%;
    z-index: 2;
    transition: 0.5s;
    color: #b82d24;
    text-shadow: 3px 1px 1px #070606;
  }

  .testname {
    font-size: 19px;
  }

  .testname1 {
    font-size: 23px;
  }

  .card:hover .details {
    bottom: 10px;
  }

  .info {
    font-size: 10px;
  }

  .testimon {
    height: 10%;
  }

  .testimonials {
    height: 100%;
  }
}

@media (width: 768px) {
  .card {
    width: 350px;
    height: 295px;
  }
}

@media (min-width: 1024px) and (max-width: 1500px) {
  .testimonials {
    height: 100vh;
  }

  .testimon {
    margin-top: 100px;
  }

  .card {
    width: 350px;
    height: 295px;
  }
}
 </style>