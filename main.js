function Veiculo(marca, numeroRodas, potencia) {
  this.marca = marca;
  this.numeroRodas = numeroRodas;
  let _potencia = potencia;
  let _proprietario = null;
  // this.potencia = potencia;

  this.getPotencia = function () {
    return _potencia;
  }

  this.getProprietario = function () {
    return _proprietario;
  }

  this.setProprietario = function (valor) {
    _proprietario = valor;
  }

  this.potenciaVeiculo = function() {
    console.log('A potência do seu veiculo é ' + this.getPotencia());
  }

  this.cambioVeiculo = function() {
    console.log('O câmbio do veiculo é ' + this.cambio);
  }
}

function Carro(marca, numeroRodas, cavalos_potencia, cor, aro, cambio) {
  this.cor = cor;
  this.aro = aro;
  this.cambio = cambio;
  let _modelo = null;

  this.getModelo = function() {
    if(_modelo != null){
      return _modelo;

    } else {
      return 'Escolha um modelo da marca ' + marca;
    }
  }

  this.setModelo = function(valor) {
    _modelo = valor;
  }

  Veiculo.call(this, marca, numeroRodas, cavalos_potencia);
}

function Moto(marca, numeroRodas, cilindradas_potencia, cor, aro, cambio) {
  this.cor = cor;
  this.aro = aro;
  this.cambio = cambio;
  let _modelo = null;

  this.getModelo = function() {
    if(_modelo != null){
      return _modelo;

    } else {
      return 'Escolha um modelo da marca ' + marca;
    }
  }

  this.setModelo = function(valor) {
    _modelo = valor;
  }

  Veiculo.call(this, marca, numeroRodas, cilindradas_potencia);
}

// 1 - Item da classe carro.
const carroHb20 = new Carro('Hyundai', 4, '88cv', 'prata', 15, 'manual');
carroHb20.setProprietario('Wanderson');
carroHb20.setModelo('HB20');

// 2 - Item da classe moto.
const motoTwister = new Moto('Honda', 2, '250cc', 'vermelho', 21, 'manual');
motoTwister.setProprietario('William');
motoTwister.setModelo('Twister');

// 3 - Item da classe carro.
const carroCreta = new Carro('Hyundai', 4, '125cv', 'branco', 16, 'automatico');
carroCreta.setProprietario('Patricia');
carroCreta.setModelo('Creta');

