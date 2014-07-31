addOrSubtract = (operator) ->
  x = $('#input-x').val()
  y = $('#input-y').val()
  z

  if x === '' and y === ''
    console.log 'Please input an integer'
  else
    parseInt(x) + parseInt(y) = z
    $('.answer').text(z)

$('.btn').on 'click', ->
  addOrSubtract($(@).data('operator'))

