import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import BaseCard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseField from './components/ui/BaseField.vue'

const pinia = createPinia()
const app = createApp(App)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-field', BaseField)

app.use(pinia)
app.mount('#app')
