var btnTranslate = document.querySelector('#btn-translate')
var txtInput = document.querySelector('#txt-input')
var outputDiv = document.querySelector('#translated-output')

// var serverURL = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json'

var serverURL = 'https://api.funtranslations.com/translate/minion.json'

function getTranslationURL(text) {
  return serverURL + '?text=' + text
}

function errorHandler(error) {
  console.log('error occured', error)
  alert('Something wrong with server! try again after some time')
}

function clickEventHandler() {
  // outputDiv.innerText = 'ehehehehehehehe ' + txtInput.value
  console.log(btnTranslate)
  console.log(txtInput)
  console.log(outputDiv)

  var inputText = txtInput.value //taking input
  var translationURL = getTranslationURL(inputText)
  console.log(translationURL)

  fetch(translationURL)
    .then((response) => {
      console.log(response)
      response.json()
    })
    .then((json) => {
      console.log(json)
      var translatedText = json.contents.translated
      outputDiv.textContent = translatedText // output
    })
    .catch(errorHandler)
}

// understanding callback functions
// function catch(callbackfn) {
//   // do something
//   // something more
//   callbackfn(error)
// }

btnTranslate.addEventListener('click', clickEventHandler)
