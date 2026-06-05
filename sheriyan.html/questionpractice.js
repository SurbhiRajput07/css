//this is question practice file on js which include output prediction,explanation,

// 1st topic is hoisting + TDZ

/* console.log(a); //it print undefined cause var reserve memory even before intiallisation ,it break into var a ->and memory is reservred and is given undefined by default, a = 1;
console.log(b);  
 //referenceerror
// in caes of let and const it recuried intiallisation, before this is present i TDZ zone (6-9), (7-10).
console.log(c);
var a = 10;
let b = 20;
const c = 30;*/
//2nd what exist in memory before execution starts?
 /* console.log(a);  //undefined 
var a = 1;

function a(){} //whole function ->in memory creation part.
// functin is not calling out.
console.log(a);*/

//3rd why block doesn't matter

/*function test(){    // excution context is created, but nothing to run.
    console.log(a); //it print undefined.

    if (true){
        var a = 10;  //brand new excution context is created in 2 part, 1st memory creation , 2nd is code context. after code run var is assign 10.
    }
    //var is a global scope it doesn't respect block or function.
    console.log(a); // so value is access to outer function,it print 10.
}
test(); // function callout*/

//4th 

/*#foo();  // var foo is undefined 
var foo = function(){
    console.log("a");
};

function foo(){
    console.log("b");
}
foo();*/

//5th
/*let q = 10; // it doesn't take global a because let is respect scope. and we console inside function so it doesn't take a which is outside the function.

function test(){
    cosole.log(q);
                // we want to cosole before initi... so it is present in tdz zone.
    let q = 20;
}  //referenceerror : console is not defined at test.
test();*/

//6th error and why

/*const obj={
    name:"js"
};                          // typeerror 
obj.name = "javascritp";  // we can not change /reassignment value of const.

console.log(obj);
obj={};*/
//7th
/*{
    console.log (a);  // it is a object.console before initi...
    let a=5;
}*/

// 8th scope+shadowing
 /* var x= 1;

  function test(){
    console.log(x);  //it console undefined.
    var x= 2;
    console.log(x); //it 2
  }
  test();
  console.log(x);*/ // it 1

  //lexical + lexical scope + scope chain 

  //#9th why and what it prints
 /*let name ="global"; 

 function outer(){
    let name ="outer";

    function inner(){
        console.log(name); // it try it access name in it's lexical parent , and get outer.
    }
    return inner; //return whole function.
 }
let fn = outer();
name ="changed"; // output is outer

fn();*/

//10th which a get used and why

/*let a=1;
function x(){
    let a = 2;

  function y(){     // get a in it's neareast lexical parent
    let a = 3;     //output is 3

    function z(){   //1st is serach a in it's excution context -> not find
        console.log(a);
    }
    z();
  }  
  y();
}
x();*/

//11th why does lexical scope matter here more than "where function is called"?

/*function x(){     // in this question it doesn't matter where the function is called.
    var a = 10;

    y(); 
}            // both function is sibling not parent.
function y(){       // it search a in its parent lexical which is global.
    console.log(a); // output is 100 
}

var a = 100;

x();*/

//comparison weiedness + errors (pridict output)

/*console.log(false =="0"); //all 1st console is correct.
console.log(false ==="0");//2nd false it compare value as well as type.

console.log(null == undefined);   //undefined is a type of undefined.
console.log(null ===undefined);  //null is a object.
console.log([] ==false);  
console.log([] ===false); //[] is a array which is a type of object.{}/function() -> object.

console.log("" ==0);
console.log(""===0);  //""-> string
console.log(typeof NaN); //Number

console.log([]+[]);  //
console.log([]+{});  //object
console.log({}+[]);  //object
console.log([]==0);  //true
console.log([0]=="0"); //true
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(a);
                //refference error -> TDZ
let a = 10;

console.log(b);
                //no error -> b = undefined
var b = 10;

const arr =[1,2];

arr.push(3);

console.log(arr);

arr =[1];*/

//shortest program +gobal execution context + call stack

/*var x = 10;

function a(){
    var y =20;
}
a();*/

//  CLOSURES 

/*function counter(){
    let count =0;

    return function(){
        count++;
        console.log(count);
    };
}

const a = counter();
const b = counter();

a();
a();
a();
b();
a();
b();

//  

function x(){
    var a =7;

    function y(){
        console.log(a);
    }
  a=100;

  return y;
}
var z = x();

z();

//
function outer(){
    let counter =0;

    return {
        increment(){
            counter++;
        },

        get(){
            console.log(counter);
        }
    };
}

const obj1 = outer();

obj1.increment();
obj1.increment();
obj1.get(); */

// memory primitive are stored in stack(they got the copy) change in copy part only
//reserve are stored  in heap (they got reference),chage in original.

/*let a = "surbhi";
let b=a;

console.log(a);    //string is primitive datatype.
console.log(b);
               
b = "sonam";      //that's why change in b doesn't affcet a
console.log(a);
console.log(b);

let user1 = {
   name:"surbhi",      // reference 
   age:19               
};

let usertwo= user1;
console.log(user1);
console.log(usertwo);

usertwo.age = 22;
console.log(usertwo);

console.log(user1);*/

//string

/*let username = "surbhi";
//    or it gave all info about that strig  placeholder, length,prototype etc..
let username2 = new String("sonam");
console.log(username2);
let surname = "rajput";
let education = "college student";
 //1st method:
console.log('hello'+ username +  surname);
//2nd method:
console.log(`hello everyone, my name is ${username} ${surname} and i am a ${education}.`);
//properties

console.log(surname [4]);
//console.log(surname length);
console.log(surname.indexOf('p'));
console.log(surname.charAt(3));

y = surname-Substring(2,4)
console.log(surname);*/

