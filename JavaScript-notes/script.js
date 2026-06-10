//console.log("welcome!")
//console.log("hell0 js")
//var a = 2;
//var nm =undefined
//console.log(nm);
 //alert("hellow js")

 var userName = "surbhi"
 console.log(userName);
 console.log( typeof userName);
 var userName = Boolean(userName)
 console.log(userName);
 console.log(typeof userName);

 let userEmail = true;
 console.log(userEmail);
  console.log(typeof userEmail);
 let valueInNumber = Number(userEmail)
 console.log(valueInNumber);
 console.log(typeof valueInNumber);

 let  account=633729;
 console.log(account);
  console.log( typeof account);
 let StringNumber =String(account)
 console.log(StringNumber);
 console.log(typeof StringNumber);

 city= "hfkdfnfk"

userName = "sonam"
userEmail = "sonamsingh@gmail.com"
//password = 9938736
 city = "sjdhwi"
console.table([userName,userEmail,account,city]);

console.log( ( (3+4) *3) %2);
 //var nm =undefined on the top part -> this is declaration
 //nm = "surbhi"  ->intislation
//console.log(age);
// tdz area declaration to initialization line
let a = 19;
//break into let age = undefined -> declaration it goes to top
    //age = 19 -> initislation
    // but in case of let or const value should be initislised before is must
const me ="surbhi";
var m = 2; //global scope 
{
    var m = 3; //global scope -> not respecting braces
}
console.log(m)
let n = 3;//global
 {
    let n = 6; //->block scope
    console.log(n);
 }
 console.log(n);
 let s = 12;
++s;
 //console.log(s);
 //let t = s;

 //t = t + 2;
 //array
let f = [ 1,2,3];
let g = f;
f.pop();
let j = true;
let k;
let selectedstudent = null;
let o = Symbol("me");
let p = Symbol("me");
let xyz = {
    uid: 3,
    model: "surbhi"
}
xyz.uid = 7;
let obj = {
    uid: 3,
    model: "surbhi"
}
let u1 = Symbol("uid");
obj[u1] = "07"
let w = 9007199254740991n;
//object
let v = {
    name: "surbhi",
};
let c = v;

c.name = "sonam";
let l = 5; // oprate that opration and then save that vale in orignal variable.
l-=2;
function getgrade (score)
{
    if (score>=80 && score<=100) return "a";
    if (score>=80 && score<=10) return "b";
    if (score>=80 && score<=10) return "c";
    if (score>=80 && score<=10) return "d";
    else return "invalide marks";
}
  score  = "xyz";
  console.log("invalid marks");
function studentscore ( score)
{
    if (score>=90 && score<=100){
        return "a+";
    }
    else if (score>=70 && score<=90){
        return "a";
    }
    else if (score>=30 && score<=70){
        return "d";
    }
    else{
        return "fail";
    }
}

 console.log(studentscore(99));
 let x = 10;
 let y = 20;
 {
 if (x>=5 && y<=30){
    console.log(true)
 }
 else{
    console.log(false)
 }
}


