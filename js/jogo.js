const jogoAdivinha = {
    semente: 10,
    tentativa:0,
    numeroSorteado: function geraValorAleatorio(){
        return Math.round(Math.random()* this.semente);
    }
}

const btnVerifica = document.getElementById('btnVerifica');
const status = document.getElementById('status');
const tentativa = document.getElementById('tentativa')
const chute = document.getElementById('chute');

let numeroSorteado = jogoAdivinha.numeroSorteado();

function atualizarTentativa(tentativa,valor){
    if(valor > 1){
        tentativa.innerHTML = 'Tentativas : <span style="color: OrangeRed">' +
        valor + '</span>';
    }else{
        tentativa.innerHTML = 'Tentativa : <span style="color: brown">' +
        valor + '</span>';
    }
}

function reiniciar() {
    btnVerifica.innerText = 'Verificar';
    tentativa.innerHTML = 'Tentativa :  0';
    chute.disabled = false;
    chute.value = '';
    jogoAdivinha.tentativa = 0
    numeroSorteado = jogoAdivinha.numeroSorteado();
    btnVerifica.removeEventListener('click', reiniciar);
  }

  const formAdivinha = document.getElementById('form');

formAdivinha.addEventListener('submit', function(event) {
  event.preventDefault();

  if (!!chute.value == false) {
    status.innerHTML =  '<span style="color:DeepPink">Digite algum valor</span>';
    return;
  }

  atualizarTentativa(tentativa, ++jogoAdivinha.tentativa);

  if (numeroSorteado == chute.value) {
    status.innerHTML = '<span style="color:Maroon">Parabéns, você acertou!!</span>';
    chute.disabled = true
    btnVerifica.innerText = "Tentar novamente?";
    btnVerifica.addEventListener('click', reiniciar);

  } else if (numeroSorteado > chute.value) {
    status.innerText =  'O número sorteado é maior';
  } else if (numeroSorteado < chute.value) {
    status.innerText =  'O número sorteado é menor';
  }
});
