// ---------- FUNÇÃO MOSTRAR SENHA -------------- //

function myFunction(input) {
  console.log(input);
  var x = document.getElementById(input);
  console.log(x);
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

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

// ---------- VALIDAÇÃO EMAIL LOGIN---------- //
let emailInput = document.getElementById("email_login");
let emailLabel = document.querySelector('label[for="email_login"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)

// Validar valor do input
emailInput.addEventListener("change", (e) => {
  let valor = e.target.value

  if (valor.includes("@") && valor.includes(".com")) {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
  }
})

// ---------- VALIDAÇÃO SENHA DO LOGIN ---------- //
let senhaInput = document.getElementById("senha_login");
let senhaLabel = document.querySelector('label[for="senha_login"]');
let senhaHelper = document.getElementById("senha-helper");

togglePopup(senhaInput, senhaLabel)

senhaInput.addEventListener("blur", (e) => {
  let valor = e.target.value

  if (valor == "") {
    senhaHelper.innerText = "Precisa inserir uma senha"
    estilizarInputIncorreto(senhaInput, senhaHelper)
  }
  else {
    estilizarInputCorreto(senhaInput, senhaHelper)
  }
})


// ---------- VALIDAÇÃO USERNAME REGISTRO ---------- //
let usernameInput = document.getElementById("nome");
let usernameLabel = document.querySelector('label[for="nome"]');
let usernameHelper = document.getElementById("username-helper");

togglePopup(usernameInput, usernameLabel)

// Validar valor do input
usernameInput.addEventListener("change", (e) => {
  let valor = e.target.value

  if (valor.length < 3) {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    usernameHelper.innerText = "Seu usuário precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(usernameInput, usernameHelper)
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameHelper);
  }
})

// ---------- VALIDAÇÃO EMAIL LOGIN---------- //
let emailRegistroInput = document.getElementById("email_reg");
let emailRegistroLabel = document.querySelector('label[for="email_reg"]');
let emailRegistroHelper = document.getElementById("email_reg-helper");

togglePopup(emailRegistroInput, emailRegistroLabel)

// Validar valor do input
emailRegistroInput.addEventListener("change", (e) => {
  let valor = e.target.value

  if (valor.includes("@") && valor.includes(".com")) {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailRegistroInput, emailRegistroHelper);
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailRegistroHelper.innerText = "Precisa inserir um e-mail válido";
    estilizarInputIncorreto(emailRegistroInput, emailRegistroHelper);
  }
})


// ---------- VALIDAÇÃO SENHA DO REGISTRO ---------- //
let senhaInputRegistro = document.getElementById("senha_reg");
let senhaLabelRegistro = document.querySelector('label[for="senha_reg"]');
let senhaHelperRegistro = document.getElementById("senha_reg-helper");

togglePopup(senhaInputRegistro, senhaLabelRegistro)

senhaInputRegistro.addEventListener("blur", (e) => {
  let valor = e.target.value

  if (valor == "") {
    senhaHelperRegistro.innerText = "Precisa inserir uma senha"
    estilizarInputIncorreto(senhaInputRegistro, senhaHelperRegistro)
  }
  else {
    estilizarInputCorreto(senhaInputRegistro, senhaHelperRegistro)
  }
})

// ---------- CONFIRMAÇÂO DE SENHA DO REGISTRO ---------- //
let confirmaSenhaInput = document.getElementById("confirm_senha_reg");
let confirmaSenhaLabel = document.querySelector('label[for="confirm_senha_reg"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

togglePopup(confirmaSenhaInput, confirmaSenhaLabel)

confirmaSenhaInput.addEventListener("blur", (e) => {
  let valor = e.target.value

  if (valor == senhaInputRegistro.value) {
    confirmaSenhaHelper.innerText = "Precisa inserir uma senha"
    estilizarInputCorreto(confirmaSenhaInput, confirmaSenhaHelper)

  } else {
    confirmaSenhaHelper.innerText = "As senhas precisam ser iguais"
    estilizarInputIncorreto(confirmaSenhaInput, confirmaSenhaHelper)
  }
})
