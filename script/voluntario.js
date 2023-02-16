  // ---------- FUNÇÕES GERAIS -------------- //
  function togglePopup(input, label) {
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
      label.classList.add("required-popup");
      input.style.backgroundColor;
    });
  
    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", () => {
      label.classList.remove("required-popup");
    });
  }
  
  function estilizarInputCorreto(input, helper) {
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
  }
  
  function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
  }

// Validação do nome - pg voluntário//
let nomecomInput = document.getElementById("nomecom");
let nomecomLabel = document.querySelector('label[for="nomecom"]');
let nomecomHelper = document.getElementById("nomecom-helper")

togglePopup(nomecomInput, nomecomLabel)

// Validar valor do input
nomecomInput.addEventListener("change", (e) => {
e.preventDefault();
let valor = e.target.value

    if (valor.length < 3) {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    nomecomHelper.innerText = "Digite seu nome completo! precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(nomecomInput, nomecomHelper)
    inputsCorretos.nomecomInput = false;
   
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(nomecomInput, nomecomHelper);
    inputsCorretos.nomecomInput = true;
    
  }
})


// Validação do email - pg voluntário//

let emailcadInput = document.getElementById("emailcad");
let emailcadLabel = document.querySelector('label[for="emailcad"]');
let emailcadHelper = document.getElementById("emailcad-helper")

togglePopup(emailcadInput, emailcadLabel)

emailcadInput.addEventListener("change", (e) =>{

let valor = e.target.value
    if(valor.includes("@") && valor.includes(".com")){
      estilizarInputCorreto(emailcadInput, emailcadHelper);
      inputsCorretos.emailcadInput = true;
    } else{
      emailcadHelper.innerText = "Inserir um email válido";
      estilizarInputIncorreto(emailcadInput, emailcadHelper);
      inputsCorretos.emailcadInput = false;
    }
})

// Validação do numero de telefone - pg voluntário//
let telefoneInput = document.getElementById("telefone");
let telefoneLabel = document.querySelector('label[for="telefone"]');
let telefoneHelper = document.getElementById("telefone-helper")

togglePopup(telefoneInput, telefoneLabel)

telefoneInput.addEventListener("change", (e) => {

let valor = e.target.value;

  // Validação para não aceitar letras

  if (!/^\d+$/.test(valor)) {
    telefoneHelper.innerText = "O campo deve conter apenas números";
    estilizarInputIncorreto(telefoneInput, telefoneHelper);
    inputsCorretos.telefoneInput = false;
  }
  // Validação para ter no mínimo 8 caracteres
  else if (valor.length < 8) {
    telefoneHelper.innerText = "O campo precisa ter 8 ou mais caracteres";
    estilizarInputIncorreto(telefoneInput, telefoneHelper);
  } else {
    estilizarInputCorreto(telefoneInput, telefoneHelper);
    inputsCorretos.telefoneInput = true;
  }
});


//-----------------------------------------------------

let botEnviar = document.querySelector("form > #enviar");
let inputsCorretos = {
    nomecomInput:false,
    emailcadInput: false,
    telefoneInput: false,

}

botEnviar.addEventListener("click", (e) => {


console.log(inputsCorretos)



if(
  inputsCorretos.nomecomInput == false ||
  inputsCorretos.emailcadInput == false ||
  inputsCorretos.telefoneInput == false
  
  
  
  
  ){


    // qualquer um dos campos tiver informação errada, não enviar
e.preventDefault()
alert("Preencha todos os campos obrigatórios corretamente!")


}else {
// enviar formulário
alert("formulário enviado com sucesso!")


}

})