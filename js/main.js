/**
 * Main script
 */

( function( $ ) {

  $('.masonry-container').masonry({
    itemSelector: '.grid-layout'
  });

  /**
   * Toggle menu dropdown
   */
  $('#primary-menu .subnav-toggle').click(function(e) {
  	e.preventDefault();
  	$(this).toggleClass('open').next(".sub-menu").slideToggle(300);
  });

} )( jQuery );
