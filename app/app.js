import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import currencyHelper from './helpers/currency';

Ember.Handlebars.registerBoundHelper( 'currency', currencyHelper );

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'intro-to-ember-demo', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'intro-to-ember-demo');

export default App;
