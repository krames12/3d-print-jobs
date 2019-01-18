import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import router from "../router";
import firebase from "../firebase";

Vue.use(Vuex);
Vue.use(firebase);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user: null,
    message: null,
    jobs: []
  },

  mutations: {
    setUpdateMessage(state, status) {
      state.message = status;
    },

    // Job related mutations
    setJobs(state, jobs) {
      state.jobs = jobs;
    },

    addJob({ user }, formData) {
      firebase.database
        .ref(`collections/${user.user.uid}/jobs`)
        .push({
          ...formData,
          qty: parseInt(formData.qty, 10),
          id: Date.now(),
          qtyCompleted: 0,
          completed: false
        })
        .catch(error => console.error("Firebase Error:", error));
    },

    incrementQty({ user, jobs }, jobId) {
      firebase.database
        .ref(`collections/${user.user.uid}/jobs`)
        .child(jobId)
        .set({
          qty: jobs[jobId].qty++,
          ...jobs[jobId]
        })
        .catch(error => console.error(`Firebase Error: ${error}`));
    },

    decrementQty({ user, jobs }, jobId) {
      firebase.database
        .ref(`collections/${user.user.uid}/jobs`)
        .child(jobId)
        .set({
          qty: jobs[jobId].qty > 0 ? jobs[jobId].qty-- : 0,
          ...jobs[jobId]
        })
        .catch(error => console.error(`Firebase Error: ${error}`));
    },

    incrementQtyCompleted({ user, jobs }, jobId) {
      firebase.database
        .ref(`collections/${user.user.uid}/jobs`)
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

    deleteJob({ user }, jobKey) {
      firebase.database
        .ref(`collections/${user.user.uid}/jobs`)
        .child(jobKey)
        .remove()
        .catch(error => {
          this.setUpdateMessage({
            status: "error",
            message: "There was an error resetting your email.",
            error: error
          });
        });
    },

    // Auth related mutations
    setUser(state, user) {
      state.user = user;
    }
  },

  actions: {
    // Job related actions
    fetchJobs({ commit }) {
      firebase.database
        .ref(`collections/${this.state.user.user.uid}/jobs`)
        .on("value", snapshot => {
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
        .then(user => commit("setUser", user))
        .catch(error => {
          commit("setUpdateMessage", {
            status: "error",
            message: "There was an error resetting your email.",
            error: error
          });
        });
    },

    loginUser({ commit }, { email, password }) {
      firebase.auth
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user);
          router.push({ path: "/" });
        })
        .catch(error => {
          commit("setUpdateMessage", {
            status: "error",
            message: "There was an error resetting your email.",
            error: error
          });
        });
    },

    logoutUser({ commit }) {
      firebase.auth
        .signOut()
        .then(() => {
          commit("setUser", null);
          router.push({ path: "/" });
        })
        .catch(error => {
          commit("setUpdateMessage", {
            status: "error",
            message: "There was an error resetting your email.",
            error: error
          });
        });
    },

    resetUserPassword({ commit }, email) {
      firebase.auth
        .sendPasswordResetEmail(email)
        .then(() =>
          commit("setUpdateMessage", {
            status: "success",
            message: "Password reset has been sent to your email"
          })
        )
        .catch(error => {
          commit("setUpdateMessage", {
            status: "error",
            message: "There was an error resetting your email.",
            error: error
          });
        });
    }
  }
});
