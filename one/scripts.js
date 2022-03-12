// let newFunc = (messege) => console.log(messege);
// // newFunc('hey1');
// // let newTime = setTimeout(function(){newFunc('hey2')}, 2000);

// function getWords() {
//     setTimeout(() => {
//         console.log('instant');
//         setTimeout(() => {
//             console.log('another word');
//             setTimeout(() => {
//                 console.log('third');
//                 setTimeout(() => {
//                     console.log('final')
//                 }, 1000);
//             }, 2000);
//         }, 3000);
//     });
// };
// getWords();

// done = () => {
//     console.log('jobs done!');
// }
// function countdown(num, callback) {
//     let x = num
//     setTimeout(() => {
//         if (x > 1) {
//             console.log(x);
//             x--
//             countdown(x, callback);
//         }
//         else {
//             callback();
//         }
//     }, 1000)
// }
// countdown(3, done);

let lunchTime = true;
let orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (lunchTime === true) {
                resolve({
                    lunch: 'pizza',
                    drink: "water"
                })
            }
            else {
                let err = new Error('nooooope');
                reject(err);
            }
        }, 3000)
    })
}
orderMeSomeFood()
    .then(res => {
        console.log(res);
    })
    .then(() => console.log('here'))
    .catch(er => {
        console.log(er);
    })