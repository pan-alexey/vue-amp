import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

interface ContextInterface {
  url: string;
  body: object;
}

const createApp = (context: ContextInterface) => {
  const router = createRouter()

  const app = new Vue({
    provide: {
      context: context.body
    },
    router,
    render: h => h(App)
  })

  return { app, router }
}

export default (context: ContextInterface) => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp(context)

    router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()

      if (!matchedComponents.length) {
        return reject(new Error())
      }

      resolve(app)
    }, reject)
  })
}
