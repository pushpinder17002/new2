/*
"use strict";//use for newer veriosn of code
let name="abc"// datatypes 
let age=18// number
let isloggedin=false//bool datatype
// numbers= 2 to power of 54
// bigint
//string=""
//null standalone value
console.log(typeof(isloggedin))
console.log(typeof(null))
"33"=33 We can convert string into number
"33abc"=NAN(Not a number) this string cannot be converted into number as there alphabet present 
true=1,false=0
""=false
"abc"=true 
*/
// let score="33"
// console.log(typeof(score))
// let value_in_number=Number(score)
// console.log(typeof(value_in_number))

// let number=34
// let string_number=String(number)
// console.log(string_number)
// console.log(typeof(string_number))

// ***************OPerations***********
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

// let name="abc"
// let last_name=" xyz"
// let full_name=name+last_name
// console.log(full_name)

// let num1,num2,num3
// num1=num2=num3=2+2
// console.log(num2)

// prefix and postfix operator in prefix operator the value is incremented and the stored to variable 

// let x=3
// let y=++x
// console.log(x)
// console.log(y)

// Comprarion of Data types

// console.log("2"===2) strict checking where data type is compared so this is returing false as "2" is a string and 2 is a number so theere are not equal
//  console.log("02">1)

// console.log(null==0)
// console.log(null>0)
// console.log(null>=0)

// ******* Summary on Data Types ********
// primitive Dataypes{call by value}
// 7 types [string, number,bool,null,undefined,symbol,bigint]

// Referrence/non primitive datatype{call by referrence}
//  arrays, objects, function

// avaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// const Id=Symbol('124')
// const Another_id=Symbol('124')

// console.log(Id===Another_id)


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// *********Memory alloaction*********
// Stack(primitive data type) and Heap(non primitive datatype) 

// primitive data types are stored in a stack from where we get a value of data which is stored in stack memory

// let user1='pushpinder'
// let user2=user1
// user2="abc"
// console.log(user2)
// console.log(user1)

// Non primitive datatypes are stored in a heap from where we get reference of the variable which we are calling

// let user1={
//     email:"user.gmail.com",
//     name:"pushpinder "
// }
// let user2=user1
// user2.name="abc"
// console.log(user2.email,user2.name)

//  *********** STRING ***********
// old method of writing strings
// let name="pushpinder "
// let age=20
// console.log(name+ age+" value")

//  New method of writng strings
// let name="pushpinder "
//  let age=20
//  console.log(`Hello my name is ${name} my age is ${age} `)

// Declaring Strings
// let game_name=new String("efootball")
// console.log(game_name.length)
// console.log(game_name.toUpperCase())
// console.log(game_name.charAt(4))
// console.log(game_name.iOf('t'))

// let new_string="abcdefgh"
// let another_string=new_string.substring(0,4)
// console.log(another_string)
// console.log(another_string.slice(-4,2))

// Triming string 

// let trim_string=("     ABDSCD    ")
// console.log(trim_string)
// console.log(trim_string.trim())

//  ******* NUMBERS AND MATHS ********

// const number=100.45
// console.log(number)
//  let account= new Number(234567)
// console.log(account.toString().length)
// console.log(account.toFixed(2))
// console.log(account.toPrecision(2))

// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.6))
// console.log(Math.floor(4.6))

// console.log(Math.random())

// console.log((Math.random()*10)+1)

// const min=10
// const max=20
// console.log(Math.floor(Math.random()*(max-min +1)+min))

//  ********* DATE AND TIME **********

// ***********Array************

// let myArr=[0,1,2,3,4,5]
// const myArr2=new Array(1,2,3,4,5,6,7)

// console.log(myArr2[0])

//  Array Methods
// let myArr=[0,1,2,3,4,5]
// console.log(myArr.push(6))
// console.log(myArr)
// myArr.unshift(7)
// myArr.pop()
// console.log(myArr.includes(9))
// console.log(myArr.jOf(9))

// const myArr=[1,2,3,4,5,6,7]
// const newArr=myArr.join()
// console.log(typeof(myArr))
// console.log(typeof(newArr))

// const number=[1,2,3]
// const alphabet=[8,9,10,11]

// PUSH METHOD

// alphabet.push(number)
// console.log(alphabet)

// Concat method

// const new_Arr=alphabet.concat(number)
// console.log(new_Arr);

//  SPREAD method 

// const new_Arr2=[...number, ...alphabet]
// console.log(new_Arr2)

// const new_arr3=Array.from("pushpinder")
// console.log(new_arr3);
// const name1=100
// const name2=200
// const name3=300
// console.log(Array.of(name1,name2,name3));

//  ********** OBJECT**********
// singleton objects
// object.create

// object literalls

