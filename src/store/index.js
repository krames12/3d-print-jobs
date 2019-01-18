import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import firebase from "../firebase";

Vue.use(Vuex);
Vue.use(firebase);

let jobsRef = firebase.database.ref("collections/jobs");

export default new Vuex.Store({
  state: {
    user: null,
    jobs: []
  },
  mutations: {
    // Job related mutations
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
        .catch(error => console.error("Firebase Error:", error));
    },

    incrementQty({ jobs }, jobId) {
      jobsRef
        .child(jobId)
        .set({
          qty: jobs[jobId].qty++,
          ...jobs[jobId]
        })
        .catch(error => console.error(`Firebase Error: ${error}`));
    },

    decrementQty({ jobs }, jobId) {
      jobsRef
        .child(jobId)
        .set({
          qty: jobs[jobId].qty > 0 ? jobs[jobId].qty-- : 0,
          ...jobs[jobId]
        })
        .catch(error => console.error(`Firebase Error: ${error}`));
    },

    incrementQtyCompleted({ jobs }, jobId) {
      jobsRef
        .child(jobId)
        .set({
          qtyCompleted:
            jobs[jobId].qtyCompleted < jobs[jobId].qty
              ? jobs[jobId].qtyCompleted++
              : jobs[jobId].qtyCompleted,
          completed: jobs[jobId].qtyCompleted === jobs[jobId].qty,
          ...jobs[jobId]
        })
        .catch(error => console.error(`Firebase Error: ${error}`));
    },

    deleteJob({ jobs }, jobKey) {
      jobsRef
        .child(jobKey)
        .remove()
        .catch(error => console.error(`Firebase Error: ${error}`));
    },

    // Auth related mutations
    setUser(state, user) {
      state.user = user;
    }
  },

  actions: {
    // Job related actions
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

    incrementQty({ commit }, jobKey) {
      commit("incrementQty", jobKey);
    },

    decrementQty({ commit }, jobKey) {
      commit("decrementQty", jobKey);
    },

    incrementQtyCompleted({ commit }, jobKey) {
      commit("incrementQtyCompleted", jobKey);
    },

    // Auth related actions
    createNewUser({ commit }, { email, password }) {
      firebase.auth
        .createUserWithEmailAndPassword(email, password)
        .then(user => console.log(`User: ${user}`))
        .catch(error => console.error(`Firebase Error: ${error}`));
    },

    loginUser({ commit }, { email, password }) {
      firebase.auth
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user);
          router.push({ path: "/" });
        })
        .catch(error => console.error(`Firebase Error: ${error}`));
    },

    logoutUser({ commit }) {
      firebase.auth
        .signOut()
        .then(commit("setUser", null))
        .catch(error => console.error(`Firebase Error: ${error}`));
    }
  }
});
