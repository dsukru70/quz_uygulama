
// // // let soru = {

// // //     soruMetni: "Hangisi Javascript paket uygulamasıdır",
// // //     cevaplar: {
// // //         A: "Node.js",
// // //         B: "React.js",
// // //         C: "Angular.js",
// // //         },
// // //         dogruCevap: "c",

// // //         cevabiKontrolEt: function(cevap){

// // //             return cevap === this.dogruCevap;

// // //         }
// // //     }



// // // let soru2 = {

// // //     soruMetni: "Hangisi .net paket uygulamasıdır",
// // //     cevaplar: {
// // //         A: "Node.js",
// // //         B: "Nuget",
// // //         C: "Angular.js",
// // //         },
// // //         dogruCevap: "b",

// // //         cevabiKontrolEt: function(cevap){

// // //             return cevap === this.dogruCevap;

// // //         }
// // //     }

// // // console.log(soru.soruMetni);
// // // console.log(soru2.cevabiKontrolEt("b"));

// // // console.log(soru.soruMetni);
// // // console.log(soru.cevabiKontrolEt("a"));



// // // sınıf oluşturcam "Constructor"

// // function Soru(soruMetni, cevaplar, dogruCevap) {
// //     this.soruMetni = soruMetni;
// //     this.cevaplar = cevaplar;
// //     this.dogruCevap = dogruCevap;
// //     this.cevabiKontrolEt = function(cevap) {
// //         return cevap== this.dogruCevap
// // }
// //  console.log(this)
// // }

// // Soru.prototype.cevabiKontrolEt = function(cevap) {
// //     return cevap === this.dogruCevap;
// // };
// // // function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
// // //     this.soruMetni = soruMetni;
// // //     this.cevapSecenekleri = cevapSecenekleri;
// // //     this.dogruCevap = dogruCevap;
// // // }

// // // let soru1 = new Soru("Hangisi Javascript paket uygulamasıdır", {
// // //     A: "Node.js",
// // //     B: "React.js",
// // //     C: "Angular.js",
// // // }, "C");

// // // let soru2 = new Soru("Hangisi Javascript paket uygulamasıdır", {
// // //     A: "Node.js",
// // //     B: "React.js",
// // //     C: "Angular.js",
// // // }, "C");

// // let sorular = [
// //     new Soru("2-Hangisi Javascript paket uygulamasıdır", {
// //         A: "Node.js",
// //         B: "React.js",
// //         C: "Angular.js",
// //     }, "C"),
// //     new Soru("3-Hangisi Javascript paket uygulamasıdır", {
// //         A: "Node.js",
// //         B: "React.js",
// //         C: "Angular.js",
// //     }, "C"),
// //     new Soru("4-Hangisi Javascript paket uygulamasıdır", {
// //         A: "Node.js",
// //         B: "React.js",
// //         C: "Angular.js",
// //     }, "C")
// // ];

// // console.log(soru1.soruMetni);  // "Hangisi Javascript paket uygulamasıdır"
// // console.log(soru1.dogruCevap); // "C"
// // console.log(soru1.cevabiKontrolEt("C")); // true
// // console.log(soru1.cevabiKontrolEt("A")); // false

// // // Quiz Constructor

// // function Quiz(sorular)  {
// //     this.sorular = sorular;
// //     this.soruNo = 0;
// // }



// // const Quiz = new Quiz(sorular);


// // console.log(soru1.cevabiKontrolEt("C")); // true


// // document.querySelector(".btn-start").addEventListener("click", function(){
// //     console.log(Quiz.soruGetir());
// //     Quiz.soruNo+=1;
// // })


// // OOP: Nesne Tabanlı Programlama

// function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
//     this.soruMetni = soruMetni;
//     this.cevapSecenekleri = cevapSecenekleri;
//      this.dogruCevap = dogruCevap;
//  }



function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap;
};

let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm", d: "Yarn" }, "c"),
    new Soru("2-Hangisi .NET paket yönetim uygulamasıdır?", { a: "Node.js", b: "NuGet", c: "Npm" , d: "Yarn"}, "b"),
    new Soru("3-Hangisi Python paket yönetim uygulamasıdır?", { a: "Pip", b: "Composer", c: "Npm", d: "Yarn" }, "a"),
    new Soru("4-Hangisi PHP paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Composer" , d: "Yarn" }, "c"),
    new Soru("5-Hangisi Ruby paket yönetim uygulamasıdır?", { a: "Gem", b: "NuGet", c: "Npm", d: "Yarn" }, "a")
];

function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
    this.dogrucevapsayisi=0;
}

Quiz.prototype.soruGetir = function() {
    return this.sorular[this.soruIndex];
}

const quiz = new Quiz(sorular);

document.querySelector(".btn_start").addEventListener("click", function() {
    if (quiz.sorular.length !== quiz.soruIndex) {
        document.querySelector(".quiz_box").classList.add("active");
        
        soruGoster(quiz.soruGetir());
        soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    } else {
        console.log("Quiz bitti");
    }
});

document.querySelector(".next_btn").addEventListener("click", function() {
    if (quiz.sorular.length !== quiz.soruIndex) {
        quiz.soruIndex += 1;
        soruGoster(quiz.soruGetir());
        soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    } else {
        console.log("Quiz bitti");
        Ui.schor_box.classList.add("active");
    }
});

const option_list = document.querySelector(".option_list");
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';

function soruGoster(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';

    for (let cevap in soru.cevapSecenekleri) {
        options += `<div class="option">
                    <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
                    </div>`;
    }

    document.querySelector(".question_text").innerHTML = question;
    option_list.innerHTML = options;

    const option = option_list.querySelectorAll(".option");
    for (let opt of option) {
        opt.setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(option) {
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if (soru.cevabiKontrolEt(cevap)) {
        quiz.dogrucevapsayisi +=1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", incorrectIcon);
    }

    for (let i = 0; i < option_list.children.length; i++) {
        option_list.children[i].classList.add("disabled");
    }
}

function soruSayisiniGoster(soruSayisi, toplamSoru) {
    let tag = `<span class="badge bg-warning">${soruSayisi} / ${toplamSoru}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}




cevapKontrol