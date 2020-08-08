// Procurar o botao
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma acao
function cloneField() {
  // Duplicar os campos. Quais os campos?
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: truee ou false

  // Limpar os campos. Quais os campos?
  const fields = newFieldContainer.querySelectorAll('input')

  // Para cada campo, limpar
  fields.forEach(function(field) {
    // pega o field do momento e limpa ele
    field.value = ""
  })

  // Colocar na página: onde colocar?
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}