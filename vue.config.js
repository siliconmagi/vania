module.exports = {
  title: 'vania',
  resolve: true,
  vendor: ['vue', 'vuex', 'vue-router', 'vue-ga', 'lodash/debounce'],
  production: {
    gzip: true,
    // or with options
    // gzip: {}
  }
}
