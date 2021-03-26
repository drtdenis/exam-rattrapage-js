const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

// While

let index = 0
while (index < tab.length) {
  console.log(`${tab[index]}, length: ${tab[index].length}`)
  ++index
}

// Do-while

index = 0
do {
  console.log(`${tab[index]}, length: ${tab[index].length}`)
  ++index
} while (index < tab.length)