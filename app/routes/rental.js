import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
  }, // findRecord takes two arguments: The type of object ('rental'), and the object's specific id (params.rental_id).
 // After retrieving the specified rental, the route will render the rental template.
 actions: {
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
