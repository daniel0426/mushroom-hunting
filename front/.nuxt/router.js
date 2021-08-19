import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _368c2558 = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _93aded68 = () => interopDefault(import('../pages/add.vue' /* webpackChunkName: "pages/add" */))
const _632b5bcb = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _425c3f86 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _368c2558,
    name: "About"
  }, {
    path: "/add",
    component: _93aded68,
    name: "add"
  }, {
    path: "/contact",
    component: _632b5bcb,
    name: "contact"
  }, {
    path: "/",
    component: _425c3f86,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
