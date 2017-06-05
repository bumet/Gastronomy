(function($) {
  var gastronomy = gastronomy || {};
  gastronomy._init = function() {
    if($('.widget_bu_pages').length > 0) {
      gastronomy.subnav._init();
    }
    if($('.alumni-list-wrapper').length > 0) {
      gastronomy.alum._init();
    }
  }

  gastronomy.subnav = {
    _init : function() {
      $('.widget_bu_pages').insertAfter('#quicksearch');
    }
  }

  gastronomy.alum = {
    _init: function() {
      $('.alumni-list-wrapper ul').addClass('include-image');
      $.each($('.include-image'), function(index, value) {
        var text = $(value).find('li:first-of-type').text();
        var initials = text.replace(/\([^\)]*\)/g, '').match(/\b(\w)/g).join('').toUpperCase();
        var color = function() {
          var rand = Math.floor(Math.random()*224);
          var str = rand.toString(16);
          if(rand < 16) {
            str = '0' + str;
          }
          return str;
        };
        $li = $(value).find('li');
        $(value).empty();
        $(value).append('<div class="left"><div class="bubble" style="background-color: #' + color() + color() + color() + ';">' + initials + '&nbsp;</div></div>');
        $(value).append($('<div class="right">').append($li));
      });
    }
  }

  gastronomy._init();
})(jQuery);
