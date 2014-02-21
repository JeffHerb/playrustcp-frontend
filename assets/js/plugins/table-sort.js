(function($){
    $.fn.extend({
        tableSort: function( options ) {

        	// Default Options
            this.defaults = {};

            // Pull in other options
            var settings = $.extend({}, this.defaults, options);


            return this.each(function() {

            	// Variables
            	var input = $(this),

            		// Find the table based on the data-table attribute (it should be the table id)
            		table = $('#' + input.attr("data-table")),
            		tableRows = table.find("tbody tr");

				          		
				// Setup keyup function on input.
            	input.on('keyup', function(){

            		var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
				        reg = RegExp(val, 'i'),
				        text;

				    tableRows.show().filter(function() {
				        text = $(this).text().replace(/\s+/g, ' ');
				        return !reg.test(text);
				    }).hide();

            	});

            });

        }

    });

})(jQuery);