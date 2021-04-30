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

console.log(transform(input));
