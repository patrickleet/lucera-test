// IndexModel.js

define(["jquery", "backbone"],

    function($, Backbone) {

        // Creates a new Backbone Model class object
        var DataModel = Backbone.Model.extend({
            defaults: {
            },

            initialize: function () {
                var self = this;
            }

        });

        // Returns the Model class
        return DataModel;

    }

);
