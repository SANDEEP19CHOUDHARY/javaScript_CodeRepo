const marvel_heros = ["Thor", "IronMan", "StarLight","Thanos"];
const dc_heros = ["Flash","Arrow", "Superman"]

marvel_heros.push(dc_heros)
//console.log(marvel_heros)
marvel_heros.pop(4)

const combination = marvel_heros.concat(dc_heros)
//console.log(combination)

const allNewComb= [...marvel_heros,...dc_heros]
console.log(allNewComb)



