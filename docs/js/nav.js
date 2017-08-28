// Hamburger
var $hamburger = document.getElementById('hamburger');
var $hamburger_menu = document.getElementById('guide_navigation');

document.querySelector('#hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  $hamburger.classList.toggle('hamburger-button-clicked');
  $hamburger_menu.classList.toggle('guide-navigation-active');
});

// Main Nav
var nav = document.querySelectorAll('.guide-navigation-item-parent');
for (var i = 0; i < nav.length; i++) {
  nav[i].addEventListener('click', function(e) {
    var svg = this.getElementsByTagName('svg')[0];
    this.classList.toggle('guide-navigation-item-parent--active');
    svg.classList.toggle('rotate-180-xs');
    return false;
  });
}

var pageName = document.location.pathname.replace("/email-style-guide/", "").replace(".html", "");

var isAtmosphere = pageName == "atmosphere/purpose" ||
                   pageName == "atmosphere/process" ||
                   pageName == "atmosphere/frontend_guidelines" ||
                   pageName == "atmosphere/email_client_support" ||
                   pageName == "atmosphere/mailchimp" ||
                   pageName == "atmosphere/intercom" ||
                   pageName == "atmosphere/copy" ||
                   pageName == "atmosphere/accessibility";

var isAtom = pageName == "atoms/typography" ||
             pageName == "atoms/links" ||
             pageName == "atoms/imagery" ||
             pageName == "atoms/horizontal_rule" ||
             pageName == "atoms/color" ||
             pageName == "atoms/spacing";

var isMolecule = pageName == "molecules/article" ||
                 pageName == "molecules/callout" ||
                 pageName == "molecules/content-delivery" ||
                 pageName == "molecules/event" ||
                 pageName == "molecules/footer" ||
                 pageName == "molecules/header" ||
                 pageName == "molecules/hero" ||
                 pageName == "molecules/learning-content-list" ||
                 pageName == "molecules/signature" ||
                 pageName == "molecules/two_column";

if (isAtmosphere) {
  nav[0].classList.toggle('guide-navigation-item-parent--active');
  nav[0].getElementsByTagName('svg')[0].classList.toggle('rotate-180-xs');
}
else if (isAtom) {
  nav[1].classList.toggle('guide-navigation-item-parent--active');
  nav[1].getElementsByTagName('svg')[0].classList.toggle('rotate-180-xs');
}
else if (isMolecule) {
  nav[2].classList.toggle('guide-navigation-item-parent--active');
  nav[2].getElementsByTagName('svg')[0].classList.toggle('rotate-180-xs');
}

// Subnav Scrolly Fun
var subNav = document.querySelector('.subnav-container');
var subNavItem = document.querySelectorAll('.subnav-link');
var pageTitleHeight = 128;

window.onscroll = function() {
  if (document.body.scrollTop >= pageTitleHeight) {
    subNav.classList.add('subnav-container--fixed');
  } else {
    subNav.classList.remove('subnav-container--fixed');
  }
}

// Subnav Clicks
for (var i = 0; i < subNavItem.length; i++) {
  subNavItem[i].addEventListener('click', function(e) {
    // Remove all classes before toggling the clicked one
    [].forEach.call(subNavItem, function(el) {
      el.classList.remove('subnav-link--active');
    });
    this.classList.add('subnav-link--active');
  });
}