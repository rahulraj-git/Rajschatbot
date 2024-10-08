export default defineNuxtConfig({
    css: [
      'bootstrap/dist/css/bootstrap.min.css'
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
        type: 'text/javascript'
      }
    ],
    build: {
      transpile: [],
    },
  })