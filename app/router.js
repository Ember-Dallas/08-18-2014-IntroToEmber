import Ember from 'ember';

var Router = Ember.Router.extend({
  location: IntroToEmberDemoENV.locationType
});

Router.map(function() {
  this.route('products');
  this.route('cart');
});

export default Router;
