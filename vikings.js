var Vikings = function (name, strength, health, id){
	this.name = name;	
	this.strength = strength;
	this.health = health;
	this.id = id;
	this.warcry = "For the Jarl!!!";
}
var Saxons = function (strength, health) {
	this.strength = strength;
	this.health = health;
}

function train(){
	var choosePlayer1 = randomValues(0,3);
	var choosePlayer2 = randomValues(0,3);
	while (choosePlayer2 == choosePlayer1){
		var choosePlayer2 = randomValues(0,3);
	}

	var player1 = vikingsPopulation[choosePlayer1];
	var player2 = vikingsPopulation[choosePlayer2];

	console.log(player1.name + " and " + player2.name + " are going to fight.");
	/*Hemos elegido los dos vikingos que se van a pegar*/

	/*En cada turno pegara un vikingo*/
	while ((player2.health - player1.strength) >= 1 || (player1.health - player2.strength) >= 1){
		for (var i = 0; i < 6; i++) {
			if (i % 2 == 0){
				player2.health = player2.health - player1.strength;
				console.log(player2.name + " tiene " + player2.health + " de vida.");
			} else {
				player1.health = player1.health - player2.strength;
				console.log(player1.name + " tiene " + player1.health + " de vida.");
			}
		}
		break;
	}

	console.log (player1.name + " has " + player1.health + " HP");
	console.log (player2.name + " has " + player2.health + " HP");

	if (player1.health > player2.health) {
		console.log ("Ha ganado " + player1.name);
	}
	else {
		console.log ("Ha ganado " + player2.name);
	}
}

function randomValues (min, max) { //Funcion que dara un valor aleatorio de vida y fuerza a cada vikingo
	return Math.floor(Math.random() *(max - min + 1) + min);
}

function fight () {
	for (var j = 0; j < randomValues(5,8); j++) {
		
	}
}

var vik1 = new Vikings("Pepe", randomValues(5,10), randomValues(90,100), 1);
var vik2 = new Vikings("Luis", randomValues(5,10), randomValues(90,100), 2);
var vik3 = new Vikings("Juan", randomValues(5,10), randomValues(90,100), 3);
var vik4 = new Vikings("Nuria", randomValues(5,10), randomValues(90,100), 4);
var vikingsPopulation = [vik1, vik2, vik3, vik4];

var sax1 = new Saxons (randomValues(1,5), randomValues(50,70));
var sax2 = new Saxons (randomValues(1,5), randomValues(50,70));
var sax3 = new Saxons (randomValues(1,5), randomValues(50,70));
var sax4 = new Saxons (randomValues(1,5), randomValues(50,70));

train();

