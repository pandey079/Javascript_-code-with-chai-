let val =' 1' + 321
console.log(val);
console.log(typeof val);

let obj_1 = {
  myname: 'varun',
  email: 'varun@gmail.com',
  upi: 'system@paytm'
}
let obj_2 = obj_1;  // passes  thruogh refference
obj_2.myname = 'system';
console.log(obj_1, obj_2);

// string
let str = 'varun'
console.log(`My Name is ${str.toUpperCase()}`, '\n', typeof str);

