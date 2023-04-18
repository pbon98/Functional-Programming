Array.prototype.myFilter = function(callback) {
const newArray = [];
// Only change code below this line
const myFilter = (...data) => {
//console.log(data)
const cloneDataPassed = [...data]
//console.log(cloneDataPassed)
if (callback(...data) == true) {                             //here is my question, this condition is only effective with "=="
newArray.push(cloneDataPassed[0])} 
}
//console.log(newArray)
this.forEach(myFilter)
console.log(newArray)
// Only change code above this line
return newArray;
};

