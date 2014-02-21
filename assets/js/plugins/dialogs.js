(function($){
    $.fn.extend({
        dialog: function( options ) {

        	// Default Options
            this.defaults = {
            	dialogBackdrop: $('#dialog-backdrop')
            };

            // Pull in other options
            var settings = $.extend({}, this.defaults, options);

            /*
           	var init_tooltip = function(target, tip, tooltip) {

	                if( $( window ).width() < tooltip.outerWidth() * 1.5 ) {
	                    tooltip.css( 'max-width', $( window ).width() / 2 );
	                } else {
	                    tooltip.css( 'max-width', 340 );
	                }


	                var pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( tooltip.outerWidth() / 2 ),
	                    pos_top  = target.offset().top - tooltip.outerHeight() - 20;
	                    //console.log(target.offset().top);
	                    //console.log(tooltip.outerHeight() - 20);
	                    //console.log(pos_top);

	                // Slight adjustments for context-help tooltips
	                if (tooltip.hasClass('ux-contexthelp')) {
	                    pos_left += 3;
	                    pos_top -= 3;
	                }

	                if( pos_left < 0 ) {
	                    pos_left = target.offset().left + target.outerWidth() / 2 - 20;
	                    tooltip.addClass( 'left' );
	                } else {
	                    tooltip.removeClass( 'left' );
	                }

	                if( pos_left + tooltip.outerWidth() > $( window ).width() ) {
	                    pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
	                    tooltip.addClass( 'right' );
	                } else {
	                    tooltip.removeClass( 'right' );
	                }

	                if( pos_top < 0 ) {
	                    var pos_top  = target.offset().top + target.outerHeight();
	                    tooltip.addClass( 'top' );
	                } else {
	                    tooltip.removeClass( 'top' );
	                }

	                tooltip.css( { left: pos_left, top: pos_top } )
	                       .animate( { top: '+=5', opacity: 1 }, 50 );
	            }

        		console.log(dialog);
        		*/

        	return this.each(function() {

        		var targetControl = $(this),
        			dialogTarget = $('#' + targetControl.attr('aria-controls'));

        		targetControl.on('click', function(){

        			// Show the backdrop
        			settings.dialogBackdrop.show();

        		});

        	});

        }

    });

})(jQuery);