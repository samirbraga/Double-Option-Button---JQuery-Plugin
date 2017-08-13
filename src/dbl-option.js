/*
	 Created by Samir Chaves
   Git Repo https://github.com/samirbraga/Double-Option-Button---JQuery-Plugin/edit/master/README.md
*/

$.fn.dblOption = function(opts){
	$(this).each(function(){
		var self = $(this);

		self[0].dblOptions = $.extend({}, $.fn.dblOption.defaults, opts);
		opts = self[0].dblOptions;

		self.addClass('dbl-option-container ' + opts['initSide']);

		if (opts['callOnInit'] == true) {
			if (opts['initSide'] == 'right') {
				self.setSide('right');
			} else {
				self.setSide('left');
			}
		} else {
			if (opts['initSide'] == 'left') {
				self[0].dblOptions.side = 'left';
			} else {
				self[0].dblOptions.side = 'right';
			}
		}

		self.css({
			width: opts['width'],
			height: opts['height'],
			lineHeight: opts['height']
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
			'</div>'
		].join('');

		self.append(template);

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
	})
}

$.fn.dblOption.defaults = {
  width: '220px',
  height: '30px',
  initSide: 'right',
  leftLabel: 'OPTION 1',
  rightLabel: 'OPTION 2',
  callOnInit: true,
  bgSelector: '#363b44',
  animation: true,
  onChange: function () {
  },
  onRight: function () {
  },
  onLeft: function () {
  }
}

$.fn.setSide = function(side){
	var self = $(this);

  if (self.hasClass('dbl-option-container') && !!side) {

  	side = side.toLowerCase();
  	self.removeClass('right left');
  	self.addClass(side);
    if (side == 'right' && self[0].dblOptions.side != 'right') {
    	self[0].dblOptions.side = 'right';
    	self[0].dblOptions['onRight']()
  		self[0].dblOptions['onChange']()
    } else if (side == 'left' && self[0].dblOptions.side != 'left') {
    	self[0].dblOptions.side = 'left';
    	self[0].dblOptions['onLeft']();
      self[0].dblOptions['onChange']()
    }
  }
}

$.fn.toggleSide = function() {
	var self = $(this);

  if (self.hasClass('dbl-option-container')) {
    if (self[0].dblOptions.side == 'right') {
    	self.setSide('left');
    } else if (self[0].dblOptions.side == 'left') {
    	self.setSide('right');
    }
  }
}

$.fn.getSide = function() {
	var self = $(this);
	return self[0].dblOptions.side;
}
