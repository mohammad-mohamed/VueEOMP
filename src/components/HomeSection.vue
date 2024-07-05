<template>
    <section class="container">
      <div id="home">
        <div class="row">
          <div class="col-md-4 d-flex justify-content-between">
            <div class="rounded-circle img-container">
              <div class="background-gradient"></div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c28178f9f35ab88b1334f4a4366cdcdce517522f0177a64a01b382e10cb086a7?apiKey=0bccd99636064f128fb65b1d52624404"
                class="img-fluid"
                alt="Profile Picture"
              />
            </div>
          </div>
          <div class="col-md-8 d-flex align-items-center typewriter">
            <h1 class="text-white text-center w-100 fw-bold">
              I am Mohammad Mohamed,
              <p class="text-break gradient-text">a Web Developer</p>
            </h1>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  @media (max-width: 300px) {
    #home {
      height: 100vh;
    }
  }
  #home {
    background-color: rgb(31, 31, 31);
    padding-top: 50px; /* Moves the content down by 50px */
  }
  
  .gradient-text {
    background: linear-gradient(138deg, #ff8660 15%, #8000ff 104.95%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .img-container {
    position: relative;
    padding-bottom: 10px;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .background-gradient {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(138deg, #ff8660 9.86%, #8000ff 104.95%);
    border-radius: 50%;
    animation: spin 5s linear infinite;
  }
  
  .img-container img {
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    width: 100%;
    border-radius: 50%;
    position: relative;
    z-index: 1;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  