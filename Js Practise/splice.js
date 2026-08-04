let companies  = ["Apple","Uber","Microsoft","Tesla","Zoho","Google"];

console.log(companies.shift());
console.log(companies);

console.log(companies.push("Amazon"))
console.log(companies)

companies.splice(2,1,"Delloite");
console.log(companies);
console.log(companies.length)