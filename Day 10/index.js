//NOTE Destructuring ES6 FEATURE ;
const pro = ['tv', 'mobile', 'shirt'];

//  const tv = pro[0];
//  console.log(tv) 
//NOTe in the case of array ;

const [tv, , shirt] = pro;
console.log(tv, shirt);

const arr = [1, 2, 3, [4, [5, 6]]];

//destructure the above array ;
const [a, b, c, [d, [e, f]]] = arr;
console.log(a, b, c, d, e, f);

//object destructuring ;

const details = {
    firstName: 'ranjit',
    age: 2024 - 2003,
    address: {
        state: 'udaipur'
    }
}
const { firstName, age, address: { state } } = details
console.log(firstName, age, state)

//NOTE SPREAD OPERATOR(...) ;

//copy a array or object ;

const arr2 = [1, 2, 3, 4, 5];
// const arr3 = arr2 ;
const arr3 = [...arr2]
console.log(arr3.push(6))
console.log(arr2, arr3)

//adding two arrays ;
const clothing = ['shirt', 'jeans', 'tv'];
const electronics = ['tv', 'ac'
]

const shoppingCart = ['tshirt', ...clothing, ...electronics, 'mobile'];
console.log(shoppingCart);

//Object 
const obj1 = {
    a: 1,
    b: 2
}

const obj2 = {
    b: 3,
    d: 4
}

const obj3 = { ...obj1 };
console.log(obj3);

//NOTE in the case of the duplicate properties the later spread object will replace the property of the previous one
const obj4 = { ...obj1, ...obj2 }
console.log(obj4)

//NOTE Rest parameter(...) ;
//NOTe it packs the remaining values in an array ;

const numberArray = [1, 2, 3, 4, 5, 6];
const [one, two, ...others] = numberArray;

console.log(one, two, others)

//destructuring in the function params;
function sum([a, b, c]) {
    // console.log(item)
    // const a = item[0];
    // const b = item[1];
    // const c = item[2];
    return a + b + c;
}
console.log(sum([1, 2, 3]))

function printNumber(...el) {
    console.log(el)
    el.forEach((num) => {
        console.log(num)
    })

}
printNumber(1, 2, 3, 4);

//String methods 
const str = 'javascript is fun';

console.log(str.length);
console.log(str[2]);

//NOTE includes 
console.log(str.includes('j'));

//NOTE slice 
//slice 
console.log(str.slice(5, 1));

//NOTE substring ;
console.log(str.substring(5, 1))
//NOTe in the case of slice if the start index > than end index it will return empty string ;
//NOTE - in the case of the substring the start will become end ,vice versa ;

console.log(str.charAt(9));
console.log(str.replace('is', 'are'));
const newStr = 'hello';

// console.log(newStr.trimEnd())

console.log(newStr.trim());
console.log(newStr.indexOf('h'));
console.log(newStr.lastIndexOf('l'));
console.log(newStr.startsWith('e'));
console.log(newStr.endsWith('i'));

//split method convert an string into an array
const str3 = 'javascript is fun';
console.log(str3.split('').reverse().join(''))

//Math object;

//abs 
console.log(Math.abs(-3));

//round 
console.log(Math.round(-1.5));

//trunc
console.log(Math.trunc(3.4))

//floor
console.log(Math.floor(-4.7));

//ceil 
console.log(Math.ceil(1.2));

//min ,max
console.log(Math.max(1, 2, 4));

//random 
const randomNumber = Math.trunc(Math.random() * 10);
console.log(randomNumber);

//Date object 
const date = new Date();
console.log(date)

const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

console.log(`${hours}:${minutes}:${seconds}`)

//gives the localDateString
console.log(date.toDateString());
//give the local time string 
console.log(date.toLocaleTimeString());

console.log(date.getTime());