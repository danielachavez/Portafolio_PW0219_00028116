

function palindroma(palabra) {
  var isPalindroma = true;
  var origi = palabra.split("");
  var invertido = palabra.split("").reverse();


  for (var i = 0; i < origi.length; i++) {
    if (invertido[i] != origi[i]) {
      console.log("no es palindroma");
      isPalindroma = false;
      break;
    }

    if (isPalindroma == true) {
      console.log("es palindroma");
    }
  }
}

palindroma("maria");
invertido