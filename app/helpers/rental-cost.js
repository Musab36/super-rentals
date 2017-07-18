import Ember from 'ember';

export function rentalCost(params) {
  var rentalPrice = params[0].get('cost'); // We pull the first item in the parameters (a rental),
                                          // grab its cost attribute and assign it to the variable rentalPrice.
  if(rentalPrice >= 150) {
    return '$$$$';        // Then, depending on how high rentalPrice is, we return anywhere from 4 to 1 $ symbols.
  }else if (rentalPrice >= 100) {
    return '$$$';
  }else if (rentalPrice >= 50) {
    return '$$';
  }else if (rentalPrice <= 49) {
    return '$';
  }
}

export default Ember.Helper.helper(rentalCost);
