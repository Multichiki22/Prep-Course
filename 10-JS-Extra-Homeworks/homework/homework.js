// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var salida = []
  for (let clave in objeto){
    let tempArray = []
    tempArray[0] = clave
    tempArray[1] = objeto[clave]
    salida.push(tempArray)
    tempArray = []
  }
  return salida
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var salida = {
  }
  for (let i=0;i<string.length;i++){
    if (salida.hasOwnProperty([string[i]])=== false) {
      salida[string[i]] = 1
    }else {
      salida[string[i]] = salida[string[i]] + 1
    }
  }
  return salida
  //this problem could be also solved with a hashmap (maybe more efficient in terms of time complexity)
// but i imagine that the intended solution it was using objects

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus = ""
  var minus = ""
  for (let i = 0;i<s.length;i++){
    if (s[i] === s[i].toUpperCase()){
      mayus = mayus +s[i]
    }else{
      minus = minus +s[i]
    }
  }
  return (mayus + minus)
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var espejo = function(inicio ,final, string){
    var palabraEspejada = ""
    for (let i = final;i>=inicio;i--){
      palabraEspejada = palabraEspejada + string[i]
    }
    return palabraEspejada
  }
  var salida = ""
  var tempInicio = 0
  for (let i = 0;i<=str.length;i++){
    if (i == str.length){
      salida  = salida + espejo(tempInicio, i-1,str)
      tempInicio = i+1
      break
    }else if (str[i]== " "){
      salida  = salida + espejo(tempInicio, i-1,str) + " "
      tempInicio = i+1
    }
  }
  return salida
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroStr = numero.toString()
  var numeroTapicua = numeroStr.split("").reverse().join("")
    if (numeroTapicua === numeroStr){
    return "Es capicua"
  }else {
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de NO contener dichas letras.
  //Escribe tu código aquí
  var salida = ""
  for (let i = 0;i<cadena.length;i++){
    switch(cadena[i]){
      case "a":continue
      case "b":continue
      case "c":continue
      default:
        salida = salida + cadena[i]
    }
  }
  return salida
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var temp = new Map()
  for (let i =0;i<arr.length;i++){
    var lengWord = arr[i].length
    if (temp.has(lengWord)== false){
      temp.set(lengWord,[arr[i]])
    }else{
      var cambio = temp.get(lengWord)
      cambio.push(arr[i])
      temp.set(lengWord,cambio)
    }
  }
  var cants = []
  for (let indi of temp.keys()){
    cants.push(indi)
  }
  cants.sort()
  var salida = []
  for(let j = 0;j<cants.length;j++){
    var moment = cants[j]
    var actu = temp.get(moment)
    for (let i = 0; i<actu.length;i++){
      salida.push(actu[i])
    }
  }
  return salida
}



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var salida = []
  if (arreglo1.length>arreglo2.length){
    for (let i = 0;i<arreglo1.length;i++){
      for (let j = 0;j<arreglo2.length;j++){
        if (arreglo1[i]==arreglo2[j]){
          salida.push(arreglo2[j])
        }
      }
    }
  }else{
    for (let i = 0;i<arreglo2.length;i++){
      for (let j = 0;j<arreglo1.length;j++){
        if (arreglo2[i]==arreglo1[j]){
          salida.push(arreglo1[j])
        }
      }
    }
  }
  return salida
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

