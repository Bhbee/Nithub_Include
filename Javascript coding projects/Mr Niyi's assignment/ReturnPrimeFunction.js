//function that returns all prime number in the array

function returnPrime(theArray){
    theArray = theArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
      });
    console.log(theArray)
}

const numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]
returnPrime(numArray)