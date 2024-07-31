


// // function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
// //     this.soruMetni = soruMetni;
// //     this.cevapSecenekleri = cevapSecenekleri;
// //     this.dogruCevap = dogruCevap;
// // }

// Soru.prototype.cevabiKontrolEt = function(cevap) {
//     return cevap === this.dogruCevap
// }

// let soru1 = new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c");
// let soru2 = new Soru("Hangisi .net paket yönetim uygulasıdır?", { a: "Node.js", b: "Nuget", c: "Npm" }, "b");


// // let soru1 = new Soru("Hangisi Javascript paket uygulamasıdır", {
// //     A: "Node.js",
// //     B: "React.js",
// //     C: "Angular.js",
// // }, "C");

// // let soru2 = new Soru("Hangisi Javascript paket uygulamasıdır", {
// //     A: "Node.js",
// //     B: "React.js",
// //     C: "Angular.js",
// // }, "C");

// let sorular = [
//     new Soru("2-Hangisi Javascript paket uygulamasıdır", {
//         A: "Node.js",
//         B: "React.js",
//         C: "Angular.js",
//     }, "C"),
//     new Soru("3-Hangisi Javascript paket uygulamasıdır", {
//         A: "Node.js",
//         B: "React.js",
//         C: "Angular.js",
//     }, "C"),
//     new Soru("4-Hangisi Javascript paket uygulamasıdır", {
//         A: "Node.js",
//         B: "React.js",
//         C: "Angular.js",
//     }, "C")
// ];

// console.log(soru1.soruMetni);  // "Hangisi Javascript paket uygulamasıdır"
// console.log(soru1.dogruCevap); // "C"
// console.log(soru1.cevabiKontrolEt("C")); // true
// console.log(soru1.cevabiKontrolEt("A")); // false

// // Quiz Constructor

// function Quiz(sorular)  {
//     this.sorular = sorular;
//     this.soruNo = 0;
// }


// Quiz.prototype.soruGetir = function() {
//     return this.sorular[this.soruIndex];
// }


// const Quiz = new Quiz(sorular);


// console.log(soru1.cevabiKontrolEt("C")); // true


// document.querySelector(".btn-start").addEventListener("click", function(){
//     console.log(Quiz.soruGetir());
//     Quiz.soruNo+=1;
// })
