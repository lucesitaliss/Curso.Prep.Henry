// No cambies los nombres de las funciones.

const { TestWatcher } = require("jest");

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

 var claveVaror =Object.entries(objeto);
 return claveVaror;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  //Lissette
  var objetoSTR={};
 for (var i=0;i<string.length;i++){
    if (!objetoSTR[string[i]]){
      objetoSTR[string[i]]=0;
      }
      objetoSTR[string[i]]++;        
    }
    
    return objetoSTR;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var MAY="";
  var min="";
  for (i=0;i<s.length;i++){
    if (s[i]===s[i].toUpperCase()){
      MAY+=s[i];
    }
    if (s[i]===s[i].toLowerCase()){
      min+=s[i];
    }
  }
  return MAY+min;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var arraystr=[];
  arraystr=str.split(" ");
  var mirror="";
  for (var i=0 ;i<arraystr.length; i++){
       mirror+=arraystr[i].split("").reverse("").join("")+" ";
    }
  return mirror.slice(0,mirror.length-1);
  } 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var str=numero.toString();
  var mirror="";
  for (var i=0;i<str.length;i++){
    mirror=str[i]+mirror;
  }
  if (mirror==numero){
    return "Es capicua";
  }
  return "No es capicua";
return mirror;
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var newcadena="";
  for (var i=0;i<cadena.length;i++){
    if (cadena[i]!="a"&cadena[i]!="b"&cadena[i]!="c"){
      newcadena+=cadena[i];    
    }
  }
  return newcadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
//  ["ejempplo","de","arreglo"]

//  ["de","ejemplo","arreglo"]
// arr.sort(function(a, b){
//   // ASC  -> a.length - b.length
//   // DESC -> b.length - a.length
//   return b.length - a.length;
// });
  arr.sort(function(a,b){return a.length - b.length});
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  //arreglo1 [1,2,3] lengt=3
  //arreglo2 [2,3,8,9,10] lengt=5
  
    var mayor=[];
    varmenor=[];
    if (arreglo1.length > arreglo2.length){
    mayor= arreglo1;
    menor=arreglo2;
     }
    mayor= arreglo2;
    menor=arreglo1;
    var inteserccion=[];
  for (var i=0;i<mayor.length;i++){
    for(var j=0;j<menor.length;j++){
      if (mayor[i]==menor[j]){
        inteserccion.push(mayor[i]);
      }
    }
  }
  return inteserccion;
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

