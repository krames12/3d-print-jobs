import Vue from "vue";
import Vuex from "vuex";
import firebase from "../firebase";

Vue.use(Vuex);
Vue.use(firebase);

export default new Vuex.Store({
  state: {
    jobs: []
  },
  mutations: {
    setJobs(state, jobs) {
      state.jobs = jobs;
    },
    addJob({ jobs }, formData) {
      jobs.push({
        ...formData,
        qty: parseInt(formData.qty, 10),
        id: Date.now(),
        qtyCompleted: 0,
        completed: false
      });
    },

    incrementQty({ jobs }, jobId) {
      jobs.map(job => {
        if (jobId === job.id) {
          return {
            qty: job.qty++,
            ...job
          };
        } else {
          return job;
        }
      });
    },

    decrementQty({ jobs }, jobId) {
      jobs.map(job => {
        if (jobId === job.id && job.qty > 0) {
          return {
            qty: job.qty--,
            ...job
          };
        } else {
          return job;
        }
      });
    },

    incrementQtyCompleted({ jobs }, jobId) {
      jobs.map(job => {
        if (jobId === job.id && job.qtyCompleted < job.qty) {
          return {
            qtyCompleted: job.qtyCompleted++,
            completed: job.qty === job.qtyCompleted,
            ...job
          };
        } else {
          return job;
        }
      });
    },

    deleteJob({ jobs }, currentJob) {
      jobs.splice(jobs.indexOf(currentJob), 1);
    }
  },

  actions: {
    fetchJobs({ commit }) {
      firebase.database.ref("collections").on("value", snapshot => {
        commit("setJobs", snapshot.val().jobs);
      });
    },

    addJob({ commit }, formData) {
      console.log(formData);
    }
  }
});
