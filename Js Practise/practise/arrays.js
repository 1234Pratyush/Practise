let marks = [85,97,44,37,76,60];
 let value = marks.length;
 let sum = 0;

 for (let i = 0; i < value; i++) {
     sum = sum + i;
 }
 let average = sum /value
 console.log(average);

let heroes = ["Ironman" , "Shaktiman","Thor","Antman","Loki"];
heroes[0] =1
console.log(heroes[0],"Printing values using") 


 console.log(typeof(heroes[0]))
 console.log(heroes.push("Johny"))
 console.log(heroes)
 console.log(heroes.pop())
  console.log(heroes);
  console.log(heroes.unshift(233))
   console.log(heroes);
     console.log(heroes.shift());
   console.log(heroes);    
   
   console.log(marks.toLocaleString());
   console.log(typeof(marks))


   let obj = {
    name:"Pratyush",
    course :"MCA",
    age:28,
    
    address(){
 return ("Address is dehradun")
    }
       }

       console.log(obj.name)
       console.log(obj.address())

       

