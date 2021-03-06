import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/search.vue'),
    children: [{ path: '', component: () => import('pages/IndexNew.vue') },
                { path: '/test', component: () => import('pages/Test.vue') },
                { path: '/profile/:id', name: 'profile', component: () => import('pages/profile.vue') }
              ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
