<template>
  <div>
    <h3>3D Print Jobs</h3>
    <ul>
      <Job v-for="job in jobs" :job="job" :key="job.id" />
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
    return { jobs }
  }
}
</script>

<style>
ul {
  list-style: none;
}
</style>


