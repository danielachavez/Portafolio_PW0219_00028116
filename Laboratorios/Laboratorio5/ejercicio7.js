//La serie Fibonacci es una serie matemática muy reconocida, la cual tiene como primeros 10 términos: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34. Realice una función en JavaScript que reciba un número n como argumento y muestre la serie hasta el enésimo término. 


function fibonacci(n){
    var a=0;
    var b=1;
     
    for(i=0; i<n;i++){
    var numeroTemporal=a;
    a=b;
    b=numeroTemporal+b;
     
    console.log(a+" ");
    }
     
    }
    fibonacci(10);