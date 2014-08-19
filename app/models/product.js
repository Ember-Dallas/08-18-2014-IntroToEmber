import Ember from 'ember';

export default Ember.Object.extend({

    sku: null,

    name: null,

    price: null,

    tax: null,

    totalPrice: function() {
        return this.get( 'price' ) + this.get( 'tax' );
    }.property( 'price', 'tax' )

});