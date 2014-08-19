import Ember from 'ember';
import Product from '../models/product';

export default Ember.Route.extend({

    actions: {
        addToCart: function( model ) {
            this.controllerFor( 'cart' ).pushObject( model );
        }
    },

    model: function(){
        var model = Ember.A();

        model.addObject(
            Product.create({
                sku: 'P-133',
                name: 'First Product',
                price: 12.99,
                tax: 1.50
            })
        );

        model.addObject(
            Product.create({
                sku: 'P-246',
                name: 'Secopnd Product',
                price: 1.37,
                tax: 0.12
            })
        );

        return model;
    }
});
