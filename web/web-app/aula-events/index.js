document.addEventListener('keydown', function() {
  const inputValue = document.querySelector('input').value
  const carsFiltered = ['banana', 'goiaba', 'xpto', 'foo', 'bar'];
  console.log('=> encontrou', carsFiltered.filter(item => item.includes(inputValue))
)
})