import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false, // The image is set to false and only a button is seen
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true); //When the button is clicked, the image is set to true
    },
    imageHide: function() {
      this.set('isImageShowing', false); //When the image is clicked, it's set back false again
    },
    update(rental, params) { // Parent component receives the action from the child component and passes it own
      this.sendAction('update', rental, params);
    },
    delete(rental) { // Delete rental
      if (confirm('Are you sure you want to delete this rental?')) { // Confirmation popup
        this.sendAction('destroyRental', rental); //Sending action destroyRental trough the template into the Route handler
      }
    }
  }
});
