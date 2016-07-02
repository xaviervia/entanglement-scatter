const serviceWorker = require('serviceworker!./app/index.js')

serviceWorker({
  scope: './'
}).then((registration) => {
  // At this point, registration has taken place.
  // The service worker will not handle requests until this page and any
  // other instances of this page (in other tabs, etc.) have been
  // closed/reloaded.
  console.log('registration successful')
  const worker = registration.active

  worker.postMessage('hello from the other side')
}).catch(() => {
  // Something went wrong during registration. The service-worker.js file
  // might be unavailable or contain a syntax error.
  console.log('registration failed')
})
