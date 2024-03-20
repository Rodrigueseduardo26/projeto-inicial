var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var tel = document.getElementById("tel");
var cep = document.getElementById("cep");
var log = document.getElementById("log");
var num = document.getElementById("num");
var com = document.getElementById("com");
var bairro = document.getElementById("bairro");
var cid = document.getElementById("cid");
var est = document.getElementById("est");




var saida = document.getElementById("saida-de-dados");

function alertar(event){
   // alert("você clicou no botão!!!" + event);

   // var numero = 7;
   // var resultado = numero % 2;
   // if(resultado == 0){
     //   alert("este numero é par!");
   // }
   saida.innerText = "Nome: " + nome.value +
     "\n Email: " + email.value + 
     "\n Telefone: " + tel.value +
     "\n CEP: " + cep.value +
     "\n Logradouro: " + log.value +
     "\n Número: " + num.value +
     "\n Complemento: " + com.value +
     "\n Bairro: " + bairro.value +
     "\n Cidade: " + cid.value +
     "\n Estado: " + est.value;

}