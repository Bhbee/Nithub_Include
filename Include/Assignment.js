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

//5. Model a school
class School{
    constructor(nameOfSchool, numOfDepartments){
        this.departments = numOfDepartments;
        this.name = nameOfSchool;
        this.arrayOfStudents = [];
    }

    admitNewStudent(studentInfo){
        let displayMessage;
        this.arrayOfStudents.push(studentInfo);

        displayMessage = "A new Student has been admitted!"
        console.log(this.arrayOfStudents)
        document.getElementById("data").innerHTML = displayMessage;

    }

    rusticateStudent(matricNumber){
        let displayMessage;
        let student = this.arrayOfStudents.find(student => student.matricNo === matricNumber);
        if (student ===undefined){
            displayMessage = "Student with matric number: "+matricNumber+ " does not exist!"
        }
        else {
            this.arrayOfStudents = this.arrayOfStudent.filter(Student => Student !==student)
            alert("Rustication Sucessful")
            displayMessage = "A new Student has been rusticated!"
        }
        document.getElementById("data").innerHTML = displayMessage;
    }
}


let Unilag = new School("University Of Lagos", 25);
Unilag.admitNewStudent({
    "fullname": "Adetayo Boluwatife",
    "department":"Computer Science",
    "sex": "Female",
    "matricNo": Math.floor(Math.random() * 1000000000)
})
Unilag.admitNewStudent({
    "fullname": "Francis Jude",
    "department":"Mathematics Education",
    "sex": "Male",
    "matricNo": Math.floor(Math.random() * 1000000000)
})
Unilag.rusticateStudent(1234677)
