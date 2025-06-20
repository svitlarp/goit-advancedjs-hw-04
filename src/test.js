// console.log('A');
// const promise = new Promise(resolve => {
//  resolve('B');
// });
// promise.then(value => {
//  console.log(value);
//  console.log('C');
// });


// const promise = new Promise((resolve, reject) => {
//     reject('Whoops');
// });
   
// promise.then(value => console.log(value));


// const greet = () => {
//     console.log("Hello!");
//   };
  
//   const intervalId = setInterval(greet, 3000);
  
//   clearInterval(intervalId);



let count = 0;
const intervalId = setInterval(() => {
 console.log(count++);
}, 1000);
setTimeout(() => {
 clearInterval(intervalId);
}, 5000);