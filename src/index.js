_.templateSettings = {
  interpolate: /{{(.+?)}}/g,
}
const contentDiv = document.getElementById('app')

const routes = {
  '/': 'home.html',
  '/about': 'about.html',
}

const fetchTemplate = (route, bindings) => {
  return fetch(`/src/views/${routes[route]}`)
    .then(res => {
      return res.text()
    })
    .then(template => {
      const html = _.template(template)
      contentDiv.innerHTML = html(bindings)
    })
}

// window.onpopstate = () => {
//   const path = window.location.pathname.substring(
//     window.location.pathname.lastIndexOf('/')
//   )
//   console.log('Pop state', path)
//   fetchTemplate(path)
// }

const onNavigation = (route, bindings) => {
  window.history.pushState({}, `${window.location.origin}${route}`)
  console.log('Navigation', route)
  fetchTemplate(route, bindings)
}
