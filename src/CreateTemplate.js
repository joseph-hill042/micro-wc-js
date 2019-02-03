export class CreateTemplate {
  static fetchTemplate(route, bindings) {
    return fetch(`/src/views/${routes[route]}`)
      .then(res => {
        return res.text()
      })
      .then(template => {
        const html = _.template(template)
        contentDiv.innerHTML = html(bindings)
      })
  }
}
