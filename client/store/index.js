export const actions = {
  // SSR が走るタイミングでログインチェック
  async nuxtServerInit ({ commit }, { app }) {
    await app.$axios.$get('/user')
      .then(user => commit('auth/setUser', user))
      .catch(() => commit('auth/setUser', null))
  }
}
