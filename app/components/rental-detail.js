import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rating:desc'], //This tells Ember that we'd like to sort our reviews by rating, in descending order
  sortedReviews: Ember.computed.sort('rental.reviews', 'sortBy'),
  actions: {
    delete(rental) {
      if (confirm('Are sure you want to delete this?'));
      this.sendAction('destroyRental', rental);
    },
    destroyReview(review) {
        this.sendAction('destroyReview', review);
    }
  }
});
