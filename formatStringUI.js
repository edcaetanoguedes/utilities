function formatUIPrice(str) {/* Format strings and numbers to decimal 2 precision */
  // 127 or 127.3 or 127.333
  let str1 = new String(str);
  if (str1.length > 0) {
    if (isNumber(str1)) {
      let numeros = str1.split(".");
      let inteiro = numeros[0];

      if (numeros.length == 1 || numeros[1] == "") {
        return (inteiro.toString() + ".00");
      } else {
        var decimal = numeros[1];
        //console.log("decimal: " + decimal);

        if (decimal.toString().length >= 2) {
          decimal = decimal.substring(0, 2);
        } else {
          decimal += "0";
        }
        //console.log("decimal: " + decimal);
        return (inteiro.toString() + "." + decimal);
      }
    } else {
      console.log("Não é número");
      return null;
    }
  } else {
    console.log("NULL");
    return null;
  }
}

function isNumber(str) {/* Numeric validation */
  return !isNaN(parseFloat(str)) && isFinite(parseFloat(str));
}