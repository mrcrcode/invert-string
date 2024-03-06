function inverterString(stringOriginal) {
  var stringInvertida = "";
  for (var i = stringOriginal.length - 1; i >= 0; i--) {
      stringInvertida += stringOriginal[i];
  }
  return stringInvertida;
}


var stringOriginal = "Vasco da Gama!";
var stringInvertida = inverterString(stringOriginal);
console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);
