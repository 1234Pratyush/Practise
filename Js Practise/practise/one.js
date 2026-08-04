// let num = 25;

// let userNum = prompt("Guess a number : ");

// while(userNum != num){
//       userNum = prompt("Sorry you entered the wrong number,Guess again : ")
// }

// console.log("Congratualations you have won")


// string in js

let str = "helllo byy"
console.log(typeof(str));
console.log(str.toLocaleUpperCase())

let num = 24;
console.log(typeof(num))
// console.log(num + str)

 if(str.length > 20){
    console.log("this is much bigger string")
 }

 console.log("Short string")
 console.log(str.length)


let obj ={
    name :"pen",
    price:10,
}

let output = `this is my ${obj.name} and is of ${obj.price} ruppes`
console.log(output)
console.log(output.toLocaleUpperCase())
console.log(output.toLocaleLowerCase())

let alpha = "abcdefgh";
console.log(alpha.slice(2,5))

let username = prompt("Enter you username without whitespaces :")

output = "@" + username + username.length;
console.log(output)