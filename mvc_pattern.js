class StudentModel {
	constructor(rollNo, name) {
		this.rollNo = rollNo;
		this.name = name;
	}
	
	getRollNo() {
		return this.rollNo;
	}
	
	setRollNo(rollNo) {
		this.rollNo = rollNo;
	}
	
	getName() {
		return this.name;
	}
	
	setName(name) {
		this.name = name;
	}
	
}

class StudentView {
	constructor() {}
	
	printStudentDetails(studentName, studentRollNo) {
		console.log('Student: ');
		console.log('Name: ' + studentName);
		console.log('Roll No: ' + studentRollNo);
	}
}

class StudentController {
	constructor(studentModel, studentView) {
		this.studentModel = studentModel;
		this.studentView = studentView;
	}
	
	setStudentName(name) {
		this.studentModel.setName(name);
	}
	
	getStudentName(name) {
		return this.studentModel.getName();
	}
	
	setStudentRollNo(rollNo) {
		return this.studentModel.setRollNo(rollNo);
	}
	
	getStudentRollNo(rollNo) {
		this.studentModel.getRollNo();
	}
	
	updateView() {
		this.studentView.printStudentDetails(this.studentModel.getName(), this.studentModel.getRollNo());
	}
}

const studentModel = new StudentModel();
studentModel.setName('Robert');
studentModel.setRollNo('10');
//	console.log(studentModel);

const studentView = new StudentView();

const studentController = new StudentController(studentModel, studentView);
studentController.updateView();

studentController.setStudentName('John');

studentController.updateView();