import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/layout.vue';
import CourseInfo from '@/views/CourseInfo.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '/info',
          name: 'info',
          component: CourseInfo,
        },
      ],
    },
  ],
});
