var messageX = $('.x-value'),
    messageY = $('.y-value'),
    messageZ = $('.z-value');

function addOrSubtract(operator){
  var x = $('#input-x').val(),
      y = $('#input-y').val(),
      z,
      operatorText = $('.operator');

  if (x === '' || y === ''){
    $('.error').removeClass('hide')
  }
  else{
    x = parseInt(x);
    y = parseInt(y);
    $('.error').addClass('hide');

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

$('.btn').click(function(){
  var operator = $(this).data('operator');
  addOrSubtract(operator)
});
