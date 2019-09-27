//Realice una función que reciba un arreglo como parámetro y liste los tipos de datos de sus elementos y cuantos de cada tipo. 
var cString = 0;
var cNumber = 0;
var cBoolean = 0;
var cNull   = 0;
var cSymbol  = 0;
var cUndefined  = 0;

function name(arr){
    for (let i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) == 'string'){
            cString = (cString + 1);

        }
        if(typeof arr[i] == 'number'){
            cNumber = (cNumber + 1);
            
        }
        if((typeof arr[i]) == 'boolean'){
            cBoolean= (cBoolean + 1);

        }
        if(typeof arr[i] == 'null'){
            cNull = (cNull + 1);
        
        }
        if(typeof(arr[i]) == 'symbol'){
            cSymbol = (cSymbol + 1);
    
        }
        if(typeof(arr[i]) == 'undefined'){
            cUndefined  = (cUndefined + 1);
        
        }
    }
    console.log("cantidad de String =" + cString);
    console.log("/ncantidad de Number =" + cNumber);
    console.log("/ncantidad de Boolean =" + cBoolean);
    console.log("/ncantidad de Null =" + cNull);
    console.log("/ncantidad de Symbol =" + cSymbol);
    console.log("/ncantidad de Undefined =" + cUndefined);

}

//let array = [1,2,'hola',3];
name([1,2.0,'hola',3, null, undefined]);