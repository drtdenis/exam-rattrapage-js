      // correction apres le jour de rattapage

/*Ecrire une fonction isEven qui prend un nombre en paramètre
 et qui devra retourner true si le nombre passé en paramètre est pair,
  sinon la fonction retournera false.*/

const isEven =(nb) => {

  if ( nb%2 !== 0)
  {return false}
 else 
 {return true}
}

console.log (isEven(3))
console.log (isEven(8))
