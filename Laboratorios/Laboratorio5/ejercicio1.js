//Realice una función que reciba un arreglo como parámetro y liste los tipos de datos de sus elementos y cuantos de cada tipo. 
var contadorString = 0;
var contadorNumber = 0;
var contadorBoolean = 0;
var contadorNull   = 0;
var contadorSymbol  = 0;
var contadorUndefined  = 0;

function name(arr){
    for (let i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) == 'string'){
            contadorString = (contadorString + 1);

        }
        if(typeof arr[i] == 'number'){
            contadorNumber = (contadorNumber + 1);
            
        }
        if((typeof arr[i]) == 'boolean'){
            contadorBoolean= (contadorBoolean + 1);

        }
        if(typeof arr[i] == 'null'){
            contadorNull = (contadorNull + 1);
        
        }
        if(typeof(arr[i]) == 'symbol'){
            contadorSymbol = (contadorSymbol + 1);
    
        }
        if(typeof(arr[i]) == 'undefined'){
            contadorUndefined  = (contadorUndefined + 1);
        
        }
    }
    console.log("cantidad de String =" + contadorString);
    console.log("/ncantidad de Number =" + contadorNumber);
    console.log("/ncantidad de Boolean =" + contadorBoolean);
    console.log("/ncantidad de Null =" + contadorNull);
    console.log("/ncantidad de Symbol =" + contadorSymbol);
    console.log("/ncantidad de Undefined =" + contadorUndefined);

}

//let array = [1,2,'hola',3];
name([1,2.0,'hola',3, null, undefined]);