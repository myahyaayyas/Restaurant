import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <h2>${restaurant.name}</h2>
    <picture>
      <source media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_URL_SMALL}${
  restaurant.pictureId
}">
      <img class="restaurant-image lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${
  restaurant.pictureId
}" alt="${restaurant.name}">
    </picture>
    <div class="restaurant-info">
      <p><strong>Rating:</strong> ${restaurant.rating}</p>
      <p><strong>Kategori:</strong> ${
  restaurant.categories
    ? restaurant.categories.map((category) => category.name).join(', ')
    : 'Data kategori tidak tersedia'
}</p>
      <p><strong>Deskripsi:</strong> ${restaurant.description}</p>
      <p><strong>Kota:</strong> ${restaurant.city}</p>
      <p><strong>Alamat:</strong> ${restaurant.address}</p>
      <div class="menu-container">
        <div class="food-menu">
            <h3>Menu Makanan</h3>
            <ul>
                ${
  restaurant.menus && restaurant.menus.foods
    ? restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')
    : 'Data makanan tidak tersedia'
}
            </ul>
        </div>
        <div class="drink-menu">
            <h3>Menu Minuman</h3>
            <ul>
                ${
  restaurant.menus && restaurant.menus.drinks
    ? restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')
    : 'Data minuman tidak tersedia'
}
            </ul>
        </div>
      </div>
    </div>
    <div id="likeButtonContainer"></div>
    <h2>Ulasan Pelanggan:</h2>
    <div class="review-card">
    ${
  restaurant.customerReviews && restaurant.customerReviews.length > 0
    ? restaurant.customerReviews
      .map(
        (review) => `
              <div id="customerReview" class="review-item">
                <p><strong>Nama:</strong> ${review.name}</p>
                <p><strong>Ulasan:</strong> ${review.review}</p>
                <p><strong>Tanggal:</strong> ${review.date}</p>
              </div>
            `,
      )
      .join('')
    : 'Tidak ada ulasan'
}
    </div>
`;

const createRestaurantTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <picture>
        <source media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_URL_SMALL}${restaurant.pictureId}">
        <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
           data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}">
      </picture>
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.city}</p>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="Like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="Unlike this restaurant" id="likedButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
