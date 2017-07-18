import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false, // Form display is set to false
  actions: {
    rentalFormShow() { // Form button function
      this.set('addNewRental', true); // Form display is set to true after clicking the button
    },

    saveRental1() { // Our submit button
      var params = { // A var with the objects to be collected from the user corresponding to the thier inputs
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
        cost: parseInt(this.get('const')),
        latitude: this.get('latitude'),
        lpngitude: this.get('longitude')
      };
      this.set('addNewRental', false); // After clicking save, the form display is set back to false
      this.sendAction('saveRental2', params); // The component sends action through the template into the route handler sending with it the params
    }
  }
});
