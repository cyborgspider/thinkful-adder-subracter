(function(){

  var messageX     = $('.x-value'),
      messageY     = $('.y-value'),
      messageZ     = $('.z-value'),
      errorText    = $('.error'),
      operatorText = $('.operator');

  var addOrSubtract = function(operator){
    var x = $('#input-x').val(),
        y = $('#input-y').val(),
        z = 0,
        btnOperator = $(this).data('operator');

    if (x === '' || y === ''){
      errorText.text('Oops, you forgot to input an integer!');
    }

    else if (isNaN(x) || isNaN(y) || (x%1) !== 0 || (y%1) !==0){
      $('.error').text('Use integers, not letters, decimals, or special characters, please');
    }

    else{
      errorText.text('');
      x = +(x);
      y = +(y);

      if (operator === 'add'){
        operatorText.text('plus');
        z = x+y;
      }

      if (operator === 'subtract'){
        operatorText.text('minus');
        z = x-y;
      }

      messageX.text(x);
      messageY.text(y);
      messageZ.text(z);

    }
  }

  $('.btn').click(addOrSubtract);

}())
