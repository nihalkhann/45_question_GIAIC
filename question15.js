let guestList = ["Ali", "Basit", "Maryam", "Ahmed", "Aysha"];
//print the name who cant make dinner
let unableAttend = guestList.splice(1, 1)[0];
console.log(`${unableAttend} cant make dinner`);
guestList.push("iqra");
console.log(guestList);
guestList.forEach(guest => {
    console.log(`Dear ${guest} you are cordially invited`);
});
export {};
