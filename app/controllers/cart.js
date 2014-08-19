import Ember from 'ember';

export default Ember.ArrayController.extend({
    itemCount: function() {
        return this.get( 'length' );
    }.property( '@each' ),

    cartTotal: function() {
        return this.get( 'content' ).reduce( function( previousValue, product )  {
            return previousValue + product.get( 'totalPrice' );
        }, 0 );
    }.property( '@each.totalPrice' )

});
