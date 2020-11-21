class Student {
    constructor(id, firstName, lastName, fatherName, classEnrolled,
        age, phoneNumber, subject, year, semester, status ) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.fatherName = fatherName;
            this.classEnrolled = classEnrolled;
            this.age = age;
            this.phoneNumber = phoneNumber;
            this.subject = subject;
            this.year = year;
            this.semester = semester;
            this.status = status;
    }
}

module.exports = Student;