        // correction apres le jour de rattapage
        
/*Ecrire une fonction convertEuroToDollar qui fait la conversion
d'une somme exprimée en Euros, en Dollars. 1 euro est égal à 1.18 dollars*/

const Ratio = 1.18

const convertEuroToDollar = (nb) => {
  return nb *= Ratio
}

let nb = 5 // valeur Euros
Convert = convertEuroToDollar(nb)

console.log(`${nb} Euros est égale à ${Convert} dollars`)
