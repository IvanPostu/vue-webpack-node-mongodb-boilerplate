import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const HomePage = () => import(/* webpackChunkName: "HomePage" */ './pages/HomePage/HomePage.vue')
const UserInfoPage = () =>
  import(/* webpackChunkName: "UserInfoPage" */ './pages/UserInfoPage/UserInfoPage.vue')

export default new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomePage
    },
    {
      name: 'user-info',
      path: '/user/:id',
      props: true,
      component: UserInfoPage
    }
  ],
  mode: 'history'
})
