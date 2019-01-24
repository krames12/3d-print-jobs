import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import router from "../router";
let firebase = () =>
  import("../firebase").then(fb => {
    firebase = fb.default;
  });

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
        .ref(`${user.user.uid}/jobs`)
        .push({
          ...formData,
          qty: parseInt(formData.qty, 10),
          id: Date.now(),
          qtyCompleted: 0,
          completed: false
        })
        .catch(error => {
          return {
            status: "error",
            message: "There was an issue adding a new job.",
            error: error
          };
        });
    },

    incrementQty({ user, jobs }, jobId) {
      firebase.database
        .ref(`${user.user.uid}/jobs`)
        .child(jobId)
        .set({
          qty: jobs[jobId].qty++,
          ...jobs[jobId]
        })
        .catch(error => {
          return {
            status: "error",
            message: "There was an issue adding to the job quantity.",
            error: error
          };
        });
    },

    decrementQty({ user, jobs }, jobId) {
      firebase.database
        .ref(`${user.user.uid}/jobs`)
        .child(jobId)
        .set({
          qty: jobs[jobId].qty > 0 ? jobs[jobId].qty-- : 0,
          ...jobs[jobId]
        })
        .catch(error => {
          return {
            status: "error",
            message: "There was an issue removing the job.",
            error: error
          };
        });
    },

    incrementQtyCompleted({ user, jobs }, jobId) {
      firebase.database
        .ref(`${user.user.uid}/jobs`)
        .child(jobId)
        .set({
          qtyCompleted:
            jobs[jobId].qtyCompleted < jobs[jobId].qty
              ? jobs[jobId].qtyCompleted++
              : jobs[jobId].qtyCompleted,
          completed: jobs[jobId].qtyCompleted === jobs[jobId].qty,
          ...jobs[jobId]
        })
        .catch(error => {
          return {
            status: "error",
            message: "There was an issue completing the job.",
            error: error
          };
        });
    },

    deleteJob({ user }, jobKey) {
      firebase.database
        .ref(`${user.user.uid}/jobs`)
        .child(jobKey)
        .remove()
        .catch(error => {
          return {
            status: "error",
            message: "There was an issue removing the job.",
            error: error
          };
        });
    },

    // Auth related mutations
    setUser(state, user) {
      state.user = user;
    },

    setVerifiedToken(state, verified) {
      state.verifiedToken = verified;
    }
  },

  actions: {
    // Job related actions
    fetchJobs({ commit }) {
      /* Questionable way to account for users
       *  already logged in on first page load
       */
      import("../firebase").then(fb => {
        firebase = fb.default;
        firebase.database
          .ref(`${this.state.user.user.uid}/jobs`)
          .on("value", snapshot => {
            commit("setJobs", snapshot.val());
          });
      });
    },

    addJob({ commit }, formData) {
      let status = commit("addJob", formData);
      commit("setUpdateMessage", status);
    },

    deleteJob({ commit }, jobKey) {
      let status = commit("deleteJob", jobKey);
      commit("setUpdateMessage", status);
    },

    incrementQty({ commit }, jobKey) {
      let status = commit("incrementQty", jobKey);
      commit("setUpdateMessage", status);
    },

    decrementQty({ commit }, jobKey) {
      let status = commit("decrementQty", jobKey);
      commit("setUpdateMessage", status);
    },

    incrementQtyCompleted({ commit }, jobKey) {
      let status = commit("incrementQtyCompleted", jobKey);
      commit("setUpdateMessage", status);
    },

    // Auth related actions
    createNewUser({ commit }, { email, password }) {
      firebase.auth
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user);
          router.push({ path: "/" });
        })
        .catch(error => {
          commit("setUpdateMessage", {
            status: "error",
            message: "There was an creating your account.",
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
            message: "There was an error logging in.",
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
            message: "There was an error logging out.",
            error: error
          });
        });
    },

    resetUserPassword({ commit }, { email }) {
      firebase.auth
        .sendPasswordResetEmail(email)
        .then(() => {
          commit("setUpdateMessage", {
            status: "success",
            message: "Password reset has been sent to your email"
          });
          router.push({ path: "/" });
        })
        .catch(error => {
          commit("setUpdateMessage", {
            status: "error",
            message: "There was an issue resetting your email.",
            error: error
          });
        });
    },

    verifyPasswordResetCode({ commit }, token) {
      if (token) {
        import("../firebase").then(fb => {
          firebase = fb.default;
          firebase.auth
            .verifyPasswordResetCode(token)
            .then(() => {
              commit("setVerifiedToken", true);
            })
            .catch(error => {
              commit("setVerifiedToken", false);
              commit("setUpdateMessage", {
                status: "error",
                message:
                  "The reset token provided is invalid. Please try resetting your password again.",
                error: error
              });
            });
        });
      } else {
        commit("setVerifiedToken", false);
      }
    },

    handlePasswordReset({ dispatch, commit }, { token, email }) {}
  }
});
