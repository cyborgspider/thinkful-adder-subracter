(function() {
  var app, errorText, messageX, messageY, messageZ, operatorText;

  messageX = $('.x-value');

  messageY = $('.y-value');

  messageZ = $('.z-value');

  errorText = $('.error');

  operatorText = $('.operator');

  app = {
    addOrSubtract: function(operator) {
      var x, y, z;
      x = $('#input-x').val();
      y = $('#input-y').val();
      z = 0;
      if (x === '' || y === '') {
        return errorText.text('Oops, you forgot to input an integer!');
      } else {
        if (isNaN(x) || isNaN(y)) {
          return errorText.text('Use integers, not letters or special characters, please');
        } else {
          errorText.text('');
          x = parseInt(x);
          y = parseInt(y);
          if (operator === 'add') {
            operatorText.text('plus');
            z = x + y;
          }
          if (operator === 'subtract') {
            operatorText.text('minus');
            z = x - y;
          }
          messageX.text(x);
          messageY.text(y);
          return messageZ.text(z);
        }
      }
    }
  };

  $('.btn').click(function() {
    var operator;
    operator = $(this).data('operator');
    return app.addOrSubtract(operator);
  });

}).call(this);
