import { persistData } from "../common.mjs"

const finalForm = document.getElementById('final-form')
if(finalForm) {
  finalForm.addEventListener('submit', event => {
    event.preventDefault()
    handleSubmitFinalForm()
  });
}


function getFormData () {
  const formData = new FormData(finalForm)
  const formResult = {}
  formData.forEach((value, key, parent) => {
    formResult[key] = value
  })
  return formResult
}

function handleSubmitFinalForm () {
  const formData = getFormData()
  persistData(formData)
  window.location.href = "/thankyou"
}