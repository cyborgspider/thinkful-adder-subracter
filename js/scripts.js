// Create some global variables
var messageX     = $('.x-value'),
    messageY     = $('.y-value'),
    messageZ     = $('.z-value'),
    errorText    = $('.error'),
    operatorText = $('.operator');

//Wrap the function inside an object to keep it out of global namespace
var app = {

  addOrSubtract : function(operator){
    var x = $('#input-x').val(),
        y = $('#input-y').val(),
        z = 0;

    // If input fields are empty, surface a message.
    if (x === '' || y === ''){
      errorText.text('Oops, you forgot to input an integer!');
    }
    else{
      //If input text are not numbers, surface a message...
      if (isNaN(x) !== false || isNaN(y) !== false){
        $('.error').text('Use integers, not letters or special characters, please');
      }
      //...otherwise, proceed with calculation functions
      else{
        //Clear any error messages
        errorText.text('');

        //Ensure JS is adding numbers, not strings.
        x = parseInt(x);
        y = parseInt(y);

        //If the button pressed has a data attribute of "add", add the numbers and set the result to z
        if (operator === 'add'){
          operatorText.text('plus');
          z = x+y;
        }

        //If the button pressed has a data attribute of "subtract", subtract the numbers and set the result to z
        if (operator === 'subtract'){
          operatorText.text('minus');
          z = x-y;
        }

        //Update the message text in the app
        messageX.text(x);
        messageY.text(y);
        messageZ.text(z);

      }
    }
  }
}

$('.btn').click(function(){
  //Pass the argument (determined by button's data attribute) to the function.
  var operator = $(this).data('operator');
  app.addOrSubtract(operator)
});
