import Ember from 'ember';

export default Ember.Component.extend({
  heading: Ember.computed('review.author', 'review.rating', function() { //we're declaring a new computed property called heading
    return this.get('review.author') + '-' + this.get('review.rating');
  }), //and instructing Ember to combine both the author and rating properties when heading is called.

  actions: {
    delete(review) {
      if (confirm('Are you sure you want to delete this review?')) {
      this.sendAction('destroyReview', review);
    }
  }
}
});
