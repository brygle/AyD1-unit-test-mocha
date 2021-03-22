const assert = require('chai').assert;
const app = require('../201503723');

// Results
describe('App', function(){

  describe('fibonacci()', function(){
    it('fibonacci deberia devolver un tipo number', function(){
      let resFibonacci = app.fibonacci(4);
      assert.typeOf(resFibonacci, 'number');
    });

    it('fibonacci evaluado en 4 deberia devolver 3', function(){
      let resFibonacci = app.fibonacci(4);
      assert(resFibonacci == 3);
    }); 
  });

  describe('primo()', function(){
    it('primo deberia devolver un tipo booleano', function(){
      let resPrimo = app.primo(4);
      assert.typeOf(resPrimo, 'boolean');
    });

    it('primo evaluado en 11 deberia devolver true', function(){
      let resPrimo = app.primo(11);
      assert(resPrimo == true);
    });
  });

  describe('potencia()', function(){
    it('potencia deberia devolver un resultado mayor que 25', function(){
        let resultado = app.potencia(3, 3);
        assert.isAbove(resultado, 25);
    });

    it('potencia deberia devolver tipo number', function(){
        let resultado = app.potencia(3, 3);
        assert.typeOf(resultado, 'number');
    });
  });


  describe('palindromo()', function(){
    it('palindromo(anitatina) deberia devolver true', function(){
        let resultado = app.palindromo('anitatina');
        assert(resultado == true);
    });

    it('palindromo(bryan) deberia devolver false', function(){
      let resultado = app.palindromo('bryan');
      assert(resultado == false);
    });

    it('palindromo(anitalavalatina) deberia devolver tipo boolean', function(){
        let resultado = app.palindromo('anitalavalatina');
        assert.typeOf(resultado, 'boolean');
    });
  });

  describe('validarFecha()', function(){
    it('validarFecha deberia devolver true si fecha 30-02-2021 existe o va a existir', function(){
        let resultado = app.validarFecha(30,2,2021);
        assert(resultado == false);
    });

    it('validarFecha deberia devolver true si fecha 30-01-2021 existe o va a existir', function(){
      let resultado = app.validarFecha(30,1,2021);
      assert(resultado == true);
    });

    it('validarFecha deberia devolver un tipo booleano', function(){
      let resultado = app.validarFecha(30,2,2021);
      assert.typeOf(resultado, 'boolean');
    });

  });
});
