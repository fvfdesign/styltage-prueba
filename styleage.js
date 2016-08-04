/*
-----EJERCICIO 01 & 02 / 2 Gatos con foto, nombre y contador--------
*/


/*NOTA:
Para crear la visualizacion desde 
javaScript y no desde html recuerdo que he de hacerlo con "append" escribiendo dentro los tag
para poder generar de esta manera el view, engo que esturiarlo*/

// Gato 01------

var count = 0;

$("#image").on('click',function() {
    count++;
    $("#counter").html("clicks count: "+count);
});


// Gato 02-----

var count02 = 0;

$("#image02").on('click',function() {
    count02++;
    $("#counter02").html("clicks count: "+count02);
});


/*
---------EJERCICIO 03 / / array de gatos--------
*/
	function addCatToList(cat){

		$cat.forEach (function(element){
		
		$('.cat_list').append('<li>' + cat.name + '</li>')

		})
	}

var Cat = function(name){
this.name = name;
}

var cats = ["Roco", "Lucca", "Mos", "Cuti"];
cats.sort();


var cat01 = new Cat("Roco"); 
var cat02 = new Cat("Lucca"); 
var cat03 = new Cat("Mos");
var cat04 = new Cat("Cuti");


console.log(cat01)
console.log(cat02)
console.log(cat03)
console.log(cat04)
console.log(cat05)




//....................................

// var count02 = 0;

// $("#image02").click(function() {
//     count++;
//     $("#counter").html("your count: "+count);
// });


//......................................

// 	$("#image").on('click',function(){

// 	var image = true;
// 	var count = 10;

// 	while (image) {
//     console.log(count);
//     if (count < 10) {
//             image = false;
//     }
//     count++;
// }

// 		console.log ("")
// }

// counter();

//.......................................



	// $("#image").on('click',function(){

	// var string = "";

	// for (var i= 0; i<10; i++ ){
	// 	string += "1";
	// 	console.log (string);
	// }


//...............


// 	$('#image').on('click',function(){
// 	var image;
// 	for(image = 0; image<10; image++) {
// 	console.log("1");
// 	}

// }






