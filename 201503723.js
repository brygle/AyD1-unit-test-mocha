module.exports = {
    fibonacci: function(n){
        if(n<= 1){
            return n;
        } else {
            return this.fibonacci(n-1) + this.fibonacci(n-2);
        }
    },
    primo: function(n){
        for(var i = 2 ; i < n; i++){
            if(n % i == 0){
                return false;
            }
        }
        return true;
    },    
    potencia: function(base, exponente){
        var res = 1;
        for(var i = 0; i < exponente; i++){
            res = res * base;
        }
        return res;
    },
    palindromo: function(palabra){
      var invertida = "";
      var x = palabra.length-1;
      while(x>=0){
        invertida += palabra[x];
        x--;
      }
      if(palabra === invertida){
          return true;
      } else {
          return false;
      }
    },
    validarFecha: function(dia, mes, anio) {
        if( anio < 0 ){
            return false;
        }
        if( mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12 ){
            if (dia > 0 && dia <= 31){
                return true;
            } else {
                return false;
            }
        } else if( mes == 4 || mes == 6 || mes == 9 || mes == 10 ){
            if (dia > 0 && dia <= 30){
                return true;
            } else {
                return false;
            }
        } else if ( mes == 2 ){
            if (anio % 4 == 0){
                if (dia > 0 && dia <= 29){
                    return true;
                } else {
                    return false;
                }
            } else {
                if (dia > 0 && dia <= 28){
                    return true;
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    }
}