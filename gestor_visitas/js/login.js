
document.addEventListener('DOMContentLoaded', function(){

    document.getElementById("btn-acessar").addEventListener('click', entrar);
    document.querySelector(".btn-reset").addEventListener('click', resetar);


    function resetar() {
        
        const newPassword = confirm("Deseja criar nova senha?");
        
        // Se clicar em cancelar, irá encerrar
        if(!newPassword) return;

        let senha = prompt("Digite sua nova senha");

        if(!senha) {
            alert("Operação cancelada");
            return;
        }

        /* if(senha === " ") {
            alert("Necessário informar uma senha")
            return; // Encerra se campos de senha estiver vazia
        } */
       
        let confirmar_senha = prompt("Confirme sua nova senha");

        if(!confirmar_senha) {
            alert("Confirmação de senha cancelada");
            return;
        }
    
        if(senha != confirmar_senha){
            alert("Senhas não coincidem. Tente novamente.");
        }
        else {
            alert("SENHA CADASTRADA COM SUCESSO!");
            console.log(`Senha cadastrada: ${senha}`); 
        }
    }


    function entrar(){
        let user = "marcos@gmail.com";
        let password = "Abc@123";
        
        let loginInput = document.getElementById("caixa-login");
        let senhaInput = document.getElementById("caixa-senha");

        let login = loginInput.value.trim();
        let senha = senhaInput.value.trim();

        
        
        if(login === "" && senha === ""){
            alert("Preencha os campos vazios");
        }
        else if(login === ""){
            alert("Preencha o campo de login");
        }
        else if(senha === ""){
            alert("Informe sua senha")
        }
        else if(login === user && senha === password){
            /* alert("ACESSO LIBERADO SUCESSO!") */
            window.location.href= 'home.html'
        }
        else if(login !== user || senha !== password ){
            alert("login ou senha inválido")
        }
        
        loginInput.value = "";
        senhaInput.value = "";
    }

})