//number + maths

/*const min = 35;
const max = 70;
console.log(Math.random());

console.log(Math.floor(Math.random()*(max-min+1))+min)
console.log(Math.ceil(Math.random()*(max+min+0))+ max)*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                         //ARRAY

/*let myarr = [3,4,5,6,7,8,9,10]
console.log(myarr);
console.log(typeof myarr);

let myarr2 = myarr.join();  // change array into string.
console.log(myarr2);
console.log( typeof myarr2);
console.log(myarr[4]);  //placeholder of it(4).

//console.log(myarr.slice(2,5))   //slice is that part we want. it doesn't include last part(5). orignal array doesn't change.
//console.log(myarr);

//console.log(myarr.splice(2,5))  // it include last element.
//but the major difference is it is a mutable.the orignal array becomes leftout element.
//console.log(myarr);

//myarr.push(888); //add element in array
console.log(myarr);
console.log(myarr.indexOf(6));  //palcevalue
console.log(myarr.indexOf(354)); //if element is not present in array it gives -1 value.

console.log(myarr.length);

//myarr.reduce(4);
//console.log(myarr);

myarr.pop();    // remove the last element.
console.log(myarr);

myarr.reverse();   // it reverse the array.
console.log(myarr);

console.log(myarr.indexOf(6)); //now the placevalue is given w.r.t change(reverse) array.

myarr.unshift(0); //it insert the element at 0th place.
console.log(myarr);

console.log(myarr.includes(6)); //check wthere element is present or not.

let fav_cricketer = ["msd","iyer","kohali","pandaya"]
let fav_team =["panjab","srh"]

fav_cricketer.push(fav_team)  //add array inside array. fav_team taken as element of another.
console.log(fav_cricketer)
// if we want to access element of array inside array.
console.log(fav_cricketer[4])
console.log(fav_cricketer[4][1])*/

// it takes function.
/*let arr = [1,6,5,3,5,0]
 let arr2 = arr.sort(function (a,b) {
     return b-a;   //sort a-b( descending order), b-a(ascending order).
})
console.log(arr2)*/
 
/*let arr = [1,6,5,3,5,0]
let arr2 = arr.forEach(function (a) {
    console.log(a+10);   //forEach tackes each value for applying function.
})*/                    //if we do any operation, it apply on each element.

//map is use whenever we want to creat new array
/*let arr = [1,6,5,3,5,0]
let arr2 = arr.map(function (a) {
   return 10;   //created array with same no of element, but the value becomes what we return.
})     // if we didn't return anything it shows undefined element.
console.log(arr2);*/

/*let arr = [1,6,5,3,5,0]
let arr2 = arr.map(function (a) {
   if(a>3)  return 0 ;     // if else case
   else return 5;
})  
console.log(arr2);

let arr = [1,6,5,3,5,0]
let arr2 = arr.filter(function (a) {
   if(a>=3)  return true ;     // if condition return true it gave answer.
})  
console.log(arr2);*/

//reduce convert large array into single array.
/*let arr = [1,6,5,3,5,0]
let arr2 = arr.reduce(function (accumulator,a) {
  return accumulator+ a ;   //accumulator (variable),a(value)
}, 0); //0 add in final result
console.log(arr2);*/


/*let array = [1,3,5,8,96,5];
let arr2 = array.find(function (a){
    return a === 5; //any condition. the 1st time value matches the condition.
});
console.log(arr2);*/

/*let array = [1,3,5,8,96,5]
let arr2 = array.some(function (a){
    return a> 100; //
});


let array = [1,3,5,8,96,5]
let arr2 = array.every(function (a){
    return a >0; //any condition. the 1st time value matches the condition.
});*/

// +++++++++++++++ Destructuring and Spread operator ++++++++++++++

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//#######################object######################################
/*let symb = Symbol("keyname")
let obj = {
    name: "surbhi",
    "full name":"surbhi rajput",
    age: 19,
    branch:"Cse",
    batch: '2025-2029',
    //[symb]:"my hidden value",
    symb:"keyname", //not use as symbol,data type is not a symbol
    obj2: {
        id1:"me",
        id2:"you",
        id3:"us",
    },
}
console.log(typeof obj.symb);
console.log(obj.obj2.id1);*/

//console.log(Array.isArray("surbhi"))
//console.log(Array.from("surbhi"));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//###########################################object##########################################################
 
/*let symb = Symbol["chikki"]
let fun =function(){
    nickname1="chikki"
}
let obj ={
    name:"surbhi",
    age:19,
    batch:'2025-2029',
    [symb]:"chikki",
    arr:[1,2,3],
    fun:function(){
        nickname1:"chikki"
    },
    obj2:{
        nickname2:"cherry"
    },
};
console.table(obj)
console.log(obj)
console.log(obj["symb"])*/

/*let key ="nickname";
let obj ={
    [key]:"chikki",
};
console.log(obj)

let c= 3;
{
    let c = 300;
}
console.log(c)

function outer(){
    const username ="surbhi"

    function inner(){
        const surname="rajput"
        console.log(username);
    };
    console.log(surname);
    inner()
}
outer();*/

if (true){
    const username ="surbhi"
    if(username==="surbhi"){
        const website =" yt"
        console.log(username +website);  //it access all its paresnts elements.
    }
   // console.log(website);  //it through error cause we can't access website outside the scope.

}
//console.log(username);  //same for this also.

/*function addone(num){
    return num +1
}
console.log (addone(5))

const addtwo =function(num){
    return num +2
}
console.log(addtwo(5))*/

const user ={
    username:"dhara",
    age:18,
    welcomegreet:function inner (){
      //  console.log(`${username}, welcome everyone.`)
        console.log(`${this.username}, welcome everyone.`)
    }
}
user.welcomegreet();
