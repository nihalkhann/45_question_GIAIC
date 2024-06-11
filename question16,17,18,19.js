//Question 16
//More Guests: You just found a bigger dinner table, so now more space is available.
//Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of 
//your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new 
//guest to the end of your list. • Print a new set of invitation messages, one for 
//each person in your list.
//Question 16
let guest = ["Nihal", "Ahmed", "Arsalan", "Fatima"];
console.log(`Good News! we have arrange a big dinner table so we invite 3 more guest.`);
guest.unshift("Raza");
guest.splice(2, 0, "Ashraf");
guest.push("Nadeem");
console.log(guest);
for (let i = 0; i < guest.length; i++) {
    console.log(`Dear ${guest[i]} you are invited for dinner \nThank you.`);
}
//Question 17
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive
in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying
that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each
time you pop a name from your list, print a message to that person letting them know you’re
 sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still
invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make
 sure you actually have an empty list at the end of your program.*/
console.log("Sorry we can not arrange big table, Only Two peoples will be invited.");
while (guest.length > 2) {
    let remove_Guest = guest.pop();
    console.log(`\nDear ${remove_Guest}, Sorry you are not invited to dinner\n`);
}
for (let i = 0; i < guest.length; i++) {
    console.log(`\nDear ${guest[i]}, you are still invited for dinner\n`);
}
guest.splice(0, 2);
console.log(guest);
//Question 19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a
//message indicating the number of people you are inviting to dinner.
console.log(`\nTotal No of guest are: ${guest.length}\n\n`);
/*Question 18
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order
 has changed.
*/
let places = ["Karachi", "Lahore", "Islamabad", "Quetta", "Muree"];
//Print your array in its original order.
console.log(`Original Order [${places}]\n`);
let origOrder = places.slice();
//Print your array in alphabetical order without modifying the actual list.
console.log(`Alphabetical Order [${places.sort()}]\n`);
//Show that your array is still in its original order by printing it.
console.log(`Original Order [${origOrder}]\n`);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`Reverse Alphabetical Order [${places.sort().reverse()}]\n`);
// Show that your array is still in its original order by printing it again.
console.log(`Original Order [${origOrder}]\n`);
// //• Reverse the order of your list. Print the array to show that its order has changed.
console.log(`Reverse List [${origOrder.reverse()}]\n`);
// //Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(`Rereverse (back to Original position) [${origOrder.reverse()}]\n`);
// //Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
let sortPlaces = places.sort();
console.log(`Alphabetic Order [${sortPlaces}]\n`);
// // Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order
// //has changed.
console.log(`Reverse Alphabetic Order [${sortPlaces.reverse()}]`);
export {};
