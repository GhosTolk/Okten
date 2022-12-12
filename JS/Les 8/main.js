// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let tenUsers = [];
//
// tenUsers.push(new User('15', 'Jacob', 'Vasovski', 'dlakjdlksajda@gmail.com', '+9566565461'));
// tenUsers.push(new User('23', 'Jacob', 'Vasovski', 'dlakjdlksajda@gmail.com', '+9566565461'));
// tenUsers.push(new User('3', 'Jacob', 'Vasovski', 'dlakjdlksajda@gmail.com', '+9566565461'));
// tenUsers.push(new User('4', 'Jacob', 'Vasovski', 'dlakjdlksajda@gmail.com', '+9566565461'));
// tenUsers.push(new User('52', 'Jacob', 'Vasovski', 'dlakjdlksajda@gmail.com', '+9566565461'));
// tenUsers.push(new User('6', 'Jacob', 'Vasovski', 'dlakjdlksajda@gmail.com', '+9566565461'));
// tenUsers.push(new User('78', 'Jacob', 'Vasovski', 'dlakjdlksajda@gmail.com', '+9566565461'));
// tenUsers.push(new User('8', 'Jacob', 'Vasovski', 'dlakjdlksajda@gmail.com', '+9566565461'));
// tenUsers.push(new User('95', 'Jacob', 'Vasovski', 'dlakjdlksajda@gmail.com', '+9566565461'));
// tenUsers.push(new User('10', 'Jacob', 'Vasovski', 'dlakjdlksajda@gmail.com', '+9566565461'));
// console.log(tenUsers);
//
// let filteredUsers = tenUsers.filter(value => value.id % 2 === 0);
// console.log(filteredUsers);
//
// let sort = tenUsers.sort((u1, u2) => {
//     return u1.id - u2.id;
// });
// console.log(sort);

// class User {
//     constructor(id, name, surname, email, phone, order = []) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let tenUsers = [];
// tenUsers.push(new User('15', 'Jacob', 'Vasovski', 'dlakjdlksajda@gmail.com', '+9566565461', ['milk', 'apple']));
// tenUsers.push(new User('23', 'Jacob', 'Vasovski', 'dlakjdlksajda@gmail.com', '+9566565461', ['milk', 'apple', 'chees', 'chees']));
// tenUsers.push(new User('3', 'Jacob', 'Vasovski', 'dlakjdlksajda@gmail.com', '+9566565461', ['milk', 'apple', 'chees']));
// tenUsers.push(new User('4', 'Jacob', 'Vasovski', 'dlakjdlksajda@gmail.com', '+9566565461', ['milk', 'apple', 'chees', 'chees', 'chees']));
// tenUsers.push(new User('52', 'Jacob', 'Vasovski', 'dlakjdlksajda@gmail.com', '+9566565461', ['milk', 'apple', 'chees']));
// tenUsers.push(new User('6', 'Jacob', 'Vasovski', 'dlakjdlksajda@gmail.com', '+9566565461', ['milk', 'apple']));
// tenUsers.push(new User('78', 'Jacob', 'Vasovski', 'dlakjdlksajda@gmail.com', '+9566565461', ['milk', 'apple', 'chees', 'chees', 'chees', 'chees', 'chees']));
// tenUsers.push(new User('8', 'Jacob', 'Vasovski', 'dlakjdlksajda@gmail.com', '+9566565461', ['milk']));
// tenUsers.push(new User('95', 'Jacob', 'Vasovski', 'dlakjdlksajda@gmail.com', '+9566565461', ['milk', 'apple', 'chees', 'chees', 'chees', 'chees', 'chees', 'chees', 'chees']));
// tenUsers.push(new User('10', 'Jacob', 'Vasovski', 'dlakjdlksajda@gmail.com', '+9566565461', ['milk', 'apple', 'chees']));
// console.log(tenUsers);
//
// let sort = tenUsers.sort((a, b) => {
//     return a.order.length - b.order.length;
// });
// console.log(sort);


// function Car(model, maker, year, maxSpeed, engine) {
//     this.model = model;
//     this.maker = maker;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//
//     this.info = function () {
//         for (let key in this) {
//             if (typeof this[key] !== 'function')
//                 console.log(`${key} -- ${this[key]}`)
//         }
//     };
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// };
//
// let BMW = new Car('328i', 'BMW', '2016', '240', '2.0l');
//
// BMW.increaseMaxSpeed('333');
// BMW.addDriver('ffffff');
// BMW.info();
// console.log(BMW)

// class Car {
//     constructor(model, maker, year, maxSpeed, engine) {
//         this.model = model;
//         this.maker = maker;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//         };
//
//         this.info = function () {
//             for (let key in this) {
//                 if (typeof this[key] !== 'function')
//                     console.log(`${key} -- ${this[key]}`)
//             }
//         };
//
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxSpeed += newSpeed;
//         };
//
//         this.changeYear = function (newValue) {
//             this.year = newValue;
//         }
//
//         this.addDriver = function (driver) {
//             this.driver = driver;
//         }
//     };
// }
//
// let BMW = new Car('328i', 'BMW', '2016', '240', '2.0l');
//
// BMW.increaseMaxSpeed('333');
// BMW.addDriver('ffffff');
// BMW.info();
// console.log(BMW)

function Popel(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

