
//Question 29
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of 
//independent if statements that check for certain fruits in your array.
// Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in
//your array. If the fruit is in your array, the if block should print a statement,
//such as You really like bananas!


let favFruits: string []= ["Mango","Apple","Pear","Guava","Peach","Melon"];
if (favFruits.includes("Banana")) {
console.log(`I would like to eat banana!`)
}else if(favFruits.includes("Mango")){
    console.log(`I would really like to eat Mango`)
} else{
console.log(`Fruits are not available`);
}

//Question 30
//Hello Admin: Make a array of five or more usernames, including the name 'admin'.
// Imagine you are writing code that will print a greeting to each user after they log 
//in to a website. Loop through the array, and print a greeting to each user:
//If the username is 'admin', print a special greeting, such as Hello admin, would you like
//to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let userName: string [] = ["Nihal","Ahmed","Ashraf","Raza","Umer","Admin"];
 for (let i=0;i<userName.length;i++)
if (userName[i]=="Admin"){
    console.log(`Hello ${userName[i]},would you like to see a status report?`)
}else{console.log(`Hello ${userName[i]}, thank you for logging in again.`);}

//Question 31
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.

let userName1: string [] = ["Nihal","Ahmed","Ashraf","Raza","Umer","Admin"];
userName1 = [];
if (userName1.length>0){

    for (let i=0;i<userName1.length;i++)
    if (userName1[i]=="Admin"){
        console.log(`Hello ${userName1[i]},would you like to see a status report?`)
    }else{console.log(`Hello ${userName1[i]}, thank you for logging in again.\n\n`);}
    console.log(`\nWe need to find some users!\n`);
}else{
console.log(`\n\n${userName1} We need to find some users`);
}
