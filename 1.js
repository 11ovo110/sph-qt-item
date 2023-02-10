function clone(obj) {
  if(typeof obj !== 'object' || obj == null) return obj;
  let res = obj instanceof Array ? [] : {};
  for(let attr in obj) {
    if(obj.hasOwnProperty(attr)) {
      res[attr] = clone(obj[attr]);
    }
  } 
  return res;
}

let obj1 = {
  name: 'aa',
  age: 10,
  hobby: {
    a: 1,
    b: 2
  }
}

let a = clone(obj1);
a.hobby.a = 2;
console.log(a);
console.log(obj1);

