import {compose,pipe } from 'lodash/fp'

let input = "   JavaScript   ";

const trim = str =>str.trim()
//Template String
//const wrapInDiv = str => `<div>${str}</div>`;
//const wrapInSpan = str => `<span>${str}</span>`;

const wrap = type => str => `<${type}>${str}<${type}>`

const toLowerCase = str => str.toLowerCase();

//const result = wrapInDiv(toLowerCase(trim(input)));

const transform = pipe(trim,toLowerCase, wrap("span"));
//transform(input);


const numbers =[1,2,3]
console.log('Arreglo: ' ,numbers)
//Adding
const index = numbers.indexOf(2)
const added = [
               ...numbers.slice(0,index),
               4,
               ...numbers.slice(index)
              ];

//console.log(index)
console.log("Añadir: ",added)

// Removing

const removed = numbers.filter( n => n !== 4)
console.log("Remover: ",removed)

// Updating
const updated = numbers.map( n => n === 2 ? 20 : nu)
console.log(updated)
