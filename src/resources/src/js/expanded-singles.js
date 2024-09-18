// ==========================================================================

// Expanded Singles for Craft CMS
// Author: Verbb - https://verbb.io/

// ==========================================================================


(function($) {
    var $siteMenuBtn = $('#global-header #crumbs .menubtn[aria-controls="site-crumb-menu"');

    // Get the current site, as selected by the user, or stored in Cookie/LocalStorage
    var storedSiteId = Craft.cp.getSiteId() || Craft.primarySiteId;

    var updateSingleUrls = function(siteId = null) {
        $('#main-content #sidebar nav a[data-cp-nav]').each(function(i, e) {
            var siteUrls = $(this).data('site-urls');
            var url = siteUrls[siteId];

            // console.log('Expanded Singles: ' + siteId + ': ' + url);

            if (!url) {
                return;
            }

            // Update if overlay link already exists, create and append if not
            var $link = $(this).parent().find('a.cp-nav-link-mask');

            if ($link.length) {
                $link.attr('href', url);
            } else {
                $link = $('<a class="cp-nav-link-mask" href="' + url + '">' + $(this).text() + '</a>');
                $(this).parent().append($link);
            }
        });
    }

    Garnish.requestAnimationFrame($.proxy(function() {
        updateSingleUrls(storedSiteId);
    }, this));

})(jQuery);

