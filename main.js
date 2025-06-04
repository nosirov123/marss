// let hafta =prompt('Hafta kunlarini yozing');
// let key = hafta.toLowerCase();
// switch (key) {
//     case 'Dushanba':
//         console.log('1');
//         break;
//     case 'Seshanba':
//         console.log('2');
//         break;
//     case 'Chorshanba':
//         console.log('3');
//         break;
//     case 'Payshanba':
//         console.log('4');
//         break;
//     case 'Juma':
//         console.log('5');
//         break;
//     case 'shanba':
//         console.log('6');
//         break;
//     case 'yakshanba':
//         console.log('7');
//         break;

//     default:
//         break;
// }


// let time = new Date();


// console.log(time.getDay());
// console.log(time.getDate());
// console.log(time.getFullYear());
// console.log(time.getHours());
// console.log(time.getMinutes());
// console.log(time.getMilliseconds());
// console.log(time.getMonth());
// console.log(time.getSeconds());
// setTimeout(() => {
//     console.log('setTimeOut ishladi');

// }, 3000);

// setInterval(() => {

//     console.log('setInterval ishladi');

// }, 2000);

// const hours = document.getElementById('hours');
// const minutes = document.getElementById('minutes');
// const seconds = document.getElementById('seconds');
// setInterval(() => {
//     let time = new Date();
//     hours.innerHTML = time.getHours();
//     minutes.innerHTML = String(time.getMinutes()).padStart(2, '0');
//     seconds.innerHTML = String(time.getSeconds()).padStart(2, '0');
// }, 1000);
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

setInterval(() => {
    let time = new Date();
    hours.innerHTML = time.getHours();
    minutes.innerHTML = String(time.getMinutes()).padStart(2, '0');
    seconds.innerHTML = String(time.getSeconds()).padStart(2, '0');
}, 1000);