import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Category from '../components/Category'
import Search from '../components/Search'

Vue.use(Router);

function checkAuth(to, from, next) {
  if (from.path === '/admin/login') {
    // if coming from login page skip continue automatically to avoid loop
    next();
  }
  Backendless.UserService.getCurrentUser().then(() => {
    next();
  }).catch(() => {
    next({path: '/admin/login'});
  });
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category/:slug',
      name: 'category',
      component: Category,
      props: true
    },
    {
      path: '/search/:query',
      name: 'search',
      component: Search,
      props: true
    },
    /*{
      path: '/admin',
      component: AdminPage,
      name: 'admin',
      children: [
        {
          path: 'login',
          component: LoginPage
        },
        {
          path: 'products',
          component: ProductListPage,
          name: 'admin-products-list',
          beforeEnter: checkAuth,
        },
      ]
    }*/
  ]
})
