$(function() {
    terms.init();
});

var terms = {
    init: function() {
        var setup = this.setup;
        setup.setBase();
    },

    setup: {
        setBase: function() {
            var formId = null;

            if(window.location.search) {
                var searchParams = new URLSearchParams(window.location.search);
                formId = searchParams.get('fr');
                formId = parseFloat(formId);

                setFooterLinks();
                redirectLink();

            } else { // set default form if not found => chatform1
                formId = 99;

                setFooterLinks();
                redirectLink();
            }

            function redirectLink() {
                var logo = $('.header__logo');
                logo.on('click', function() {
                    if(formId === 99) {
                        window.location.href = '/chatlp.html';

                    } else if(formId === 100) {
                        window.location.href = '/chatlp2.html';

                    } else if(formId === 101) {
                        window.location.href = '/chatlp3.html';

                    } else if(formId === 102) {
                        window.location.href = '/chatlp4.html';

                    } else if(formId === 103) {
                        window.location.href = '/chatlp5.html';

                    } else if(formId === 104) {
                        window.location.href = '/chatlpadst.html';
                    }
                });
            }

            function setFooterLinks() {
                var linkAbout = $('.footer__link.link--1 a'),
                    linkPrivacy = $('.footer__link.link--2 a'),
                    linkTerms = $('.footer__link.link--3 a');

                linkAbout.prop('href', '/about.html?fr=' + formId);
                linkPrivacy.prop('href', '/privacy-policy.html?fr=' + formId);
                linkTerms.prop('href', '/terms.html?fr=' + formId);
            }
        },
    },
};