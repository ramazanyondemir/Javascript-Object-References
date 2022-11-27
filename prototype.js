function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}
// Her kullanıcı için calculateSalary fonksiyonu oluşturmak
// bellekte gereksiz yer kaplayacağı için bu şekilde prototype ile
// Employee nesnesine bir property(özellik) tanımladık.
// Bütün çalışanlar(employees) için bu method kullanılabilir.
// Bu özellikler objenin kendi bünyesinde yer almaz, Prototype(__proto__) kısmında yer alır

Employee.prototype.calculateSalary = function () {
  let salary = this.salary;
  let month = new Date().getMonth() + 1;
  let tax = 0,
    total = salary * month;

  if (total <= 20000) {
    tax = total * 0.2;
  } else if (total > 20000 && total <= 30000) {
    tax = total * 0.25;
  } else {
    tax = total * 0.3;
  }
  return { tax: tax, paid: total - tax };
};

const employe = new Employee("Ahmet", 3000);
// console.log(employe.calculateSalary());

// Object.create
// Var olan bir nesnenin özelliklerinin yeni obje'nin proto kısmına aktarılması

const degisken = "bu bir degisken";
let personProto = {
  degisken,
  calculateAge: function () {
    let year = new Date().getFullYear();
    return year - yearOfbirtday;
  },
};

let burak = Object.create(personProto);
// console.log(burak);

// Prototype inheritance
let Person = function (name, yearOfbirtday, job) {
  this.name = name;
  this.yearOfbirtday = yearOfbirtday;
  this.job = job;
};

Person.prototype.calculateAge = function () {
  let age = new Date().getFullYear - this.yearOfbirtday;
  return age;
};

let Teacher = function (name, yearOfbirtday, job, subject) {
  Person.call(this, name, yearOfbirtday, job);
  this.subject = subject;
};

// Teacher'ın yapıcı metodunun değiştirilmesi.
Teacher.prototype.constructor = Teacher;

// Teacher'ın özelliklerinin miras alınması.
Teacher.prototype = Object.create(Person.prototype);

let hakan = new Teacher("Hakan", 1999, "Teacher", "math");

console.log(hakan);
