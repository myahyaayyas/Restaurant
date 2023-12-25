import RestaurantDbSource from '../../data/restaurant-source';
import { createRestaurantTemplate } from '../templates/template-creator';

const DaftarRestaurant = {
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
        <h2 class="content__heading" style="font-weight: bold;">Daftar Restaurant</h2>
        <div id="restaurant" class="restaurant">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.listDaftarRestaurant();
    const restaurantContainer = document.querySelector('#restaurant');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantTemplate(restaurant);
    });
  },
};

export default DaftarRestaurant;
