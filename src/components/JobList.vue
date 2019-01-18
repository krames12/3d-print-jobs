<template>
  <div class="container mx-auto">

    <div v-if="user">
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
        <Job
          v-for="(job, index) in jobs"
          :job="job" :key="index" :keyProp="index"
        />
      </ul>
    </div>
    <div v-else>
      <p>Please log in to see your jobs listing.</p>
    </div>
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

