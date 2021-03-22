const assert = require('chai').assert;
const app = require('../calculadora');

// Results
describe('App', function(){

  describe('Saludar()', function(){
    it('saludar deberia devolver un tipo string', function(){
        let mostrarSaludo = app.Saludar();
        assert.typeOf(mostrarSaludo, 'string');
      });
      
  });
  

  describe('suma()', function(){
    it('suma deberia devolver un resultado mayor que 15', function(){
        let resultado = app.suma(10,20);
        assert.isAbove(resultado, 15);
    });

    it('suma deberia devolver tipo numero', function(){
        let resultado = app.suma(10,5);
        assert.typeOf(resultado, 'number');
    });
  });


  describe('resta()', function(){
    it('resta deberia devolver un resultado menor que 10', function(){
        let resultado = app.resta(10,3);
        assert.isBelow(resultado, 10);
    });

    it('resta deberia devolver tipo numero', function(){
        let resultado = app.resta(2,6);
        assert.typeOf(resultado, 'number');
    });
  });

  describe('multiplicacion()', function(){
    it('multiplicacion deberia devolver un numero mayor que 5', function(){
        let result = app.multiplicacion(3,5)
        assert.isAbove(result, "5");
    });

  });

  describe('calcularPrecioSinIva()', function(){
    it('calcularPrecioSinIva debe devolver 12 para el valor 112', function(){
        let resultado = app.calcularPrecioSinIva(112)
        assert.isNumber(resultado, "12");
    });

  });


});