// const sym= Symbol("key1")
// const new_object={
//     name: "ramesh",
//     age: 18,
//     [sym]:"mykey1",
//     location: "delhi",
//     Isloggedin: false,
//     LastLoggedInDate:["Monday","Tuesday"]

// }
// // console.log(new_object["age"]);
// // console.log(typeof(new_object[sym]));
//  new_object.greeting=function (s) {
//     console.log("hello");
    
//  }

// const my_Sym=Symbol("key1")
// const juser= {
//     Name:"abc",
//     my_Sym:"MyKey1",
//     age:18,
//     Location:"Delhi",
//     Is_logged_in:false,
//     Last_login: ["Monday","Sunday"]
// }
// // console.log(juser.Name)
// // console.log(juser["Name"])
// console.log(typeof juser[my_Sym]);


// const user1={}

// user1.name="Pushpinder"
// user1.age=18
// user1.IS_logged_in=false

// console.log(user1);

// *********** Nesting of OBjects************
// const user2={
//     user_Fullname:{
//         User_name:{
//             first_name:"abc",
//             Last_name:"cdf"
//         }
//     }
// }
// console.log(user2.user_Fullname.User_name.Last_name);
// const obj1={1:"a",2:"b",3:"c"}
// const obj12={4:"d",5:"e",6:"f"}
// const obj3={...obj1, ...obj12}
// console.log(obj3);

// const user2={
//     Name:"pushpinder singh",
//     age:22,
//     Is_Logged_in:false
// }
// console.log(Object.keys(user2));
// console.log(Object.values(user2));
// console.log(Object.entries(user2));
// console.log(user2.hasOwnProperty("gender"));

// const User3={
//     Name:"Pushpinder",
//     Phone_Number:8851046973,
//     Gender:"Male"
// }
// const {Name:naam}= User3
// console.log(naam);

// ********* FUNCTONS**********

// function Say_My_name(){
//     console.log("P")
//     console.log("u")
//     console.log("s")
//     console.log("h")
//     console.log("P")
//     console.log("i")
//     console.log("n")
//     console.log("d")
//     console.log("e")
//     console.log("r")
// }
// Say_My_name()
// function Sum_of_two_number(num1,num2) {
//     console.log(num1+num2);
    
// }
// Sum_of_two_number(2,4)

// function sum(num1,num2) {
//     let result=num1+num2
//     return result
// }
// console.log(sum(2,3));

// function Addition(Number1,Number2) {

//     return Number1+Number2
// }
// console.log(Addition(2,5))
// 
// function Is_Logged_in(Username="abc") {
//     if(!Username){
//         console.log("Please enter a valid name");
//         return
//     }
//     return `${Username} is logged in `
// }
// console.log(Is_Logged_in("Pushpinder "));
// REST OPERATOR AND SPREAD OPERATOR 

// function Calculating_Cart_Price(val1,val2,...num1) {
//     return num1
// }
// console.log(Calculating_Cart_Price(100,200,300,400,500));

// PAssing an Array and object in functions
// const user4={
//     Name:"Pushpinder",
//     age:22,
//     Gender:"Male"
// }
// function handle_object(Any_object) {
//     console.log(`My name is ${Name},my age is${age}`)
    
// }
// handle_object()

// function one() {
//     const user="pushpinder"
//     function two() {
//         const isloggedin=true
//         console.log(user);
        
//     }
//     return user
// }
// console.log(one())

// function addone(num1) {
//     return num1+1
// }
// console.log(addone(5))

// const sum= function addtwo(num2) {
//     return num2+2
// }
// sum(6)

// const user5={
//     user_name:"Pushpinder",
//     age:22,
//     welcome_message:function (){
//         console.log(`${this.user_name} , hello sir`);
        
//     } 
// }
// user5.welcome_message()
// user5.user_name="sam"
// user5.welcome_message()
// console.log(this);
// function one() {
//     const user="Pushpinder"
//     console.log(this.user);
    
// }
// one()
// ********* ARROW KEYWORD **********

// const user= () => {
//     let user_name="Pushpinder "
//     console.log(user_name)
// }
// user()

// const add=(num1,num2) => {
//     return num1+num2
// }
// console.log((add(4,5)));

// const addtwo = (num1,num2)=> (num1+num2)
// console.log((addtwo(3,5)));

// const name=()=> ({userName:"pushpinder"})
// console.log(name());

// IMMEDIATELY INVOKED FUNCTION EXPRESSION       (IMportant for interview)
// (function one() {
//     console.log(`DB CONNECTED`);
    
// })();
// ((Name)=>{
//     console.log(`DB CONNECTED TWO ${Name}`);
    
// })("Pushpinder ")

// const Is_logged_in=true
// const debit_card=true
// if(Is_logged_in && debit_card && 2===2){
//     console.log("allowed for transactions");
    
