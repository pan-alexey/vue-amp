import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

Vue.component(
  'svg-icon', () => import('@/global/SvgIcon.vue')
)

interface ContextInterface {
  url: string;
  body: object;
}

const createApp = (context: ContextInterface) => {
  const router = createRouter()

  Vue.prototype.$server = context.body

  const app = new Vue({
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
