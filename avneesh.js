student = {
    firstName: 'Avneesh',
    lastName: 'Singh',
    studentAge: 20,
    enrollmentNo: 'A2305218462',
    studentInfo: function(){
        return this.firstName + " " + this.lastName + "\n" + this.enrollmentNo + "\n" + this.studentAge;
    }
};
console.log('The student details are:');
console.log(student.studentInfo());
