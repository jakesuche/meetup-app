import Vue from 'vue'
import Router  from 'vue-router'


import PageHome from '@/pages/pageHome'
import PageMeetup from '@/pages/pageMeetupDetails'
import pageMeetupFind  from '@/pages/pageMeetupFind'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/",
      name: "pagehome",
      component: PageHome,
    },
    {
      path:"/find",
      name:'PageMeetupFine',
      component: pageMeetupFind
    },
    {
      path: '/meetup/:id/',
      name: "pageMeetupDetail",
      component: PageMeetup,
    },
    
  ],
  mode:'history'
});

export default router