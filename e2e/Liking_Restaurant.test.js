Feature('Liking and Unliking Restaurants');

Scenario('liking and unliking one restaurant', async ({ I }) => {
  I.amOnPage('/#/like');

  I.waitForElement('#restaurant', 10);

  I.dontSeeElement('#restaurant .restaurant-item');

  I.amOnPage('/');

  I.waitForElement('#restaurant', 10);

  I.seeElement('#restaurant .restaurant-item');

  I.click(locate('#restaurant .restaurant-item').first());

  I.waitForElement('#likeButton', 5);

  I.click('#likeButton');

  I.waitForElement('#likedButton', 5);

  I.seeElement('#likedButton');

  I.amOnPage('/#/like');

  I.waitForElement('#restaurant', 10);

  I.seeElement('#restaurant .restaurant-item');

  I.click('#likedButton');

  I.waitForElement('#likeButton', 5);

  I.seeElement('#likeButton');

  I.amOnPage('/');

  I.waitForElement('#restaurant', 10);

  I.dontSeeElement('#restaurant .restaurant-item');
});
