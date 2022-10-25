
// Date Object
// create date object
var d = new Date();//object 
console.log(typeof (d));
console.log(d);

//(year, month, day, hour, min, sec, milliseconds)
var y = new Date(2021, 6, 24, 50, 50, 50, 888);
console.log(y);

// with 3 parameters
console.log(new Date(2020, 7, 20));//year, month, day

// with one parameter
console.log(new Date(4999));

//conversion of date
console.log(d.toUTCString());
console.log(d.toISOString());

console.log(d.toDateString());

//get methods
console.log(d.getFullYear());//get the yyyy value
console.log(d.getMonth());//get the value (0-11)
console.log(d.getDate());//(1-31)
console.log(d.getTime());//miliseconds value from 1 jan 1970
console.log(d.getHours());//(0-23)
console.log(d.getMinutes());//(0-59)
console.log(d.getSeconds());//(0-59)
console.log(d.getMilliseconds());//(0-999)
console.log(d.getDay());//(0-6)

// 1s = 1000 ms

//set methods
d.setFullYear(2020);//set the yyyy value
d.setMonth(11);//set the value (0-11)
d.setDate(25);//(1-31)
d.setHours(22);//(0-23)
d.setMinutes(30);//(0-59)
d.setSeconds(20);//(0-59)
d.setMilliseconds(999);//(0-999)

console.log(d)
