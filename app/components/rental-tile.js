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

  }
});
