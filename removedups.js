//remove duplicate values in an Array or find unique values in arr
//1.filter() & indexOf()
//2.set & [...](spread operator)

let arr = [1,2,3,4,5,3,5];
let uArr= [... new Set(arr)];

console.log(uArr)

