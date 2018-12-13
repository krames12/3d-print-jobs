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
      <Job
        v-for="job in jobs"
        :job="job" :key="job.id"
      />
    </ul>
  </div>
</template>

<script>
import Job from '@/components/Job.vue'
import NewJobForm from '@/components/NewJobForm.vue'

export default {
  name: 'JobList',
  components: {
    Job,
    NewJobForm
  },

  computed: {
    jobs() {
      return this.$store.state.jobs
    },
  }
}
</script>

