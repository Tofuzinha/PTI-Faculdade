var elementoLogin = document.getElementById("login");
elementoLogin.onfocus = function(){
    elementoLogin.placeholder = "";
};
elementoLogin.onblur = function(){
    elementoLogin.placeholder = "Login do usuario";
};

var elementoPassword = document.getElementById("password");
elementoPassword.onfocus = function(){
    elementoPassword.placeholder = "";
};
elementoPassword.onblur = function(){
    elementoPassword.placeholder = "Senha do usuario";
};


