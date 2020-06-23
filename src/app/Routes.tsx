import Home from './views/Home';
import Pokemon from './views/Pokemon';

const Routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/page/:id',
    component: Home,
    exact: true,
  },
  {
    path: '/pokemon/:id',
    component: Pokemon,
  },
];

export default Routes;
