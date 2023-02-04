function myFunction2() {
    var paragrafo = document.querySelector("#usuario_logado");
    if (sessionStorage.getItem('valueText') == null) {
        paragrafo.textContent = "Usuário logado: não logado"
    } else {
        paragrafo.textContent = "Usuário logado: " + sessionStorage.getItem('valueText');
    }
}
