// function myFunction2() {
//   var paragrafo = document.querySelector("#usuario_logado");
//     if (sessionStorage.getItem('valueText') == null) {
//       paragrafo.textContent = "Usuário logado: não logado"
//     } else {
//       paragrafo.textContent = "Usuário logado: " + sessionStorage.getItem('valueText');
//     }
//   }


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
    console.log(label.classList.length)
    //console.log(label.classList.value)
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
    inputsCorretos.emailLogin = true;
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
    inputsCorretos.emailLogin = false;
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
    inputsCorretos.senhaLogin = false;
  }
  else {
    estilizarInputCorreto(senhaInput, senhaHelper)
    inputsCorretos.senhaLogin = true;
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
    inputsCorretos.nomeRegistro = false;
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameHelper);
    inputsCorretos.nomeRegistro = true;
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
    inputsCorretos.emailRegistro = true;
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailRegistroHelper.innerText = "Precisa inserir um e-mail válido";
    estilizarInputIncorreto(emailRegistroInput, emailRegistroHelper);
    inputsCorretos.emailRegistro = false;
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
    inputsCorretos.senhaRegistro = false;
  }
  else {
    estilizarInputCorreto(senhaInputRegistro, senhaHelperRegistro)
    inputsCorretos.senhaRegistro = true;
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
    inputsCorretos.confirmaSenhaRegistro = true;
  } else {
    confirmaSenhaHelper.innerText = "As senhas precisam ser iguais"
    estilizarInputIncorreto(confirmaSenhaInput, confirmaSenhaHelper)
    inputsCorretos.confirmaSenhaRegistro = false;
  }
})

// ---------- EVITAR ENVIO DO FORMULÁRIO ---------- //

var msg_usuario_logado = document.querySelector("#usuario_logado")

let msg_email_logado = "";

let btnEnviar = document.querySelector(".enviar");

let inputsCorretos = {
  emailLogin: false,
  senhaLogin: false,
  nomeRegistro: false,
  emailRegistro: false,
  senhaRegistro: false,
  confirmaSenhaRegistro: false
}

btnEnviar.addEventListener("click", (e) => {

  if (inputsCorretos.emailLogin == true) {
    if (inputsCorretos.senhaLogin == false) {
      e.preventDefault()
      // não enviar se estiver faltando a senha
      msg_usuario_logado.innerText = "Usuário logado: não logado"
      alert("Precisa preencher as informações de login corretamente.")
    } else {
      // Enviar formulário
      msg_email_logado = emailInput.value
      msg_usuario_logado.innerText = "Usuário logado: " + msg_email_logado.value
      alert("Login enviado com sucesso: " + msg_email_logado)
      sessionStorage.setItem('valueText', msg_email_logado);
    }
  } else {
    if (inputsCorretos.emailRegistro == true) {
      if (
        inputsCorretos.nomeRegistro == false ||
        inputsCorretos.senhaRegistro == false ||
        inputsCorretos.confirmaSenhaRegistro == false
      ) {
        // Qualquer um dos campos que tiver informação errada, não enviar
        e.preventDefault()
        msg_usuario_logado.innerText = "Usuário logado: não logado"
        alert("Precisa preencher as informações de registro corretamente.")
      } else {
        // Enviar formulário de registro
        msg_email_logado = emailRegistroInput.value
        msg_usuario_logado.innerText = "Usuário logado: " + msg_email_logado
        alert("Registro enviado com sucesso: " + msg_email_logado)
        sessionStorage.setItem('valueText', msg_email_logado);

      }
    } else {
      e.preventDefault()
      msg_usuario_logado.innerText = "Usuário logado: não logado"
      alert("Precisa preencher as informações para Login ou Registro orretamente.")
    }
  }

})

