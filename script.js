'use strict';
const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

boxesQuery.forEach(box => {
    if (box.matches('.this')) {
        console.log(box);
    }
});

console.log(boxesQuery[0].closest('.wrapper'));
console.log(boxesQuery[0].closest('.wrapper2'));
console.log(boxesQuery[0].closest('.wrapper3'));

// boxesQuery[0].remove();
// boxesGet[0].remove();

// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     document.body.append(div);
//     // boxesGet[boxesGet.length] = div; нельзя добавить в коллекцию
// }

// console.log(boxesQuery);
// console.log(boxesGet);
// // console.log(document.body.children);

// console.log(Array.from(boxesGet));