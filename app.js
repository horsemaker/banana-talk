var btnTranslate = document.querySelector('#btn-translate')
var txtInput = document.querySelector('#txt-input')

// live challenge queries
var textArea = document.querySelector('textarea')
// console.log(textArea)
var btnPrimary = document.querySelector('.btn-primary')
// console.log(btnPrimary)
var inputBtn = document.querySelector('#input-btn')
// console.log(inputBtn)
var nameTranslator = document.querySelector('[name=translator]')
// console.log(nameTranslator)

// console.log(txtInput)

btnTranslate.addEventListener('click', clickEventHandler)

function clickEventHandler() {
  console.log('clicked!')
  console.log('input: ', txtInput.value)
}
