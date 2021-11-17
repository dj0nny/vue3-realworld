/* eslint-disable no-useless-return */
import { createRouter, createWebHashHistory } from 'vue-router';
import axiosInstance from '../api';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      auth: false,
    },
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/Register.vue'),
    meta: {
      auth: false,
    },
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('../views/Login.vue'),
    meta: {
      auth: false,
    },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/CreateArticle.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/@:user',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/article/:slug',
    name: 'ArticleDetails',
    component: () => import('../views/ArticleDetails.vue'),
    meta: {
      auth: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((res) => res.meta.auth)) {
    if (localStorage.getItem('token')) {
      axiosInstance.get('/user', {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      }).then(() => {
        next();
      }).catch(() => {
        next({ name: 'SignIn' });
      });
    } else {
      next({ name: 'SignIn' });
    }
  } else {
    next();
  }
});

export default router;
