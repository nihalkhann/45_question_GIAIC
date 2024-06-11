//Question 20
//Think of something you could store in a array. For example, you could make a list of mountains, rivers,
//countries, cities, languages, or anything else you’d like. Write a program that creates a list containing
// these items.
let cities = ["Karachi", "Islamabad", "Quetta", "Lahore", "Multan", "Peshawer"];
cities.forEach((i) => {
    console.log(i);
});
/* Question 21
They think of something you could store in a TypeScript Object. Write a program that creates Objects
//containing these items.*/
let object = {
    Name: "Laptop",
    Color: "Black",
    Speed: "fast",
    Version: 8,
    Deal: true,
    instock: false,
    Price: 85000,
};
console.log(object);
// /*Question 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make
// //one happen. Change an index in one of your programs to produce an index error. Make sure you correct the
// //error before closing the program.*/
let guest = ["Arsalan", "Hammad", 56, "Rabia", "Fahad", 48, "Hudaim"];
console.log(guest[8]);
// /*Question 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
//  Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
let car = 'Toyota';
console.log("Is car=='toyota?' I predict True.");
console.log(car == 'toyota');
console.log(car == 'Toyota');
let person = 'Sohail';
console.log(person == "Majid");
console.log(person == "Nihal");
let fruit = "Apple";
console.log(fruit == "Apple");
let favNo = 56;
console.log(favNo == 78);
let city = "Karachi";
console.log(city == "Islamabad");
let deal = "Off";
console.log(deal == "Off");
let color = "Green";
console.log(color == "Green");
let gender = "Female";
console.log(gender == "male");
let day = "Monday";
console.log(day == "Sunday");
let month = "January";
console.log(month == "March");
export {};
