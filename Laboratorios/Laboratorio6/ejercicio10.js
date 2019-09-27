//Escribir una funcion en JavaScript que, dado un número real cualquiera, encuentre su valor absoluto y lo retorne. El valor absoluto de un número x es igual a x si x > 0, y a -x si x es menor o igual a 0. 

var num = -4;
function absoluto(num) {
  if (num <= 0) {
    return num * -1;
  } else {
    return num;
  }
}

console.log(absoluto(num));