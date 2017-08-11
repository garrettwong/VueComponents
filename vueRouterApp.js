// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter and then call `Vue.use(VueRouter)`.
let divRouterApp = '#routerApp';

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>asdf</div>' }
const Bar = { template: '<div>barsdf</div>' }
const Other = { template: '<div><h4>Im not</h4><hr /><p>Hello</p><i>Wow</i></div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/other', component: Other }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount(divRouterApp)

// Now the app has started!