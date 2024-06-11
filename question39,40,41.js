//Question 39
//City Names: Write a function called city_country() that takes in the name of a city
//and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value 
//that’s returned.
function city_country(city, country) {
    return `${city} ${country}`;
}
console.log(city_country, "Lahore, Pakistan");
console.log(city_country, "Dubai, UAE");
console.log(city_country, "New York,USA");
console.log(city_country, "London, UK");
//Question 40
//Album: Write a function called make_album() that builds a Object describing a 
//music album. The function should take in an artist name and an album title, and 
//it should return a Object containing these two pieces of information. Use the 
//function to make three dictionaries representing different albums. Print each 
//return value to show that Objects are storing the album information correctly. 
//Add an optional parameter to make_album() that allows you to store the number of 
//tracks on an album. If the calling line includes a value for the number of tracks,
// add that value to the album’s Object. Make at least one new function call that 
//includes the number of tracks on an album.
function myalbum(artistName, albumTitle) {
    return { artistName, albumTitle };
}
let firstAlbum = myalbum("Weeknd", "Starboy");
let secAlbum = myalbum("Akon", "Freedom");
let thirdAlbum = myalbum("Alok", "The Future is Ancestral");
console.log(firstAlbum);
console.log(secAlbum);
console.log(thirdAlbum);
function myalbum2(artistName, albumTitle, numberOfTracks) {
    return { artistName, albumTitle, numberOfTracks };
}
let first_Album = myalbum2("Weeknd", "Starboy", 18);
let sec_Album = myalbum2("Akon", "Freedom", 13);
let third_Album = myalbum2("Alok", "The Future is Ancestral", 9);
console.log(first_Album);
console.log(sec_Album);
console.log(third_Album);
//Question 41
//Magicians: Make a array of magician’s names. Pass the array to a function called 
//show_magicians(), which prints the name of each magician in the array.
let megicianNames = ["Nihal", "Nadeem", "Ahmed", "Usmam", "Umer"];
function show_magicians() {
    for (let megicianName of megicianNames) {
        console.log(megicianName);
    }
}
;
show_magicians();
export {};
