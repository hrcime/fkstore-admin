import Dashboard from '../pages/Dashboard'
import User from '../pages/User';

export default [
  {
    exact: true,
    path: '/',
    component: Dashboard
  },
  {
    path: '/user',
    component: User
  },
];