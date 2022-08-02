function logar() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if(login == "Ryan" && senha == "r23ç"){
        location.href = "painel.html";
    }else{alert('Login ou Senha incorretos!')}
}