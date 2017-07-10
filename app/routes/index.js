import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental'); //This.store refers to firebase,findAll method gets all the records for rental property
  },

  actions: {
    saveRental3(params) { // Received action from the component new-rental
      var newRental = this.store.createRecord('rental', params); // Data is sent to the firebase
      newRental.save(); // Data is saved into the firebase
      this.transitionTo('index'); // Then we return to the index home page and see our new rental in the list.
    },
    
  }
});
