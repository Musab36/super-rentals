import Ember from 'ember';

export default Ember.Component.extend({
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
