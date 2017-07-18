import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false, // Form display is set to false and hidden
  actions: { // Action button
    reviewFormShow() { // Action button name
      this.set('addNewReview', true); // When the action button is clicked, the form is set to true displaying
    },
    saveReview() { // Save botton
     var params = { // We are getting the input details of the reviews
       author: this.get('author'),
       rating: parseInt(this.get('rating')),
       content: this.get('content'),
       rental: this.get('rental') // We are providing the reviews access to the rental object
     };
     this.set('addNewReview', false); // When save button is clicked, the form is set back to false
     this.sendAction('saveReview', params); // The action is sent to the template of the index
   }
  }
});
