import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/index.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/views/detail.vue')
    },
    {
      path: '/classify',
      name: 'classify',
      component: () => import('@/views/classify.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('@/views/message.vue')
    }
  ],
  router = new VueRouter({
    routes,
    mode: 'history',
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {
      // return 期望滚动到哪个的位置
      return { y: 500, x: 0 };
    }
  });

export default router;
