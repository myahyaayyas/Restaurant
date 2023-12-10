/* eslint-disable no-undef */
Feature('Restaurant Reviews');

Scenario('Add a Review to a Restaurant', ({ I }) => {
  // Open the restaurant detail page
  I.amOnPage('/#/detail/rqdv5juczeskfw1e867'); // replace 'restaurant_id' with the actual ID

  // Add a review using the form
  I.fillField('#reviewerName', 'John Doe');
  I.fillField('#reviewDate', '2023-01-01'); // replace with the desired date
  I.fillField('#reviewContent', 'This restaurant is amazing!');
  I.click('Tambahkan Review');

  // Check if the review is added successfully
  I.see('John Doe');
  I.see('This restaurant is amazing!');
});

// Add more scenarios for other review-related features
