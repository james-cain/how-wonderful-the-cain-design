import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/layout/Layout';

Vue.use(Router);

export const constantRouterMap = [
  {
    path: '/',
    hidden: true,
    children: [{
      path: 'firstPage',
      component: Layout,
      name: 'firstPage',
    }],
  },
  {
    path: '/dashboard',
    component: Layout,
    name: 'Dashboard',
    children: [{
      path: 'index',
      name: 'Dashboard',
      component: () => import('@/multipage/first-page/views/dashboard/index'),
      meta: { title: 'Dashboard' },
    }],
  }, {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example' },
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
