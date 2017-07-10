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
   update(rental, params) { // Update action received all the way from the child component update-rental
     Object.keys(params).forEach(function(key) { // For each key in the params
       if(params[key]!==undefined) { // If it is NOT undefined
         rental.set(key, params[key]); //Take the rental and set the property that matches the current key, to the value of the current key
       }
     });
     rental.save(); // After looping through all of the keys, save the rental,
     this.transitionTo('index'); // We return back the index home page to display the updates
   },
    destroyRental(rental) { // The action sent by the component rental-tile to delete rentals: Data down, actions up
      rental.destroyRecord();
      this.transitionTo('index'); // Returning to the index page after deleting a rental
    }
  }
});
