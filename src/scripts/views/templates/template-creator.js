import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => {
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return `${description.slice(0, maxLength)}...`;
    }
    return description;
  };

  const maxDescriptionLength = 150;

  const truncatedDescription = truncateDescription(restaurant.description, maxDescriptionLength);
  return `
    <div class="restaurant-detail-container">
      <div class="image-container">
        <picture>
          <source media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_URL_SMALL}${
  restaurant.pictureId
}">
          <img class="restaurant-image lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${
  restaurant.pictureId
}" alt="${restaurant.name}">
        </picture>
      </div>
      <div class="text-container">
        <h2>${restaurant.name}</h2>
        <div class="restaurant-info">
          <p><strong>Rating:</strong> ${restaurant.rating}</p>
          <p><strong>Kategori:</strong> ${
  restaurant.categories
    ? restaurant.categories.map((category) => category.name).join(', ')
    : 'Data kategori tidak tersedia'
}</p>
          <p><strong>Deskripsi:</strong> 
            <span class="description-preview">${truncatedDescription}</span>
            <span class="full-description hidden">${restaurant.description}</span>
            <button class="view-more-btn">View More</button>
          </p>
          <p><strong>Alamat:</strong> ${restaurant.address}, ${restaurant.city}</p>
          <div>
            <div class="app-bar__menu">
              <button id="foodMenuBtn" class="active">Makanan</button>
              <button id="drinkMenuBtn">Minuman</button>
            </div>
            <div class="menu-list scrollable-menu">
              <div class="food-menu">
                <ul>
                ${
  restaurant.menus && restaurant.menus.foods
    ? restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')
    : 'Data makanan tidak tersedia'
}
                </ul>
              </div>
              <div class="drink-menu hidden">
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
        </div>
        <div id="likeButtonContainer"></div>
      </div>
    </div>

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
};

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
