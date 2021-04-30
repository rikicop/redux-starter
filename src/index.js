import {compose,pipe } from 'lodash/fp'

let input = "javaScript  ";
//let output = "<div>" + input.trim()+  "</div>";
const trim = str =>str.trim()
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));

const transform = pipe(trim, wrapInDiv, toLowerCase);
transform(input);

console.log(transform(input));
