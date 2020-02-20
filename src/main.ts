import Vue from 'vue'
import App from './App.vue'


Vue.component(
  'svg-icon', () => import('@/global/svg-icon.vue')
)

interface ContextInterface {
  url: string;
  body: object;
}

const createApp = (context: ContextInterface) => {

  const contextBody = context.body

  const foo = [
    { name: 'A' },
    { name: 'A' },
    { name: 'B' },
    { name: 'B',
      child:[
        { name: 'C' },
        { name: 'C' },
        { name: 'D' },
        { name: 'B', child: [
          { name: 'A' },
          { name: 'A' },
          { name: 'B' }
        ] }
      ] },
    { name: 'C' },
    { name: 'C' }
  ]

  const app = new Vue({
    provide: {
      foo,
      contextBody
    },
    render: h => h(App)
  })

  return app
}

export default (context: ContextInterface) => {
  return createApp(context)
}
