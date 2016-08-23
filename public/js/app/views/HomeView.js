// IndexView.js

define(["jquery", "backbone", "models/HomeModel", "text!templates/Home.html", "views/DataCollectionView"],

    function($, Backbone, Model, template, DataCollectionView){

        var HomeView = Backbone.View.extend({

            // The DOM Element associated with this view
            el: ".magic",

            // View constructor
            initialize: function() {

                this.childView = new DataCollectionView();
                // Calls the view's render method
                this.render();

            },

            // View Event Handlers
            events: {

            },

            // Renders the view's template to the UI
            render: function() {

                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, {});

                // Dynamically updates the UI with the view's template
                this.$el.html(this.template);

                this.childView.setElement(".data").render();
                this.childView.delegateEvents();

                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return HomeView;

    }

);
