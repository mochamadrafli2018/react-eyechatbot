import { lazy } from 'react';

const routes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('../main-components/MainPage')),
  },
  {
    path: '/pagenotfound',
    exact: true,
    component: lazy(() => import('../main-components/PageNotFound')),
  },
]
  
export default routes