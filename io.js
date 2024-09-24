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
// console.log(game_name.indexOf('t'))

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
// console.log(myArr.indexOf(9))

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

function sum(num1,num2) {
    let result=num1+num2
    return result
}
console.log(sum(2,3));
