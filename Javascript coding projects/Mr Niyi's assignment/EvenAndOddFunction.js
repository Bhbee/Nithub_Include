//function that returns even or odd numbers in an array

function returnEvenNumbers(inputArray) {
    inputArray = inputArray.filter((number) => {
        if (number % 2 === 0)
        return true;
    }); 
    console.log(inputArray)
    
}
function returnOddNumbers(inputArray) {
    inputArray = inputArray.filter((number) => {
        if (number % 2 !== 0)
        return true;
    }); 
    console.log(inputArray)
    
}

const array = [1, 2, 3, 4, 5, 6]
returnEvenNumbers(array)
returnOddNumbers(array)
