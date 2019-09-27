//Ordenamiento de array: Crear una función en JavaScript que ordene los elementos de un Array en orden ascendente. 


var arr= [5,7,2,8,9,1];
function ordenamiento(arr){
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1
        let tmp = arr[i]
        while (j >= 0 && arr[j] > tmp) {
          arr[j + 1] = arr[j]
          j--
        }
        arr[j+1] = tmp
      }
      return arr
    }

    
    console.log(ordenamiento(arr));