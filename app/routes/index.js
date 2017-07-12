import Ember from 'ember';

export default Ember.Route.extend({
  // We are sending multiple models as one promise using RSVP then ember waits till the promise is fulfilled
  model() {
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      reviews: this.store.findAll('review')
    });
  },
  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params); // A new record is created for the newly created property
      newRental.save(); // The new property is saved
      this.transitionTo('index'); // Then we return to the index page
    }
    
  }
})
