import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useMainStore } from '@/stores/main'
import { darkModeKey, styleKey } from '@/config.js'

import './css/main.css'

/* Init Pinia */
const pinia = createPinia()

/* Create Vue app */
createApp(App).use(router).use(pinia).mount('#app')

/* Init Pinia main store */
const mainStore = useMainStore(pinia)

/* Fetch sample data */
mainStore.fetch('clients')
mainStore.fetch('history')

/* App style */
mainStore.setStyle(localStorage[styleKey] ?? 'basic')

/* Dark mode */
if ((!localStorage[darkModeKey] && window.matchMedia('(prefers-color-scheme: dark)').matches) || localStorage[darkModeKey] === '1') {
  mainStore.setDarkMode(true)
}

/* Default title tag */
const defaultDocumentTitle = ''

/* Collapse mobile aside menu on route change */
router.beforeEach(() => {
  mainStore.asideMobileToggle(false)
  mainStore.asideLgToggle(false)
})

router.afterEach(to => {
  /* Set document title from route meta */
  document.title = to.meta?.title
    ? `Pafcpic`
    : defaultDocumentTitle

  /* Full screen mode */
  mainStore.fullScreenToggle(!!to.meta.fullScreen)
})
