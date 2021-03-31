let tab = [
    [ 4, 8],   //12
    [12, 118], //130
    [-2, -4],  //-6
    [3, 5, 7], //15
    [1, -8],   //-7
]
let total = 0

for (let i = 0; i < tab.length; i++){
  for(let j= 0; j < tab[i].length; j++){
    total +=  tab[i][j]
  }
}
console.log(`La somme de tous les nombres de ce tableau est de  ${total}`)