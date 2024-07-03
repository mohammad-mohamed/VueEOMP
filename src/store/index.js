
import { createStore } from 'vuex'
import axios from 'axios'
// state.data = 'something' //<--- this is wrong
export default createStore({
  //variables
  state: {
    // data -> propertyName, null -> value
    experince: [],
    education: [],
    aboutMe: [],
    workExp: [],
    projects: [],
    testimonial: [],
    skills: [],
  },
  mutations: {
    setHome(state, data) {
      state.home = data;
    },
    setAboutMe(state, about) {
      state.aboutMe = about;
    },
    setResume(state, resume) {
      state.resume = resume;
    },
    setSkills(state, skills) {
      state.skills = skills;
    },
    setProjects(state, projects) {
      state.projects = projects;
    },
    setTestimonials(state, testimonials) {
      state.testimonials = testimonials;
    },
    setContact(state, contact) {
      state.contact = contact;
    }
  },

  actions: {
    async getHome(context) {
      try {
        await axios.get('https://mohammad-mohamed.github.io/first-api/data/')
          .then(res => {
            context.commit('setHome', res.data.home);
          });
      } catch (error) {
        alert('Cannot retrieve home data:', error);
      }
    },
    async getAbout(context) {
      try {
      await axios.get('https://mohammad-mohamed.github.io/first-api/data/')
      .then (res => {
        context.commit('setAboutMe', res.data.aboutMe)
          });
      } catch (error) {
        alert('Cannot retrieve about data:', error);
      }
    },
    async getResume(context) {
      try {
        await axios.get('https://mohammad-mohamed.github.io/first-api/data/')
          .then(res => {
            context.commit('setResume', res.data.resume);
          });
      } catch (error) {
        alert('Cannot retrieve resume data:', error);
      }
    },
    async getSkills(context) {
      try {
        await axios.get('https://mohammad-mohamed.github.io/first-api/data/')
          .then(res => {
            context.commit('setSkills', res.data.skills);
          });
      } catch (error) {
        alert('Cannot retrieve skills data:', error);
      }
    },
    async getProjects(context) {
      try {
        await axios.get('https://mohammad-mohamed.github.io/first-api/data/')
          .then(res => {
            context.commit('setProjects', res.data.projects);
          });
      } catch (error) {
        alert('Cannot retrieve projects data:', error);
      }
    },
    async getTestimonials(context) {
      try {
        await axios.get('https://mohammad-mohamed.github.io/first-api/data/')
          .then(res => {
            context.commit('setTestimonials', res.data.testimonials);
          });
      } catch (error) {
        alert('Cannot retrieve testimonials data:', error);
      }
    },
    async getContact(context) {
      try {
        await axios.get('https://mohammad-mohamed.github.io/first-api/data/')
          .then(res => {
            context.commit('setContact', res.data.contact);
          });
      } catch (error) {
        alert('Cannot retrieve contact data:', error);
      }
    }
  },

  modules: {
  },
  getters: {
    filterData(){
      return Array.filter()
    }
  }
})
