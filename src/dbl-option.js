/*
	 Created by Samir Chaves
   Git Repo https://github.com/samirbraga/Double-Option-Button---JQuery-Plugin/edit/master/README.md
*/
$.fn.dblOption = function(opts){
	var self = $(this);

  $.fn.dblOption.options = $.extend({}, $.fn.dblOption.defaults, opts);
  opts = $.fn.dblOption.options;

  self.addClass('dbl-option-container ' + opts['initSide']);

  if (opts['callOnInit'] == true) {
    if (opts['initSide'] == 'right') {
			opts['onRight']();
    } else {
			opts['onLeft']();
    }
  }

  self.css({
  	width: opts['width'] || '220px',
  	height: opts['height'] || '30px',
  	lineHeight: opts['height'] || '30px'
  });

  var template = [
  '<div class="labels labels-back">',
    '<div class="label label-left">',
      '<span></span>',
    '</div>',
    '<div class="label label-right">',
      '<span>RENTTALLER</span>',
    '</div>',
  '</div>',
  '<div class="labels labels-front">',
    '<div class="labels-ranger">',
      '<div class="label label-left">',
       ' <span>RENTTER</span>',
      '</div>',
      '<div class="label label-right">',
        '<span>RENTTALLER</span>',
      '</div>',
    '</div>',
  '</div>'].join('');

  self.append(template);

  self.find('.labels .label').css('width', parseFloat(opts['width'])/2 + 'px');
  self.find('.labels-ranger').css('background', opts['bgSelector']);

  if (opts['animation'] == true) {
  	self.find('.labels-ranger').addClass('animated');
    self.find('.labels-front').addClass('animated');
  }

  self.mousedown(function(e){
    e.preventDefault();
    return false;
  })

  self.find('.label-right span').text(opts['rightLabel']);
  self.find('.label-left span').text(opts['leftLabel']);

  var toggleOption = function(e){
    e.preventDefault();

    var label = $(this);

    if (label.hasClass('label-right')) {
      self.setSide('right');
    } else {
      self.setSide('left');
    }
    return false;
  }

  self.find('.labels-back .label').click(toggleOption);
}

$.fn.dblOption.defaults = {
  width: '200px',
  height: '30px',
  initSide: 'left',
  leftLabel: 'OPÇÃO 1',
  rightLabel: 'OPÇÃO 2',
  callOnInit: true,
  bgSelector: '#363b44',
  animation: true,
  onChange: function () {
  },
  onRight: function () {
    console.log('right');
  },
  onLeft: function () {
    console.log('left');
  }
}

$.fn.setSide = function(side){
	var self = $(this);

  if (self.hasClass('dbl-option-container') && !!side) {
  	$.fn.dblOption.options['onChange']()

  	side = side.toLowerCase();
  	self.removeClass('right left');
  	self.addClass(side);
    if (side == 'right') {
    	$.fn.dblOption.options['onRight']()
    } else {
    	$.fn.dblOption.options['onLeft']();
    }
  }
}
