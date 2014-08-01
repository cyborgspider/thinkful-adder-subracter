messageX     = $('.x-value')
messageY     = $('.y-value')
messageZ     = $('.z-value')
errorText    = $('.error')
operatorText = $('.operator')

app =
  addOrSubtract: (operator) ->
    x = $('#input-x').val()
    y = $('#input-y').val()
    z = 0

    if x is '' or y is ''
      errorText.text 'Oops, you forgot to input an integer'
    else
      if isNaN(x) or isNaN(y)
        errorText.text 'Use integers, not letters or special characters, please'
      else
        errorText.text ''
        x = parseInt(x)
        y = parseInt(y)

        if operator is 'add'
          operatorText.text 'plus'
          z = x+y

        if operator is 'subtract'
          operatorText.text 'minus'
          z = x-y

        messageX.text(x)
        messageY.text(y)
        messageZ.text(z)

$('.btn').click ->
  operator = $(@).data('operator')
  app.addOrSubtract(operator)
