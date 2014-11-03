// Avoid `console` errors in browsers that lack a console.
/*global $:false, jQuery:false */
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
// Superfish menu
    jQuery(document).ready(function() {
        jQuery('ul.sf-menu').superfish({
            delay: 100,
            animation: {height:'show'},
            speed: 'fast'
        });
    });

// Landing page map    
   jQuery(document).ready(function() {
    $('.home--cohorts > div').hover(function() {
        var mapId = $(this).attr('data-mapid');
        $('#'+mapId).fadeToggle(300);
        });
});

// jQuery Accordion   
  $(document).ready(function() {
     var icons = {
      header: 'ui-icon-plusthick',
      activeHeader: 'ui-icon-minusthick'
    };
    $( '#accordion-container' ).accordion({
      heightStyle: 'content',
      icons: icons
    });
        $( '#toggle' ).button().click(function() {
      if ( $( '#accordion-container' ).accordion( 'option', 'icons' ) ) {
        $( '#accordion-container' ).accordion( 'option', 'icons', null );
      } else {
        $( '#accordion-container' ).accordion( 'option', 'icons', icons );
      }
    });
  });
// Place any jQuery/helper plugins in here.
