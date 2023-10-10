import { createRouter, createWebHistory } from 'vue-router'
import HotelList from './components/HotelList.vue'
import HotelDetail from './components/HotelDetails.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HotelList,
    },
    {
      path: '/hotel/:id',
      component: HotelDetail,
    },
  ],
})
