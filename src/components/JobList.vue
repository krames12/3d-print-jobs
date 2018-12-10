<template>
  <div>
    <h3>3D Print Jobs</h3>
    <ul>
      <Job v-for="job in jobs" :job="job" :key="job.id" @delete="deleteJob" />
    </ul>
    <NewJobForm @add-new-job="addJob" />
  </div>
</template>

<script>
import Job from '@/components/Job.vue'
import NewJobForm from '@/components/NewJobForm.vue'
import jobs from '@/assets/jobs.js'

export default {
  name: 'JobList',
  components: {
    Job,
    NewJobForm
  },
  data() {
    return {
      jobs,
    }
  },
  methods: {
    addJob(formData) {
      this.jobs.push({
        ...formData,
        id: Date.now(),
        completed: 0,

      });
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
  padding-left: 0;
}

label {
  display: block;
}
</style>


