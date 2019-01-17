import Vue from "vue";
import Vuex from "vuex";
import firebase from "../firebase";

Vue.use(Vuex);
Vue.use(firebase);

let jobsRef = firebase.database.ref("collections/jobs");

export default new Vuex.Store({
  state: {
    jobs: []
  },
  mutations: {
    setJobs(state, jobs) {
      state.jobs = jobs;
    },
    addJob({ jobs }, formData) {
      jobsRef
        .push({
          ...formData,
          qty: parseInt(formData.qty, 10),
          id: Date.now(),
          qtyCompleted: 0,
          completed: false
        })
        .then(data => console.log("bill added", data))
        .catch(error => console.error("Firebase Error:", error));
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

    deleteJob({ jobs }, jobKey) {
      jobsRef
        .child(jobKey)
        .remove()
        .then(() => console.log(`Successfully removed ${jobKey}`))
        .catch(error => console.error(`Firebase Error: ${error}`));
    }
  },

  actions: {
    fetchJobs({ commit }) {
      jobsRef.on("value", snapshot => {
        commit("setJobs", snapshot.val());
      });
    },

    addJob({ commit }, formData) {
      commit("addJob", formData);
    },

    deleteJob({ commit }, jobKey) {
      commit("deleteJob", jobKey);
    },

    incrementQty({ commit }, jobKey) {},

    decrementQty({ commit }) {},

    incrementQtyCompleted({ commit }) {}
  }
});
