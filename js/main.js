// localStorage.setItem("Ism","Qodir");
// localStorage.setItem("Familiya","Bohodirov");
// localStorage.setItem("Yoshi","18 yoshda");

// localStorage["Ism"] = "Doni";
// localStorage["Familiya"] = "Artikbaev";
// localStorage["Yoshi"] = "10";

// localStorage.removeItem("Ism");
// localStorage.removeItem("Familiya");
// localStorage.removeItem("Yoshi");

// localStorage.clear();

// let uningIsmi = localStorage.getItem("Ism");
// let uningFamiliyasi = localStorage.getItem("Familiyasi");
// let unungYoshi = localStorage.getItem("Yoshi")
// console.log(uningIsmi,uningFamiliyasi,unungYoshi);

// let sorov = new XMLHttpRequest();
// sorov.open("get","https://getty.uz/serverdan/malumot/olish");
// sorov.send();
// sorov.onload = function(){
//     console.log(sorov.responseText);
// }

// let jsFile = {ism: "Shaxzoda",yoshi: 20};

// let jsonFile = '{ism: "Donik","yoshi": 22}';

// console.log(JSON.stringify(jsFile));

// console.log(JSON.parse(jsonFile));

// let sorov = new XMLHttpRequest();
// sorov.open("get","jsonFIle.json");
// sorov.send();
// sorov.onload = function(){
//     console.log(JSON.parse(sorov.responseText));
// }

// let matn = "sen gapir sen men esa sen bilan yozib boramiz";
// let birinchiSenIndeksi = matn.indexOf("sen");

// console.log(matn.indexOf("sen",birinchiSenIndeksi+1));

let matn = "Salom Hammaga! salom berdim Hammaga. Salom ";

// console.log(matn.replace(/salom|berdim|Hammaga/gi,"alik"))

let yangiMatn = matn.replace(/salom|hammaga/gi,function(soz)){
    if(soz == "Salom" || soz == "salom"){
        return "alik";
    } else if(soz == "hammaga"){
        return "barchaga";
    }
});
console.log(yangiMatn);




