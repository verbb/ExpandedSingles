// ==========================================================================

// Expanded Singles for Craft CMS
// Author: Verbb - https://verbb.io/

// ==========================================================================


(function($) {
    var $siteMenuBtn = $('#global-header #crumbs .menubtn[aria-controls="site-crumb-menu"');

    // Get the current site, as selected by the user, or stored in Cookie/LocalStorage
    var storedSiteId = Craft.cp.getSiteId();

    var updateSingleUrls = function(siteId = null) {
        $('#main-content #sidebar nav a[data-cp-nav]').each(function(i, e) {
            var siteUrls = $(this).data('site-urls');
            var url = siteUrls[siteId];

            console.log('Expanded Singles: ' + siteId + ': ' + url);

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
        // If we have a site menu
        if ($siteMenuBtn.length) {
            this.siteMenu = $siteMenuBtn.menubtn().data('menubtn').menu;

            // If there's no Cookie/LocalStorage set for the site, fetch it from the DOM
            if (!storedSiteId) {
                // Get the selected menu item
                $.each(this.siteMenu.$options, function(index, element) {
                    var $option = $(element);

                    if ($option.hasClass('sel')) {
                        storedSiteId = $option.data('site-id');

                        // While we're at it, set it to a Cookie
                        Craft.cp.setSiteId(storedSiteId);
                    }
                });
            }

            // Set links to stored siteId
            updateSingleUrls(storedSiteId);

            // Add listener when selecting site
            this.siteMenu.on('optionselect', function(e) {
                var $option = $(e.selectedOption);

                updateSingleUrls($option.data('site-id'));
            });
        } else {
            // Set links to the primary site as default
            updateSingleUrls(Craft.primarySiteId);
        }
    }, this));

})(jQuery);

