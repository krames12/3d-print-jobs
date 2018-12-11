<template>
  <div class="container mx-auto">
    <h3>3D Print Jobs</h3>
    <ul class="list-reset my-5">
      <li class="flex justify-between my-5">
        <p class="self-center w-1/5"><strong>Name</strong></p>
        <p class="self-center w-1/5"><strong>Color</strong></p>
        <p class="self-center w-1/5"><strong>Quantity</strong></p>
        <p class="self-center w-1/5"><strong>Completed</strong></p>
        <p class="self-center w-1/5 text-right">
          <strong>Remove</strong>
        </p>
      </li>
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

