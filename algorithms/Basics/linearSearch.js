/**
 * Complejidad Temporal -> O(n+3) -> O(n) PORQUE SÓLO NOS IMPORTA EL ESPACIO MÁS GRANDE
 * Complejidad Espacial ->  O(n+1) -> O (n)
 * Espacio Auxiliar -> complejedidad espacial - espacio de entrada -> O(1)
 */
function linearSearch(arreglo, clave) { //O(n) complejidad espacial
  for (let indice = 0; indice < arreglo.length; indice++) { //O(n) - O(1) comp. espacial
    if (arreglo[indice] === clave) { //O(1)
      return indice; //O(1)
    }
  }
  return -1; //O(1)
}
