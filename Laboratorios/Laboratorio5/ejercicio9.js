//Crear una función en JavaScript que pida por el teclado el radio de un circunferencia, y calcule el área de esta y lo retorne, si el radio ingresado es negativo o cero, retornará -1. 

function areacircunferencia(rad){
    var area= (Math.PI)*(rad*rad);
    if(rad<=0){
        return -1;
    }
    else{
        return area;
    }
}

var num= 3;
console.log(areacircunferencia(num));