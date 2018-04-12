import router from '@/router';
import store from '@/store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
  showSpinner: false,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (store.getters.roles.indexOf(to.name) > -1 || store.getters.roles[0] === 'init') {
    next();
  } else {
    next({ path: '/401', replace: true });
  }
});

router.afterEach(() => {
  NProgress.done();
});
