

EJERCICIO MEDIO 10
ENCONTRAR EL INDICE DE UN ELEMENTO EN UN ARRAY

nombresPorLista = ["Allison", "Belen", "Nadia", "Marcia", "Ale", "Fabián"];
//funcion:si el nombre pertenece al array se entrega asiento calculado por su posicion +1,si no retorna 0.
//var nombre= "nadia";
//prueba con asientosPorLista(nombresPorLista,nombre);
function asientosPorLista(array, nombre) {
	////El método includes() determina si una matriz incluye un elemento determinado, devuelve true o false según corresponda.

  if (array.includes(nombre)) { 
      var numeroAsiento = array.indexOf(nombre) + 1;
    return numeroAsiento;
  } else { 
    return 0;
  }
}





EJERCICIO FACIL 14
La función crea un nuevo array contando los numeros pares de un array dado.

function amigosPares(array) {
  var nuevoArray = [];
  //Ciclo for itera desde el array inicial 
  for (var i = 0; i < array.length; i++) {
  	//Si el elemento es par lo añadimos a nuevo array
    if (array[i] % 2 == 0) { 
      nuevoArray.push(arr[i]);
    }
  }
  return nuevoArray; //el nuevo array que contiene los pares
}



EJERCICIO FACIL 15
La función crea un nuevo array tomando los elementos del array anterior multiplicados por 12.
//prueba con var arr = [2, 1, 5, 8];
//multiplicacion(arr);

function multiplicacion(array) {
  var nuevoArray = []; //en este arreglo se guardaran los multiplicados
  for (var i = 0; i < array.length; i++) {
  	//El método push anexa elementos en el orden en que aparecen.
    nuevoArray.push(array[i] * 12);
  }
  return nuevoArray;
}




EJERCICIO MEDIO 8
La función encuentra el indice de un elemento en un array utilizando indexOf(). Retorna el indice del elemento.
//prueba con var arr = [6, 7, 8, 21];
//position(arr, 7);

function position(array, numero) {
  var position = array.indexOf(numero);
  return position;
}



EJERCICIO DIFICIL 2
RETORNAR TRUE SI EL ARREGLO ESTA ORDENADO DE MENOR A MAYOR, FALSE SI EL ARREGLO ESTA ORDENADO DE MAYOR A MENOR
//prueba con var arr = [2, 3, 4, 5];
//ordenado(arr);


function ordenado (array) { 
  for(var i = 0; i < array.length; i++){
    if(array[i] > array[i+1]){ 
    	//si el elemento con i es mayor a i+1 quiere decir que el array etsa desordenado       
    	return false;
    } else {
      return true;
    }
  }
};