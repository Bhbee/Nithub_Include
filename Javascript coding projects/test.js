//function to check if a numbernis divisible by 2
console.log("Boluwatife")
function divisibility1 (number){
    if (Number.isNaN(number % 2)){
        throw Error('Not a number')
    }
    if (number % 2 ===0) return true
    else return false
}

const divisibility2 = function (number) {
    if (number % 2 ===0) return true
    else return false
}

const divisibility3 =(number) => {
    if (number % 2 ===0) return true
    else return false
}
const arr = [1,2,3,4,5]
for (const num of arr){
    console.log(divisibility1(num))
    console.log(divisibility2(num))
    console.log(divisibility3(num))
}