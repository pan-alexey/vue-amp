import Vue from 'vue'
import App from './App.vue'
import './styles/main.scss'

export const createApp = (context) => {
  const app = new Vue({
    data: {
      ...context
    },
    render: h => h(App)
  })

  return { app }
}
