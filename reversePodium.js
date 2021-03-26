const podium = (tab) => {
  let flop3 = tab
    .sort((a, b) => {
      return a - b
    })
    .slice(0, 3)
  console.log(`1st: ${flop3[0]}`)
  console.log(`2nd: ${flop3[1]}`)
  console.log(`3rd: ${flop3[2]}`)
}

let scores = [5, 15, 32, 17, 8, 21, 2]
podium(scores)