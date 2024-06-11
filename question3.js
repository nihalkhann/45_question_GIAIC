//lower case
let personName = "Nihal";
console.log("lowercase:", personName.toLocaleLowerCase());
//upper case
console.log("uppercase:", personName.toLocaleUpperCase());
//tittle case
console.log("tittle:", personName.replace(/\bw/g, c => c.toUpperCase()));
export {};