// }
// console.log("out of conditional flow");

//  const Is_Logged_in_edge=true
//  if(Is_Logged_in_google||Is_Logged_in_edge){
//     console.log("Allow user ");
    
//  }
// const month=3
// switch (month) {
//     case 1:
//         console.log("jan"); 
//         break;
//     case 2:
//         console.log("feb"); 
//         break;
//     case 3:
//         console.log("march"); 
//         break;

//     default:
//         break;
// }

// ******* Truthy and falsey values **********
//  Falsy value are [false ,0,-0,bigInt 0n,null,undefined,NaN,""]
// TRUTHY value are["0","false"," ",[],{},function(){}]
// const my_arr=[]
// if (my_arr.length===0) {
//     console.log("empty array");
    
// }
// const my_obj={}
// if (my_obj.keys===0) {
//     console.log("empty array");
    
// }
//  **********Iterations
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
//     if (i==5) {
//         console.log("5 qwqe");
        
//     }
    
// }
// for (let i = 0; i < 10; i++) {
//     console.log(`Outer loop :${i}`);
//     for (let j = 0; j < 10; j++) {
//         const element = j;
//         console.log(`Inner loop :${j} and outer loop :${i}`);   
//     }  
// }
//  break and continue
// for (let index = 1; index <= 20; index++) {
//     if (index== 5) {
//         console.log(`5 detected`);
//         break
//     }
//     console.log(`value of inndex :${index}`);
//     ;
    
// }
// for (let index = 1; index <= 20; index++) {
//     if (index== 5) {
//         console.log(`5 detected`);
//         continue
//     }
//     console.log(`value of inndex :${index}`);
//     ;
    
// }
//  While loop
// let index= 0
// while (index<=10) {
//     console.log(`value of index ${index}`);
//     index++
// }
// let arr=["a","b","c","d"]
// let i=0
// while (i <arr.length) {
//     console.log(`the value of array:${arr[i]}`);
//     i++
// }
// let score=0
// do {
//     console.log(`Score value:${score}`);
//     score++
// } while (score<=10);
//  Array Loops ( important topic for interview )[ high order Array Loops]
// const my_arr=[1,2,3,4,5,6,7,8]
// for (const num of my_arr) {
//     console.log(num);
    
// }
// const name="pushpinder"
// for(const alpha of name){
//     console.log(`alphabets in name:${alpha}`)
// }
// const map=new Map()
// map.set("IND","India")
// map.set("usa","united sate of america")
// map.set("jap","japan")
// // console.log(map);
// for (const [key,value] of map) {
//     console.log(key,":-",value);
    
// }
// const My_arr=["a","b","c","d","e"]
// for (const key in My_arr) {
//     console.log(My_arr[key]);
    
// }
// const map=new Map()
// map.set("IND","India")
// map.set("usa","united sate of america")
// map.set("jap","japan")
// for (const key in map) {
//     console.log(map);  
// }

// const coding=["c++","python","ruby","javascript","java","swift"]
// // coding.forEach( function (item) {
// //     console.log(item);
    
// // })
// coding.forEach( (item,index,arr)=>  {
//     console.log(item,index,arr);
    
// })
// const coding_file=[
//     {
//         "language":"javascript",
//         "language_file_name":"js"
//     },
//     {
//         "language":"java",
//         "language_file_name":"java"
//     },
//     {
//         "language":"python",
//         "language_file_name":"phy"
//     },
//     {
//         "language":"html",
//         "language_file_name":"js"
//     },
// ]
// coding_file.forEach( (item) =>{
//     console.log(item.language_file_name);
    
// })
//  ********* FILTERS ************(IMPORTANT)
const my_nums=[1,2,3,4,5,6,7,8,9,10]
// const new_nums=my_nums.filter( (num) => {
//     return num>4
// } )
// console.log(new_nums);

// const new_nums=[]
// my_nums.forEach( (num) => {
//     if (num>4) {
//         new_nums.push(num)
//     }
// })
// console.log(new_nums);
// const new_abc=my_nums.map( (num) => {
//     return num+10
// })
// console.log(new_abc);

// const number=[1,2,3]
// const my_total=number.reduce( function (acc,currVal) {
//     console.log(`Acc value :${acc}, CurrVal: ${currVal}`);
    
//     return acc+currVal
// },0)
// console.log(my_total);
// const new_obj=[
// {
//     course_name:"a1",
//     price:4500
// },
// {
//     course_name:"a2",
//     price:5500
// },
// {
//     course_name:"a3",
//     price:8500
// },
// {
//     course_name:"a4",
//     price:9700
// }
// ]
// const price=new_obj.reduce( (acc,item) =>{
//    return acc+ item.price
// },0)
// console.log(price);




