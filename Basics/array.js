const marvel_heroes = ["Ironman", "CaptainAmerica", "Thor"]
const dc_heroes = ["Flash", "superman", "batman"]

// const all_heroes = marvel_heroes + dc_heroes
// console.log(all_heroes) //will not be add in an array 

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes) //insert another array as a new element

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

// const all_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_heroes) //spread operator

const another_arr = [1, 2, 3, [4, 5, 6], 7,[6,7,[8,9]]]
const real_arr = another_arr.flat(Infinity);
// console.log(real_arr)


// console.log(Array.isArray("gaurav"));
// console.log(Array.from("Gaurav"))
// console.log(Array.of("Gaurav"))

let score1 = 300;
let score2 = 400;
let score3 = 500;

console.log(Array.of(score1, score2, score3));



