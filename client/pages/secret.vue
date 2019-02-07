<template>
  <section>
    <h1>Secret</h1>
    <p v-if="message">{{ message.text }}</p>
    <nuxt-link to="/">index</nuxt-link>
    <hr />
    <form @submit.prevent="logout">
      <button type="submit">logout</button>
    </form>
  </section>
</template>

<script>
export default {
  middleware: 'auth',
  data () {
    return {
      message: null
    }
  },
  async asyncData ({ app }) {
    const message = await app.$axios.$get('/message')
    return { message }
  },
  methods: {
    async logout () {
      await this.$store.dispatch('auth/logout')
      this.$router.push('/')
    }
  }
}
</script>
