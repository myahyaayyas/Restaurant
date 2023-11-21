import DaftarRestaurant from '../views/pages/daftar-restaurant';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': DaftarRestaurant,
  '/daftar-restaurant': DaftarRestaurant,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
