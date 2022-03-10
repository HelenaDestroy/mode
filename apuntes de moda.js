const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
  ];
  
  const lista1Count = {};
  
  lista1.map(   //[■,■,■,■].map(■→●) ⇒ [●,●,●,●]
    function (elemento) {  //funcion anonima sin nombre. creamos el elemento lista1count que es nuestro objeto y le decimos que guarde un valor que se llame igual que nuestro elemento. ese elemento, se convertira en un elemento dentro de nuestro objeto, y es igual a uno porque es la cantidad de veces que ha aparecido. pero asi todos los elementos aparecen una vez, aunque en el aeray aparezca varias. cada vez que aparece, decimos que la posicion en ese obbjeto es igual a uno, tenemos que poner un condicional para saber si el elemento ya existe dentro de lista1count. si ya existe , le decimos que le sumamos 1  lista1count[elemento] += 1; "esto va a sumar el valor que ya estaba guardado dentro de nuestro elemento, en nuestro objeto, y va a sumarlo al array" . esto se va a ejecutar cuando ya existe la posicion del elemento,en nuestro array. que pasa sino? usamos el else.
      if (lista1Count[elemento]) {
        lista1Count[elemento] += 1;    //  a += 1 es exactamente lo mismo que a = a + 1
      } else {
        lista1Count[elemento] = 1;  //crea el elemento, ha aparecido solo una vez.
      }
    }
  );
  
  const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );
  
  const moda = lista1Array[lista1Array.length - 1];
  