/* eslint-disable no-undef */
Feature('Liking and Unliking Restaurants');

Scenario('liking and unliking one restaurant', async ({ I }) => {
  I.amOnPage('/#/like');

  I.waitForElement('#restaurant', 10);

  I.dontSeeElement('#restaurant .restaurant-item');

  I.amOnPage('/');
  I.wait(5);

  I.seeElement('#restaurant .restaurant-item');

  I.click(locate('#restaurant .restaurant-item').first());
  I.wait(3);
  I.seeElement('[aria-label="Like this restaurant"]');
  I.wait(3);
  I.click('[aria-label="Like this restaurant"]');

  I.wait(3);

  I.seeElement('[aria-label="Unlike this restaurant"]');

  I.amOnPage('/#/like');

  I.waitForElement('#restaurant', 10);

  I.seeElement('#restaurant .restaurant-item');
  I.click(locate('#restaurant .restaurant-item').first());
  I.wait(3);
  I.seeElement('[aria-label="Unlike this restaurant"]');
  I.wait(3);
  I.click('[aria-label="Unlike this restaurant"]');

  I.wait(3);

  I.waitForElement('#restaurant', 10);

  I.dontSeeElement('#restaurant .restaurant-item');
});
