import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import PracticeVue from '@/components/PracticeVue'
// import PracticeVue2 from '@/components/PracticeVue2'
// import PunchingBag from '@/components/PunchingBag'
import PracticeVue3 from '@/components/PracticeVue3'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/',
    //   name: 'PracticeVue',
    //   component: PracticeVue
    // },
    // {
    //   path: '/',
    //   name: 'PracticeVue2',
    //   component: PracticeVue2
    // },
    // {
    //   path: '/',
    //   name: 'PunchingBag',
    //   component: PunchingBag
    // },
    {
      path: '/',
      name: 'PracticeVue3',
      component: PracticeVue3
    }
  ]
})
