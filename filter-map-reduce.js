// FILTER

// menggunakan cara jadul
// const angka = [1, 2, -3, 3, 4, 8, 7, 5, 0, -1, -9];
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }

//  filter menggunakan function biasa
// const angka = [1, 2, -3, 3, 4, 8, 7, 5, 0, -1, -9];
// let proses = angka.filter(function (el) {
//     return el >= 3;
// });
// console.log(proses);

// filter menggunakan arrow function
// const angka = [1, 2, -3, 3, 4, 8, 7, 5, 0, -1, -9];
// let proses = angka.filter(el => el >= 3);
// console.log(proses);

// MAP 
// const angka = [1, 2, -3, 3, 4, 8, 7, 5, 0, -1, -9];
// let newAngka = angka.map(function (el) {
//     return el * 2;
// });

// arrow function
// const angka = [1, 2, -3, 3, 4, 8, 7, 5, 0, -1, -9];
// let newAngka = angka.map(el => el * 2);

// REDUCE
// reduce = melakukan sesuatu terhadap seluruh el arraynya
// const angka = [1, 2, -3, 3, 4, 8, 7, 5, 0, -1, -9];
// // jumlahkan seleuruh el array
// // accumulator = menjumlahan tiap el array
// // cuurentValue = angka pada saat dijumlahkan
// const newAngka = angka.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// });
// versi arrow function
// 1 + 2 + -3 + 3 + 4 + 8 + 7 + 5 + 0 + -1 + -9
// const angka = [1, 2, -3, 3, 4, 8, 7, 5, 0, -1, -9];
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, /* ada argumen nilai awal yang bisa di ubah, defaultnya 0, tetapi bisa di ubah, contoh : diisi 8, maka nilai awalnya yang tadinya 0 berubah jadi 8  */ 2);

// METHOD CHAINING
// 1. cari angka > 5
// 2. kemudian kalikan dengan 3
// 3. jumlahkan keseluruhan angkanya menjadi 1 nilai
const angka = [1, 2, -3, 3, 4, 8, 7, 5, 0, -1, -9];
let hasil = angka.filter(function (el) {
    return el > 5
}).map(function (el) {
    return el * 3;
}).reduce(function (acc, current) {
    return acc * current;
});