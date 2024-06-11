
//Question 36
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed
// on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on 
//it. Call the function.

function make_shirt(size: number ,label: string)
{ return `My shirt size is ${size}  and my label is ${label}`;

}
let myfun = make_shirt(36,'"The sunny day"');
console.log(myfun);


//Question 37
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 
//I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with
// a different message.

function make_shirt1(label:string,size:string = "Large"){
return `${size} ${label}`
}
let myfunc= make_shirt1("I love TypeScript")
console.log(myfunc)

function make_shirt2(label:string,size:string = "Medium"){
    return ` ${size}  ${label}`
    }
    let myfunct= make_shirt2("I love TypeScript")
console.log(myfunct)

function make_shirt3(size:string, label:string){
    return `${size} ${label}`
    }
    let myfunction= make_shirt3("Any size","I love TypeScript")
    console.log(myfunction)
    

    //Question 38
    //Cities: Write a function called describe_city() that accepts the name of a city and its country. The function 
    //should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default 
    //value. Call your function for three different cities, at least one of which is not in the default country.

    function describe_city(nameofcity:string,country:string="pakistan"){
        return `${nameofcity} is in ${country}`
    } 
    let city1 = describe_city("Karachi");
    let city2 = describe_city("Lahore");
    let city3 = describe_city("Islamanad");
    let city4 = describe_city("New york" , "USA");
    console.log(city1);
    console.log(city2);
    console.log(city3);
    console.log(city4);
