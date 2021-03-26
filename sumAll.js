  
let tab = [
  [
    [ 4, 8],
    [12, 118],
    [-2, -4],
  ],
  [
    [3, 5, 7],
    [1, 8],
  ],
]

let sum = 0
for (let i = 0; i < tab.length; ++i) {
  for (let j = 0; j < tab[i].length; ++j) {
    sum += tab[i][j]
  }
}

console.log(`sum = ${sum}`)