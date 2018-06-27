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
      meta: { title: 'Dashboard', icon: 'dashboard' },
    }],
  }, {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'demo' },
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
      path: 'test',
      name: 'Test',
      component: () => import('@/views/form/test'),
      meta: { title: 'Form', icon: 'form' },
      hidden: true,
    }, {
      path: 'error',
      component: () => import('@/components/layout/SubAppMain'),
      redirect: '/example/error/error401',
      name: 'Error',
      meta: { title: 'Error', icon: 'error' },
      children: [{
        path: 'error401',
        name: '401',
        component: () => import('@/views/errorpage/401'),
        meta: { title: '401', icon: 'error401' },
      }, {
        path: 'error404',
        name: '404',
        component: () => import('@/views/errorpage/404'),
        meta: { title: '404', icon: 'error404' },
      }],
    }],
  },
  { name: 'except', path: '*', redirect: '/404', hidden: true },
];

export const menuConfig = [
  {
    name: 'Dashboard',
    children: [{
      name: 'Dashboard',
    }],
  }, {
    name: 'Example',
    children: [{
      name: 'Chart',
    }, {
      name: 'Table',
    }, {
      name: 'Form',
    }, {
      name: 'Error',
      children: [{
        name: '401',
      }, {
        name: '404',
      }],
    }],
  },
];

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
});
