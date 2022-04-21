import './main.styl'
const components = {}

export default {
  install: (app, options) => {
    for (const [name, component] of Object.entries(components)) {
      app.component(name, component)
    }
  }
}
