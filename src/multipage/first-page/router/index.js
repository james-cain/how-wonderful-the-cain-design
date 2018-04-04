import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/layout/Layout';

Vue.use(Router);

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/multipage/first-page/views/dashboard/index'),
    }],
    meta: { title: 'Dashboard' },
  }, {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    children: [{
      path: 'table',
      name: 'Table',
      component: () => import('@/multipage/first-page/views/table/index'),
      meta: { title: 'Table' },
    }, {
      path: 'form',
      name: 'Form',
      component: () => import('@/multipage/first-page/views/form/index'),
      meta: { title: 'Form' },
    }],
  },
];

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
});
