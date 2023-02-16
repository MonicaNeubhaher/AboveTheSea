function myFunction2() {
    var paragrafo = document.querySelector("#usuario_logado");
    if (sessionStorage.getItem('valueText') == null) {
        paragrafo.textContent = "Usuário: não logado"
    } else {
        paragrafo.textContent = "Usuário: " + sessionStorage.getItem('valueText');
    }
}
