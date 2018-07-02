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
    path: '/403',
    name: '403',
    component: () => import('@/views/errorpage/403'),
    hidden: true,
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/views/errorpage/500'),
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
      path: 'formSuccessMsg',
      name: 'FormSuccessMsg',
      component: () => import('@/views/tip/successMsg'),
      meta: { title: 'FormSuccessMsg' },
      hidden: true,
    }, {
      path: 'multiForm',
      name: 'MultiForm',
      component: () => import('@/views/form/multiForm'),
      meta: { title: 'MultiForm' },
    }, {
      path: 'formFailMsg',
      name: 'FormFailMsg',
      component: () => import('@/views/tip/failMsg'),
      meta: { title: 'FormFailMsg' },
      hidden: true,
    }, {
      path: 'desc',
      name: 'Desc',
      component: () => import('@/views/desc/index'),
      meta: { title: 'Desc' },
    }, {
      path: 'error',
      component: () => import('@/components/layout/SubAppMain'),
      redirect: '/example/error/error401',
      name: 'Error',
      meta: { title: 'Error', icon: 'error' },
      children: [{
        path: 'error403',
        name: '403',
        component: () => import('@/views/errorpage/403'),
        meta: { title: '403' },
      }, {
        path: 'error404',
        name: '404',
        component: () => import('@/views/errorpage/404'),
        meta: { title: '404' },
      }, {
        path: 'error500',
        name: '500',
        component: () => import('@/views/errorpage/500'),
        meta: { title: '500' },
      }],
    }, {
      path: 'msg',
      component: () => import('@/components/layout/SubAppMain'),
      redirect: '/example/tip/successMsg',
      name: 'Msg',
      meta: { title: 'Msg' },
      children: [{
        path: 'successMsg',
        name: 'SuccessMsg',
        component: () => import('@/views/tip/successMsg'),
        meta: { title: 'SuccessMsg' },
      }, {
        path: 'failMsg',
        name: 'FailMsg',
        component: () => import('@/views/tip/failMsg'),
        meta: { title: 'FailMsg' },
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
      name: 'MultiForm',
    }, {
      name: 'Desc',
    }, {
      name: 'Error',
      children: [{
        name: '403',
      }, {
        name: '404',
      }, {
        name: '500',
      }],
    }, {
      name: 'Msg',
      children: [{
        name: 'SuccessMsg',
      }, {
        name: 'FailMsg',
      }],
    }],
  },
];

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
});
