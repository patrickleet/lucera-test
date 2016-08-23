// DataCollectionView.js

define(["jquery", "backbone", "underscore", "backgrid", "collections/DataCollection", "views/DataView"],

    function($, Backbone, _, Backgrid, Collection, ModelView){

        var DataCollectionView = Backbone.View.extend({

            // View constructor
            initialize: function() {
                var that = this;
                this._modelViews = [];

                this.collection = new Collection();
                this.collection.fetch({
                  success: function () {
                    that.render();
                  }
                });

                // Calls the view's render method
                this.render();
            },

            // View Event Handlers
            events: {

            },

            // Renders the view's template to the UI
            render: function() {

                var that = this;

                // Clear out this element.
                $(this.el).empty();

                var columns = [{
                  name: "id", // The key of the model attribute
                  label: "ID", // The name to display in the header
                  editable: false, // By default every cell in a column is editable, but *ID* shouldn't be
                  // Defines a cell type, and ID is displayed as an integer without the ',' separating 1000s.
                  cell: "string"
                }, {
                  name: "LiquidityProvider",
                  label: "Liquidity Provider",
                  editable: false,
                  // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like *id* above, or a string
                  cell: "string" // This is converted to "StringCell" and a corresponding class in the Backgrid package namespace is looked up
                }, {
                  name: "Client",
                  label: "Client",
                  editable: false,
                  cell: "string" // An integer cell is a number cell that displays humanized integers
                }, {
                  name: "volume",
                  label: "Volume",
                  cell: "number" // A cell type for floating point value, defaults to have a precision 2 decimal numbers
                }, {
                  name: "latency",
                  label: "Latency",
                  cell: "string"
                }];

                // Initialize a new Grid instance
                var grid = new Backgrid.Grid({
                  columns: columns,
                  collection: this.collection
                });

                // Render the grid
                $(this.el).append(grid.render().el);

                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return DataCollectionView;

    }

);
