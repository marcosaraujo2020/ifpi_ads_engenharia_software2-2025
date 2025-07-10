
document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('.btn-home').addEventListener('click', home);
    document.querySelector('.btn-pacientes').addEventListener('click', menu2);
    document.querySelector('.btn-enfermarias').addEventListener('click', menu3);
    document.querySelector('.btn-sair').addEventListener('click', sair);


    function home(){
      window.location.href= 'home.html'
    }

    function menu2(){
      window.location.href= 'pacientes.html'
    }

    function menu3(){
      window.location.href= 'enfermarias.html'
    }
    
    function sair(){
      window.location.href= 'login.html'
    }


})
