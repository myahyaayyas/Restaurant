import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="hero-header">
        <div class="column">
          <h1>Enjoy Our Delicious Meal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nihil cumque
            voluptates obcaecati asperiores eaque rem, quos, consectetur nam iure voluptate cum
            dolores alias dolore commodi, quibusdam debitis optio officia?
          </p>
        </div>
      </div>
      <div class="content">
        <h2 class="content__heading" style="font-weight: bold;">Favorite Restaurant</h2>
        <div id="restaurant" class="restaurant"> 
        </div>
      </div>
  `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurant');
    restaurant.forEach((restaurants) => {
      restaurantContainer.innerHTML += createRestaurantTemplate(restaurants);
    });
  },
};

export default Like;
