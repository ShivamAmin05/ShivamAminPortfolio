import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { MotionPlugin } from '@vueuse/motion'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})
createApp(App).use(vuetify).use(MotionPlugin).mount('#app')
