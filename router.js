import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Products from './views/products.vue'
import Details from './views/details.vue'
import Petdetails from './views/petdetails.vue'
import Carts from './views/carts.vue'
import Login from './views/login.vue'
import Reg from './views/reg.vue'
import Cutepets from './views/cutepets.vue'
import Aboutpet from './views/aboutpet.vue'
import Aboutus from './views/aboutus.vue'
import News from './views/news.vue'
import Salecat from './views/salecat.vue'
import Article from './views/article.vue'
import NotFound from './views/notfound.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component:Index},
    {path: '/index',component:Index},
    {path: '/products/:kw',component:Products},
    {path: '/products',component:Products},
    {path: '/details/:pid',component:Details},
    {path: '/petdetails/:aid',component:Petdetails},
    {path: '/carts',component:Carts},
    {path: '/login',component:Login},
    {path: '/reg',component:Reg},
    {path: '/salecat',component:Salecat},
    {path: '/aboutpet',component:Aboutpet},
    {path: '/aboutus',component:Aboutus},
    {path: '/news',component:News},
    {path: '/cutepets',component:Cutepets},
    {path: '/article',component:Article},
    {path:'/*',component:NotFound}
  ]
})
