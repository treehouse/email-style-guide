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

var child = document.querySelector('.guide-navigation-link-child--active');
var parent = child.closest('.guide-navigation-item-parent');

parent.classList.toggle('guide-navigation-item-parent--active');
parent.getElementsByTagName('svg')[0].classList.toggle('rotate-180-xs');

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
