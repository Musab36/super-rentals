import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false, // Update form set to false
  actions: {
    updateRentalForm() { // Update action
      this.set('updateRentalForm', true); // Update form is set to true after clicking update
    },
    update(rental) { // Update action  receives the rental as an argument collecing inputted objects data
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
      };
      this.set('updateRentalForm', false); // UPdate form is set back to false after clicking save
      this.sendAction('update', rental, params); // The component sends the action with the params to the parent component rental-tile
    }
  }
});
