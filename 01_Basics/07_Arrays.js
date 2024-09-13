const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)

//  let allHeros =  marvel_heros.concat(dc_heros)

// console.log(allHeros)

// spred operator

const all_new_heros = [...marvel_heros,...dc_heros]

console.log(all_new_heros);
