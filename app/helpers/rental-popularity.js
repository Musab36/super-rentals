import Ember from 'ember';

export function rentalPopularity(params) {
  var rental = params[0]; // Ae’re grabbing the first item from the parameters (a rental object)
                          // And assigning it the variable name rental.
  if(rental.get('reviews').get('length') >= 5) { // Then, we check if the number of reviews for the rental is five or more.
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  } // If the length is equlas or greater than 5, we display a Bootstrap glyphicon. If not, nothing happens.
}

export default Ember.Helper.helper(rentalPopularity);
