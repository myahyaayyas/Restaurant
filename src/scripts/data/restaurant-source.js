import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async listDaftarRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReview(id, name, review) {
    const url = API_ENDPOINT.ADD_REVIEW;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, review }),
    };

    const response = await fetch(url, options);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantDbSource;
