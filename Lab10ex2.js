//asing for users age
var age= prompt("what is your age?");

//getting the current year
var date= new Date();
var year= date.getFullYear();

//subtracting age from current year
var birthYear=year - age;
document.write(birthYear);
