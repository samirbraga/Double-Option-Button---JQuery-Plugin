/* Created by Samir Chaves
   Git Repo https://github.com/samirbraga/Double-Option-Button---JQuery-Plugin/edit/master/README.md
*/

$.fn.dblOption = function(opts){
	var self = $(this);

  self.addClass('dbl-option-container ' + (opts['initSide'] || "right"));


  self.css({
  	width: opts['width'] || '220px',
  	height: opts['height'] || '30px',
  	lineHeight: opts['height'] || '30px'
  })

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

  self.find('.labels .label').css('width', parseFloat(opts['width'] || 220)/2 + 'px')
  self.find('.labels-ranger').css('background', opts['bgSelector'] || '#363b44')
  if (!!opts['animation'] || opts['animation'] == undefined) self.find('.labels-ranger').addClass('animated');
  if (!!opts['animation'] || opts['animation'] == undefined) self.find('.labels-front').addClass('animated');

  self.mousedown(function(e){
    e.preventDefault();
    return false;
  })

  self.find('.label-right span').text((opts['rightLabel'] || 'OPÇÃO 1'));
  self.find('.label-left span').text((opts['leftLabel'] || 'OPÇÃO 2'));

  var toggleOption = function(e){
    e.preventDefault();

    var self = $(this);
    var option = $(this).closest('.dbl-option-container');

    if (self.hasClass('label-right')) {
      option.removeClass('right');
      option.addClass('left');
      if (opts['onRight'] && opts['onRight'] instanceof Function) opts['onRight']();
    } else {
      option.removeClass('left');
      option.addClass('right');
      if (opts['onLeft'] && opts['onLeft'] instanceof Function) opts['onLeft']();
    }

    return false;
  }

  self.find('.labels-back .label').click(toggleOption);
}
