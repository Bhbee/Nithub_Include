//function that accepts an array and returns the min & max number

//Method 1
const newArray = [23, 45, 67, 90, 4, 16]
console.log(Math.min.apply(Math, newArray));
console.log(Math.max.apply(Math, newArray));

//Method 2
function mini(myArr){
    var al = myArr.length;
    minimum = myArr[al-1];
    while (al--){
        if(myArr[al] < minimum){
            minimum = myArr[al]
        }
    }
    return minimum;
};
function maxi(myArr){
    var al = myArr.length;
    maximum = myArr[al-1];
    while (al--){
        if(myArr[al] > maximum){
            maximum = myArr[al]
        }
    }
    return maximum;
};

const nArray = [23, 45, 67, 90, 4, 16]
var m = mini(nArray);
var n = maxi(nArray);
console.log(" The minimum is number : " +m+  ", while the maximum is: " +n)

