// let nums = ["Hello","Byyy","Tata","Punch"];

// let output =  nums.map((value)=>{
//   console.log(value.toLocaleUpperCase())
// })

// console.log(output)
// console.log(nums)

let arr = [1,2,3,4,5,6,7,8];

let evenArr = arr.filter((value)=>{
      return   value % 2 == 0;
})

console.log(evenArr);
console.log(arr);

const output =  arr.reduce((res,curr)=>{
  return res + curr
})


console.log(output)