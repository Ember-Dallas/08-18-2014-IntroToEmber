import Ember from 'ember';

export default Ember.ObjectController.extend({

    needs: [ 'cart' ],

    cartCount: Ember.computed.alias( 'controllers.cart.itemCount' ),

    cartTotal: Ember.computed.alias( 'controllers.cart.cartTotal' )
});
