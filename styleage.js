// NOTA:
// Para crear la visualizacion desde 
// javaScript y no desde html recuerdo que he de hacerlo con "append" escribiendo dentro los tag
// para poder generar de esta manera el view, engo que esturiarlo

// Gato 01
var count = 0;

$("#image").on('click',function() {
    count++;
    $("#counter").html("clicks count: "+count);
});


// Gato 02

var count02 = 0;

$("#image02").on('click',function() {
    count02++;
    $("#counter02").html("clicks count: "+count02);
});

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






