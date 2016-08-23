// DataView.js

define(["jquery", "backbone", "models/DataModel", "text!templates/Data.html"],

    function($, Backbone, Model, template){

        var DataView = Backbone.View.extend({

            // View constructor
            initialize: function() {

                // Calls the view's render method
                this.render();

            },

            // View Event Handlers
            events: {

            },

            // Renders the view's template to the UI
            render: function() {

                // Setting the view's template property using the Underscore template method

                this.template = _.template(template, this.model.toJSON());
                console.log(this.model.toJSON());

                // Dynamically updates the UI with the view's template
                this.$el.html(this.template);

                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return DataView;

    }

);
