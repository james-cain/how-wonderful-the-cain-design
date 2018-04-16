import router from '@/router';
import store from '@/store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
  showSpinner: false,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  const token = localStorage.getItem('template_token');
  let userinfo;
  let roles;
  try {
    userinfo = JSON.parse(localStorage.getItem('template_userinfo'));
  } catch (e) {
    console.log(e);
    userinfo = {};
  }
  try {
    roles = JSON.parse(localStorage.getItem('template_roles'));
  } catch (e) {
    console.log(e);
    roles = [];
  }
  store.commit('SETTOKEN', token);
  store.commit('SETUSERINFO', userinfo);
  store.commit('SETROLES', roles);
  if (store.getters.token) {
    if (store.getters.roles.indexOf(to.name) > -1 || store.getters.roles[0] === 'init') {
      next();
    } else {
      next({ path: '/401', replace: true });
    }
  } else if (to.path === '/login') {
    next();
  } else {
    next({ path: '/login', replace: true });
  }
});

router.afterEach(() => {
  NProgress.done();
});
