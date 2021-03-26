const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

// For
for (let i = 0; i < tab.length; ++i) {
  console.log(`${tab[i]}, length: ${tab[i].length}`)
}

// For-of
for (const elem of tab) {
  console.log(`${elem}, length: ${elem.length}`)
}

// ForEach
tab.forEach((elem) => {
  console.log(`${elem}, length: ${elem.length}`)
})