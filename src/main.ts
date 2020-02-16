import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

Vue.component(
  'svg-icon', () => import('@/global/SvgIcon.vue')
)

const createApp = (data: any) => {
  const router = createRouter()

  Vue.prototype.$server = data

  const app = new Vue({
    router,
    render: h => h(App)
  })

  return { app, router }
}

export default (context: any) => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp(context)

    console.log(context)

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
