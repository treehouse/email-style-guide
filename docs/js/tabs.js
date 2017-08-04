$('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();
$('.tabs a').click(function(e) {
  e.preventDefault();

  var $this = $(this);
  var tabgroup = '#'+$this.parents('.tabs').data('tabgroup');
  var others = $this.closest('li').siblings().children('a');
  var target = $this.attr('href');

  others.removeClass('active');
  $this.addClass('active');
  $(tabgroup).children('div').hide();
  $(target).show();
})
