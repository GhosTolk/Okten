// function sPryam (a,b) {
//     return a*b;
// }
// console.log(sPryam(4, 4));
//
// function sKolo (r) {
//     return 3.14 * r * r;
// }
// console.log(sKolo(4));
//
// function sCil (h,r) {
//     return 2 * 3.14 * r * (r + h);
// }
// console.log(sCil(4, 4));
//
// let arr = [1, 2, 3, 4]
// function array (array) {
//     for (let arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// console.log(array(arr));

// function par (text) {
//     document.write(`<p>${text}</p>`)
// }
// par('hello');

// function ull (text) {
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>`)
// }
//
// ull('hhshkas')

// function ull (text, lii) {
//     document.write(`<ul>`)
//     for (let i = 0; i < lii; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// ull('hhshkas', 8);
let arr = [10, 'fdsfd', true];
function prim (...arg) {
    for (let argElement of arg) {
        document.write(`<h1>${argElement}</h1>`)
    }
}

prim(arr);