<template>
  <div class="container mx-auto">
    <ul class="list-reset my-5">
      <li class="flex justify-between my-5">
        <p class="self-center w-1/5"><strong>Name</strong></p>
        <p class="self-center w-1/5"><strong>Color</strong></p>
        <p class="self-center text-center w-1/5"><strong>Quantity</strong></p>
        <p class="self-center text-center w-1/5"><strong>Completed</strong></p>
        <p class="self-center w-1/5 text-right">
          <strong>Remove</strong>
        </p>
      </li>
      <Job
        v-for="(job, index) in jobs"
        :job="job" :key="index" :keyProp="index"
      />
    </ul>
    <h3 class="text-center py-5" v-if="jobs == null">No jobs to display. Create one below!</h3>
  </div>
</template>

<script>
import Job from '@/components/Job.vue'

export default {
  name: 'JobList',
  components: {
    Job,
  },

  computed: {
    jobs() {
      return this.$store.state.jobs
    },
  },
  mounted: function() {
    this.$store.dispatch('fetchJobs');
  }
}
</script>

