import RestaurantDbSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant-container"></div>
      <div id="likeButtonContainer"></div>
      <div class="add-review-form">
        <h2>Tambahkan Review</h2>
        <form id="addReviewForm">
          <div>
            <label for="reviewerName">Nama:</label>
            <input type="text" id="reviewerName" name="reviewerName" required>
          </div>
          <div>
            <label for="reviewDate">Tanggal:</label>
            <input type="date" id="reviewDate" name="reviewDate" required>
          </div>
          <div>
            <label for="reviewContent">Ulasan:</label>
            <textarea id="reviewContent" name="reviewContent" required></textarea>
          </div>
          <div>
            <button type="submit">Tambahkan Review</button>
          </div>
        </form>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });

    const skipLinkElem = document.querySelector('.skip-link');
    const mainContent = document.querySelector('#mainContent');

    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      mainContent.focus();
    });

    const addReviewForm = document.getElementById('addReviewForm');
    addReviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const reviewerName = document.getElementById('reviewerName').value;
      const reviewContent = document.getElementById('reviewContent').value;
      await RestaurantDbSource.addReview(restaurant.id, reviewerName, reviewContent);
      await this.afterRender();
    });

    const foodMenuBtn = document.getElementById('foodMenuBtn');
    const drinkMenuBtn = document.getElementById('drinkMenuBtn');
    const foodMenu = document.querySelector('.food-menu');
    const drinkMenu = document.querySelector('.drink-menu');

    foodMenuBtn.addEventListener('click', () => {
      foodMenu.classList.remove('hidden');
      drinkMenu.classList.add('hidden');
      foodMenuBtn.classList.add('active');
      drinkMenuBtn.classList.remove('active');
    });

    drinkMenuBtn.addEventListener('click', () => {
      drinkMenu.classList.remove('hidden');
      foodMenu.classList.add('hidden');
      drinkMenuBtn.classList.add('active');
      foodMenuBtn.classList.remove('active');
    });
  },
};

export default Detail;
