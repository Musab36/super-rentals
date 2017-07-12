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
      var review_deletions = rental.get('reviews').map(function(review) { // Deleting reviews one by one
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletions).then(function() { // Ember waits till all the reviews are deleted
        return rental.destroyRecord(); // After all the reviews are deleted, the rental is deleted
      });
      this.transitionTo('index'); // Then we go back to the index page
    },
    destroyReview(review) {
      review.destroyRecord();
      this.transitionTo('index');
    },
   saveReview(params) {
     var newReview = this.store.createRecord('review', params); //We idnetify the review object
     var rental = params.rental; // and rental object it will belong to
     rental.get('reviews').addObject(newReview);//Then, we add the new review to the reviews attribute of our current rental using the .addObject(); method.
     newReview.save().then(function() { //we save the new review and specify to only save the rental after the review has been successfully saved by using .then();
    return rental.save();
     });
     this.transitionTo('rental', rental);
   },

 }
});
