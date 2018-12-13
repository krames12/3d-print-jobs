import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jobs: [
      {
        id: 1,
        name: "dragon",
        qty: 3,
        qtyCompleted: 2,
        color: "red",
        completed: false
      },
      {
        id: 2,
        name: "pi case",
        qty: 8,
        qtyCompleted: 4,
        color: "black",
        completed: false
      },
      {
        id: 3,
        name: "mario",
        qty: 1,
        qtyCompleted: 0,
        color: "grey",
        completed: false
      }
    ]
  },
  mutations: {
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
  }
});
