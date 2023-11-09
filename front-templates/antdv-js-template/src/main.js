import '@/styles/style.scss'
import { createApp } from 'vue'
import App from '@/App.vue'
// 引入andv icon
import * as Icons from '@ant-design/icons-vue'
import Icon from '@/components/Icon/Icon.vue'
import router from '@/router'
import pinia from '@/stores/index'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.component(Icon)
// 注册全局图标
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key])
})

app.mount('#app')
