import React from 'react';
import './App.css';

const App = () => {

  //destructuring object
  const article = {
    title: "My Article",
    rating: 5,
    author: {
      name: "Juan",
      twitter: "@cheche"
    }
  }

  const{ title,...others } = article

  console.log(title)
  console.log(others)


  const me = { name:"Cheche"}

  const { name:myName } = me

  console.log(myName);

  const { missing } = {}

  console.log( missing);

  //asigning default value to missing values 
  const { missing2 = "missing default" } = {}
  const { someNull = "null default" } = { someNull: null }

  const { someUndefined = "undefined default" } = { someUndefined:"some string here"}
  const { someString = "undefined default" } = { someString: "some string here" }


  console.log(missing2)
console.log(someUndefined)
console.log(someNull)
console.log(someString)

//destructing arrays with indeces
const arr = [1,2,3]
const [a,,b] = arr
console.log(a);
console.log(b);

const arr2 = [1,2,3,4,5,6,7,8,9,10]
const [a2,, b2, ...z] = arr2

console.log("a2",a2)
console.log("b2",b2)
console.log("z",z)

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const {4: first,9: ninth }  = arr3

console.log("first",first)
console.log(ninth)


const [missing3 = 'default missing'] = []
const [a3, b3, c3 = "missing c", ...others3] = [1, 2]

console.log("missing3",missing3)
console.log("a3",a3)
console.log("b3",b3)
console.log("c3",c3)
console.log("others3",others3)

let a4 = 1
let b4 = 5

console.log(a4)
console.log(b4)

const m4 ={ name :"Cheche" }

const printName = ({ name }) => {
  console.log(name);
}

printName(m4)

//spread operators in arrays

const listA = [1,2,3]
const listB = listA

listB.push(4)

console.log('listA:', listA)
console.log('listB:', listB)

const listC = [1, 2, 3]
const listD = [...listC]
listD.push(4)
console.log('listC:', listC)
console.log('listD:', listD)

//spread operator in objects
const article5 = {
  title: 'How to Use the Spread Operator (...) in JavaScript',
  claps: 1000000,
  author: {
    name: 'Juan',
    publication: 'LiveCodeStream'
  }
}

const articleCopy = { ...article5 }

articleCopy.author.name = 'CHECHE MAN!!!'

console.log('Original title:', article5.title);
console.log('Original author:', article5.author.name)

console.log('Copy title:', articleCopy.title)
console.log('Copy author:', articleCopy.author.name)

//merging objects and arrays with spread operator
const list1 = [1,2,3]
const list2 = [4,5]

const mergedList = [...list1,...list2]

console.log('Merged List: ', mergedList)

//objects
const obj1 = {a:1,b:2}
const obj2 = {c:3,d:4}

const mergedObject = {...obj1,...obj2}

console.log('Merged Object: ', mergedObject)

const weird1 = {...obj1, ...list2}
console.log('Merged list as object', weird1)

console.log('Math.max(1, 2, 3)', Math.max(1, 2, 3))

console.log('Math.max([1, 2, 3])', Math.max([1, 2, 3]))

console.log('Math.max(...[1,2,3])',Math.max(...[1,2,3]));

const  test = (param1, ...args) => {
  console.log('  -> param1', param1)
  console.log('  -> args', args)
}

console.log('test(1):')
test(1)

console.log('test(1, "a", "b", "c"):')
test(1, 'a', 'b', 'c')

//high order functions

function doOperation(operation,number1,number2){
  return operation(number1,number2)
}

function sumBothNumbers(number1,number2){
  return number1 + number2
}

doOperation(sumBothNumbers,3,5)

function multiplyBy(multiplier){
  return function result(num){
    return num * multiplier
  }
}

function filtering(arr, test) {
  const passed = []
  for (let element of arr) {
    console.log("filtering",test(element));
      if (test(element)) {
          passed.push(element)
      }
  }
  return passed
}

function isSuperNumber(num) {
  return num >= 10
}

filtering([1, 5, 11, 3, 22], isSuperNumber)

let multiplyByThree = multiplyBy(3)
    multiplyByThree(4)

//custom filtering function
function filtering(arr,test){

  const passed = []

  for(let element of arr){
    if (test(element)){
      passed.push(element)
    }
  }

  return passed
}

function isGreaterOrEqualToTen(num){
  return num >= 10
}

console.log(filtering([1, 5, 11, 3, 22],isGreaterOrEqualToTen));

//custome array . map function

function mapping(arr,transform){
  const mapped = []
  for (let element of arr){
    mapped.push(transform(element))
  }

  return mapped
}

function addTwo(num){
  return num + 2
}

console.log(mapping([1,2,3],addTwo));


// custome array reducer method
function reducing(reducer,initial,arr){

  let acc = initial

  for(let element of arr){
    acc = reducer(acc,element)
  }

  return acc
}

function accum(acc,curr){
  return acc + curr
}

console.log(reducing(accum,0,[1,2,3]))


//generators
function* generatorFunction(){
  yield "THis is the first return"
  console.log("First Log!")
  yield "This is the second return"
  console.log("Second log!!!")
  return "Done!!!"
}


console.log("generatorFunction",generatorFunction());

//regular expressions
//constructor
const regex1 = new RegExp('Hello')
const result = regex1.test('Hello World!')

console.log("result",result);


//literal
const regex = /Hello/

const result2 = regex.test('Hello World')

console.log('result2',result2);

const str = 'table football'

const regex3 = RegExp('foo')

console.log("regex3",regex3.test(str));

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.'

const regex10 = /[A-Z]/g

const found = paragraph.match(regex10)

console.log("found",found);

    return (
    <div className="App">
        <h1>Destructuring and Spread operator in modern Javascript</h1>
        <hr/>
        <h2>And Higher Order Functions</h2>
        <hr/>
        <h2>Custom map,filter,reduce array methods</h2>
        <hr/>
        <h3>JavaScript generators</h3>
        <h3>Regular expressions</h3>
    </div>
  );
}

export default App;
