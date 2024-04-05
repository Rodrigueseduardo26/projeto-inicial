var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var tel = document.getElementById("tel");
var cep = document.getElementById("cep");
var logradouro = document.getElementById("logradouro");
var num = document.getElementById("num");
var complemento = document.getElementById("complemento");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");




var saida = document.getElementById("saida-de-dados");

function alertar(event){
   // alert("você clicou no botão!!!" + event);

   // var numero = 7;
   // var resultado = numero % 2;
   // if(resultado == 0){
     //   alert("este numero é par!");
   // }

  // validação dos dados
  if(cep.value.length < 8){
    alert('entre com um CEP valido!');
    return;
  }

  // formatar os dados

  cep.valuer = cep.value.replace('-','');

  const url = `https://viacep.com.br/ws/${cep.value}/json`;

   fetch(url)
   .then(function(resposta){
       return resposta.json();
   })
   .then(
    function(dadosDoEndereco){
      logradouro.value = dadosDoEndereco.logradouro;
      bairro.value = dadosDoEndereco.bairro;
      cidade.value = dadosDoEndereco.localidade;
      estado.value = dadosDoEndereco.uf;
      complemento.value = dadosDoEndereco.complemento;

      saidaDeDados(); // chamada da função
    }
   )
   .catch(function(e){
     alert(e.message());
   });



}

function saidaDeDados(){

  saida.innerText = "Nome: " + nome.value +
     "\n Email: " + email.value + 
     "\n Telefone: " + tel.value +
     "\n CEP: " + cep.value +
     "\n Logradouro: " + logradouro.value +
     "\n Número: " + num.value +
     "\n Complemento: " + complemento.value +
     "\n Bairro: " + bairro.value +
     "\n Cidade: " + cidade.value +
     "\n Estado: " + estado.value;

}