function hideElements(collection) {
  Array.prototype.forEach.call(collection, hideElement);
}

function showElements(collection) {
  Array.prototype.forEach.call(collection, showElement);
}

function hideElement(element) {
  element.style.display = 'none';
}

function showElement(element) {
  element.style.display = '';
}

hideElements(document.querySelectorAll('.tabgroup > div'));
showElements(document.querySelectorAll('.tabgroup > div:first-of-type'));

var tabs = document.querySelectorAll('.tabs a')
Array.prototype.forEach.call(tabs, function(tab){
  tab.addEventListener('click', function(event) {
    event.preventDefault();
    var target = event.target;
    var tabgroup = target.closest('.tabs').dataset.tabgroup;

    var tabs = target.closest('.tabs').querySelectorAll('a');
    Array.prototype.forEach.call(tabs, function(element) {
      element.classList.remove('active');
    });

    target.classList.add('active');

    hideElements(document.querySelectorAll('#' + tabgroup + " > div"));
    showElement(document.querySelector(target.getAttribute("href")));
  });
});
