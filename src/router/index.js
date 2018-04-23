import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/layout/Layout';

Vue.use(Router);

export const constantRouterMap = [
  {
    path: '/',
    redirect: '/login',
    hidden: true,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
    hidden: true,
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/errorpage/404'),
    hidden: true,
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/errorpage/401'),
    hidden: true,
  },
  {
    path: '/dashboard',
    component: Layout,
    name: 'Dashboard',
    children: [{
      path: 'index',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'example' },
    }],
  }, {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [{
      path: 'chart',
      name: 'Chart',
      component: () => import('@/views/charts/index'),
      meta: { title: 'Chart', icon: 'chart' },
    }, {
      path: 'table',
      name: 'Table',
      component: () => import('@/views/table/index'),
      meta: { title: 'Table', icon: 'table' },
    }, {
      path: 'form',
      name: 'Form',
      component: () => import('@/views/form/index'),
      meta: { title: 'Form', icon: 'form' },
    }, {
      path: 'SubExample',
      component: () => import('@/components/layout/SubAppMain'),
      redirect: '/example/SubExample/subtable',
      name: 'SubExample',
      meta: { title: 'SubExample', icon: 'example' },
      children: [{
        path: 'subtable',
        name: 'SubTable',
        component: () => import('@/views/table/index'),
        meta: { title: 'SubTable' },
      }],
    }],
  },
  { name: 'except', path: '*', redirect: '/404', hidden: true },
];

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
});
