/*var x = 10;   //global invoke exectuion box created im memory creation part variable contain value of x is undefined
//a();  // function a is invoke  new execution box created inside global code execution box
  // cnotal is given to that part line no 9 then line no 10 value of x is assign. 
  //that value is printed or passes to console. now cnotral is given back to global.

b();
console.log(x);

function a(){
   // var x = 100;
    console.log(c);
}

function b(){
    var x = 200;
    console.log(x);
}
var c = 15;
a();
function outer(){
  let username = "surbhi";
//console.log(surname); it is parent that's why did't get surname.
  function inner(){
    let surname = "rajput"
     console.log( "inner",username);
  }
     function innerinner(){
     // console.log("innerinner",surname); can't get  cause it is a sibling of inner.
     }
     innerinner()
  
  inner()
console.log(username);
  
}
outer()
//console.log(username); // outside the function , it is a global scope, can't acsses outside the function.
 
function clouser(){
  const name = "me";
  const x = 2;
  function displayname(){
    console.log(name,x);
  }
  return displayname;
}

const myfunc = clouser();
myfunc();*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ##############################ARRAY################################### 

//Create an array with 3 fruits and print the 2nd fruit,add mango and pinapple at first place respectively.
/*let fruits =["apple","banana","orange"]
console.log(fruits[1])   
console.log(fruits.push("mango")); 
console.log(fruits.unshift("pineapple"));
 // replace apple with kiwi
console.log(fruits.pop()); //remove end element 
console.log(fruits.push("kiwi"));
console.log(fruits.splice(1,1,"watermelon")); //inserting value at required place.
console.log(fruits)
  //insert "red" and "blue" at index 1.
let colour = ["green","yellow","black"]
console.log(colour.splice(1,0,"red","blue"));
console.log(colour)*/
//extract the only middle 3 element from this array
/*let items =[1,2,3,4,5,6];
let items2= items.slice(1,4) 
console.log(items2);
items.splice(2,1,9);
console.log(items)*/  

