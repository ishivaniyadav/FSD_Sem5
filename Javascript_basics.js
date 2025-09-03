console.log('hello world');
//three types of variable declaration
//TYPE 1
var myName; //older version approach --- here const and let won't be functional
myName='Shivani Yadav';
// gets hoisted 
console.log(myName); //es6 and onward version
//TYPE 2
const myName2='Shivani Yadav';
// doesn't gets hoisted 
// once assignment done cannot be reassigned
console.log(myName2); //es6 and onward version
//TYPE 3
let myName3='Shivani Yadav';
// doesn't gets hoisted 
// once assignment done can be reassigned
console.log(myName3);
//function
function a(){
    console.log("a");
}
a();
//hoisting - calling a function before defining
b();

function b(){
    console.log("b");
}
//code run se pehle rearranged called hoisting
//in javascript before interpretation it is rearranged so functions can be called before declaration without any error but later it has to be declared
// var gets hoisted but let and const doesn't get hoisted
//const and let is like final and int where once const assigned a value it cannot bbe changed.
function multi(a,b){
    console.log('multiply = '+a*b);
}
multi(2,2);
// data types  
// total 8 
const c=12;
const d=1.2;
const e=false;
const f='abc';
console.log("data type c=12 is "+ typeof c);
console.log("data type d=1.2 is "+ typeof d);
console.log("data type e=false is "+ typeof e);
console.log("data type f='abc' is "+ typeof f);

// comparison in js
const num=2;
const num2="2";
console.log(num==num2); //returns true as it checks value not data type
console.log(num===num2); // returns false as this checks data type and value both.

const x=true;
const y=false;
console.log(x&&y); //returns false

console.log(x||y); //returns true

//methods
const m="trying methods";
console.log("Length = "+m.length);
console.log(m.toUpperCase());

const n=`trying something new! :${m}`;  //using template iterals
console.log(n.toUpperCase());
//Technically string is object
//backtick hello we can do string interpolation
//we can use these backtrack for putting values in place of varible the information 
//will be updated accordingly all light weighter js functions wll work 
//we can use template literal for this kind of plugging in data

//Arrays - are objects
// using array literals
const product=['myproduct',120,true];
console.log(product);
console.log(product[1]);

const prod=[1,2,3,4,5,6,7,8,9,10];
let data=prod.find(function(item){
    return item==8;
})
console.log(data);

let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
 names.sort();
 console.log(names);

let nums= [1,53,33,56,74,77,12,2,1,4,9,0];
nums.sort(); //with numbers doesnt work for long list
console.log(nums);

nums.sort(function(a,b)
{return a-b});  //return ascending list
console.log(nums);

nums.sort(function(a,b)
{return a-b}); //return descending list
console.log(nums);

//object based language - no class is required ------- JAVASCRIPT 
//object oriented language- class to be declared

let item={
    car1: 'BMW',
    car2: 'Mercedes',
    car3: 'Rolls-Royce',
    car4: 'Mazda'
}
console.log(item.car2);
console.log(item["car3"]);
let inventory=[];
let vehicle={
    car1: 'BMW',
    car2: 'Mercedes',
    car3: 'Rolls-Royce',
    car4: 'Mazda'
}
inventory.push(vehicle);
console.log(inventory);

let k='parrot';
if(k){
    console.log("Parrot!!!");
}
else{  
    console.log("Not Parrot!!!");
}

let val=4;
switch(val){
    case 1: 
        console.log("BMW");
        break;
    case 2: 
        console.log("Mercedes");
        break;
    case 3:
        console.log("Mazda");
        break;
    case 4:
        console.log("Audi");
        break;
    case 5:
        console.log("Rolls Royce");
        break;
    default:
        console.log("No one");
}

//loops  in js

//for in loop -- for objects
let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
   };
   for (let prop in car){
    console.log(car[prop]);
   }

// for of loop -- for arrays
let na = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let name of na){
console.log(name);
}

function fruit(name){
    console.log(`fruit is ${name}`);

}

fruit('Mango');

function color(name){
    return name;
}

console.log(color("blue"));
// using variable
const colors = color("red");
console.log(colors);

function login(username, password){
    if(username== "admin" && password == "admin"){
        return true;
    }
    else{
        return false;
    }
}
console.log(login("admin","password")); //false
console.log(login("admin","admin"));  //true

//default parameter
function login(username="admin", password="password"){
    if(username== "admin" && password == "admin"){
        return true;
    }
    else{
        return false;
    }
}
console.log(login()); //false

function square(num){
    return num*num;
}
console.log(square(5));

//arrow function or lambda function
//dont use function keyword
//anonymous
// ()=>{} 
const squared = (x)=>{return x*x}
const squarednum= squared(5);
console.log(squarednum);

//simplified for one parameter
const squar = x=>x*x
const squa= squar(5);
console.log(squa);

//spread operator
let spread = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...spread, "and", "very", 
               "powerful"];
console.log(message); //['JavaScript', 'is', 'so', 'much', 'fun', 'and', 'very', 'powerful']

//scoping

//global variables
let age=20;
var age2=30;
const age3=40;

function abc(){
    console.log(age, age2, age3); //locally
}
abc();
console.log(age, age2, age3); //globally

// //local 
// function abc(){
//     //local variable
//     let age4=60; 
//     var age5=70;
//     const age6=80;

//     console.log(age4, age5, age6); //locally
// }
// abc();
// console.log(age4, age5, age6); //globally

// var is function scope so other than function var is always global(like if declare using condidtonal is global)
// let and const is block scope (inside curly bracket local -- outside curly bracket global)

//immediately invoked function expression

(function () {
    console.log("IIFE!");
})();

 (()=>{
 console.log("run right away");
 })();

 // recursive function
 function getRecursive(nr) {
    console.log(nr);
    if (nr > 0) {
       getRecursive(--nr);
     }
    }
    getRecursive(3);

    // fuction callback   ----pass a function as a parameter
    
    let youGotThis = function () {
        console.log("You're doing really well, keep coding!");
        };
        setTimeout(youGotThis, 1000);
   //filter
   let arr = ["squirrel", 5, "Tjed", new Date(), true];
   function checkString(element, index) {
    return typeof element === "string";
   }
   let filterArr = arr.filter(checkString);
   console.log(filterArr);
//find


//map
let arr9 = [1, 2, 3, 4];
 let mapped_arr = arr9.map(x => x + 1);
 console.log(mapped_arr);

 //DOM Manipulation
 const element= document.getElementById("parrot");
 element.textContent="Hello, world!";
 console.log(element);

console.log("*9*9**9*999***99*9*****9*999*9***99*999**9***99*9****9***9**999**");