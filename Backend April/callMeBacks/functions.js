const identity = function (arr) {
    return arr;
};

const first = function (arr) {
    
  return  arr[0];
};
  
const last = function (arr) {
    return arr[arr.length - 1];
};

const each = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
  return arr;
};

const indexOf = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;

};

const map = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

const filter = (collection, callback)=>{
  let result = []
  for(let item of collection){
    if(callback(item)){
      result.push(item)
    }
  }
  return result
}

const reject = (collection, callback)=>{
  let result = []
  for(let item of collection){
    if(!callback(item)){
      result.push(item)
    }
  }
  return result
}

const uniq = (collection) =>{
  let result = []
  for (let item of collection){
    if(result.indexOf(item) === -1){
      result.push(item)
    }
  }
  return result
}

const reduce = (collection, callback, initialVal) =>{
  let accumulator = initialVal
  for(let key in collection){
    if(accumulator === undefined){
      accumulator = collection[key]
    }
    accumulator = callback(accumulator, collection[key])
  }
  return accumulator
}


module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
  filter, 
  reject, 
  uniq, 
  reduce
};

console.log(identity([1, 2, 3, 4, 5]));
console.log(first([1, 2, 3, 4, 5]));
console.log(last([1, 2, 3, 4, 5]));
console.log(each([1, 2, 3, 4, 5], (item) => console.log(item)));
console.log(indexOf([1, 2, 3, 4, 5], 3));
console.log(map([1, 2, 3, 4, 5], (item) => item * 2));
console.log(filter([1, 2, 3, 4, 5], (item) => item % 2 === 0));
console.log(reject([1, 2, 3, 4, 5], (item) => item % 2 === 0));
console.log(uniq([1, 2, 2, 3, 3, 4, 5, 5]));
