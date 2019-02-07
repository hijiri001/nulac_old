<template>
  <section>
    <h1>Hello world.</h1>
    <div v-if="$store.state.auth.user">
      <nuxt-link to="/secret">secret</nuxt-link>
    </div>
    <div v-else>
      <nuxt-link to="/login">login</nuxt-link>
    </div>
  </section>
</template>