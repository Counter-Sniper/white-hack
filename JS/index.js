/*

Index.js

*/
$(document).ready(function(){

"use strict"

var resultsList = $("#resultsList");
resultsList.text("To jest z jQuery");

var toggleButton = $("#toglleButton");
toggleButton.on("click", function(){
    resultsList.toggle(500);

    if(toggleButton.text() == "Ukryj")
        toggleButton.text("Pokaż");
    else
        toggleButton.text("Ukryj");
});

var listaElementow = $("header nav li");
listaElementow.css("font-weight", "bold");
listaElementow.css("font-size", "16px");
listaElementow.filter(":first").css("font-size", "20px");



// var wynik = {
//     nazwa: "Angular",
//     jezyk: "JavaScript",
//     ocena: 4.6,
//     wyswietlWynik: function(){ },
//     wlasciciel: { 
//         login: "mariusz",
//         id: 1234
//     }
// };

// console.log(wynik.nazwa);

// wynik.numerTelefonu = "111-222-333";

// console.log(wynik.numerTelefonu);


var wyniki = [{
    nazwa: "Angular",
    jezyk: "JavaScript",
    ocena: 4.6,
    wyswietlWynik: function(){ },
    wlasciciel: { 
        login: "mariusz",
        id: 1234
    }
},
{
    nazwa: "JQuery",
    jezyk: "JavaScript",
    ocena: 3.8,
    wyswietlWynik: function(){ },
    wlasciciel: { 
        login: "mariusz",
        id: 1234
    }
},
{
    nazwa: "React",
    jezyk: "JavaScript",
    ocena: 4.2,
    wyswietlWynik: function(){ },
    wlasciciel: { 
        login: "mariusz",
        id: 1234
    }
}];

resultsList.empty();
$.each(wyniki, function(i, element){

    var newResult = $("<div class='result'>" +
                        "<div class='title'>" + element.nazwa + "</div>" +
                        "<div>Język: " + element.jezyk + "</div>" +
                        "<div>Wlasciciel: " + element.wlasciciel.login + "</div>" +
                    "</div>");

    newResult.hover(function(){
        // przyciemniamy
        $(this).css("background-color", "lightgray");
    }, function() {
        // rozjasniamy
        $(this).css("background-color", "transparent");
    });

    resultsList.append(newResult);
})

// for(var x = 0; x < wyniki.length; x++){

//     var wynik = wyniki[x];

//     if(wynik.ocena < 4) continue;

//     console.log(wynik.nazwa);
// }

// console.log(wyniki.length);
// console.log(wyniki[0].nazwa);

// wyniki.push(wynik);
// wyniki.push({ 
//     nazwa: "test",
//     jezyk: "test"
// });



// var komunikat = "Witaj JavaScript";
// console.log(komunikat);

// var resultsDiv = document.getElementById("results");
// resultsDiv.innerHTML = "<p>To jest JavaScript</p>";

// console.log("Komunikat jest typu : " + typeof(komunikat));
// console.log("Div wyniki jest typu : " + typeof(resultsDiv));

// var none;
// console.log("None jest typu : " + typeof(none));

// var numer = 10;
// console.log("Numer jest typu : " + typeof(numer));

// var prawdaFalsz = true;
// console.log("PrawdaFalsz jest typu : " + typeof(prawdaFalsz));

// //nowaZmienna = "Test";
// console.log("nowaZmienna jest typu : " + typeof(nowaZmienna));

// //komunikaty = "Nowa wartosć";

// if(!none){
//     console.log("None jest niezdefiniowana");
// } 

// if(numer == "10"){
//     console.log("numer jest kompatybilny");
// } else if (numer === 10){
//     console.log("numer jest identyczny ")
// } else {
//     console.log("inne");
// }


// //function wyswietlKomunikat(komunikat){
// //    console.log("Komunikat do wyświetlenia : " + komunikat);
// //}

// function wyswietlKomunikat(komunikat, komunikat2){
//     if(komunikat2){
//         console.log("Komunikat do wyświetlenia : " + komunikat + komunikat2);
//     } else {
//         console.log("Komunikat do wyświetlenia : " + komunikat);
//     }
   
// }

// wyswietlKomunikat("tekst informacyjny");
// wyswietlKomunikat("tekst informacyjny", "kolejny tekst");

// var wyswietlTo = function(komunikat){
//     console.log(komunikat);
// }

// wyswietlTo("Komunikat testowy");

// var wyswietlToGdy = function(komunikat, callback){
//     wyswietlTo(komunikat);
//     callback();
// }

// wyswietlToGdy("wywolujemy wyswietlToGdy", function () {
//     console.log("wywołujemy callback");
// });

// var global = true;

// function test(){
//     console.log("global : " + global);
//     var wiadomosc = "jakas wiadomosc";
//     console.log("Test: " + wiadomosc);

//     wyswietlToGdy("Z domkniecia", function(){
//         wyswietlTo("to jest z domkniecia : " + wiadomosc);
//     });
// }

// //console.log("Test: " + wiadomosc);

// test();

});