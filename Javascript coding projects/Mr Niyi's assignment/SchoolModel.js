//Model a school

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
Unilag.rusticateStudent(1234677)
