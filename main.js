//make a function with an object variable that has a property inside
const buyChocolate = () => {
    const ChocolateObj = { 
        milk: "Chocolate Milk"
    }
            return ChocolateObj
}

let chocolateBar = buyChocolate()

const addFlavoring = () => {
    chocolateBar.flavor = "orange"
        return chocolateBar
}

const makeBarkMixture = () => {
    if (chocolateBar.flavor = "Mint"){
        chocolateBar.mix = true
            return chocolateBar
    }           else if (chocolateBar.flavor != "Mint") {
                chocolateBar.mix = false
            }
}

const bakeCandy = () => {
    if (chocolateBar.mix === true) {
        chocolateBar.bake = true
                return chocolateBar
    }       else if (chocolateBar.mix != true) {
            chocolateBar.bake = false
        }
    
}

const breakBark = () => {
    if (chocolateBar.bake === true)
            return chocolateBar.break = ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"]

}
/*buyChocolate()
addFlavoring(chocolateBar)
makeBarkMixture(chocolateBar)
bakeCandy(chocolateBar)
breakBark(chocolateBar)*/
console.log(chocolateBar)