//Javascript function that reverses a number

function reverseNumber(num)
{
	num = num.toString();
	return num.split("").reverse().join("");
}
console.log(Number(reverseNumber(123456789)));



//2. Javascript function which accepts an argument and return the type

const returnType =(data) =>{
        console.log(typeof(data))
    }
returnType("conduct");



//3. Javascript program to pass a 'javascript function' as a parameter

function addStudent(id, javascriptFunct)
{
    javascriptFunct();  
}

function multi() {
    console.log(3*3);
}

addStudent(1, multi);



//4. javascript function to get the function's name

const functionName = function(){
    console.log( arguments.callee.name );
}
functionName();

