<template>
  <div>
    <h3>3D Print Jobs</h3>
    <ul>
      <Job v-for="job in jobs" :job="job" :key="job.id" @delete="deleteJob" />
      <div>
        <label for="newName">Name</label>
        <input type="text" name="newName" v-model="newPrintForm.name">
      </div>
      <div>
        <label for="newQty">Quantity</label>
        <input type="text" name="newQty" v-model="newPrintForm.qty">
      </div>
      <div>
        <label for="newColor">Color</label>
        <input type="text" name="newColor" v-model="newPrintForm.color">
      </div>
      <button @click="addJob">Click to add generic job</button>
    </ul>
  </div>
</template>

<script>
import Job from '@/components/Job.vue'
import jobs from '@/assets/jobs.js'

export default {
  name: 'JobList',
  components: {
    Job
  },
  data() {
    return {
      jobs,
      newPrintForm: {
        name: '',
        qty: 0,
        color: '',
      }
    }
  },
  methods: {
    addJob() {
      this.jobs.push({
        ...this.newPrintForm,
        id: Date.now(),
        completed: 0,

      });

      this.newPrintForm = {
        name: '',
        qty: 0,
        color: '',
      }
    },

    deleteJob(jobId) {
      this.jobs = this.jobs.filter( job => {
        return job.id !== jobId;
      });
    }
  }
}
</script>

<style>
ul {
  list-style: none;
}

label {
  display: block;
}
</style>


