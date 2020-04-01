// Introduction 




let introduction = new TypeIt('.IntroText', { 
	afterComplete: async (step, introduction) => {
     startGame();
  },
  speed: 50
	}) 

    .type("> Demande de la géo-position" )
    .pause(300)
    .type(".")
    .pause(300)
    .type(".")
    .pause(300)
    .type(".")
	.break()
	.pause(800)
	.type("> Position actuelle obtenue : ETOILE [EBLM J0555-57Ab], MILKY WAY GALAXY.")
	.break()
	.pause(1600)

	.type("Vous : Huh. J'ai enfin atteint ce qui semble être la plus petite étoile de la galaxie.")
	.pause(500)
    .break()
	.type(" Ordinateur, allume l'interface graphique et donne moi quelques informations sur cette étoile.")
	.pause(500)
    .break()
    .type("> Allumage en cours")
    .pause(300)
    .type(".")
    .pause(300)
    .type(".")
    .pause(300)
    .type(".")
    .pause(1600)
	.empty()
    .go();
    
function startGame() {
	introduction.destroy();
	document.getElementById('console').remove();
	document.getElementById('HUD').style.opacity = 1;
	document.getElementById('HUD').style.transition = "opacity 3s";
    document.getElementById('HUD').style.visibility = 'visible';
    new TypeIt('.consoleText', { 
     speed: 40
	}) 
	.pause(1900)
    .type("Proto : Bienvenue capitaine. Mon nom est Proto et je serais votre ordinateur assistant. Un nouveau module est disponible." )
    .pause(1500)
    .break()
    .type("Vous : Uh, juste désactive ta voix. J'suis là pour me faire de l'argent, pas pour faire la discussion." )
    .break()
    .pause(1500)
    .type(" Attends, c'est quoi un module ?" )
    .pause(1500)
    .break()
    .type("Proto : Un module est une structure supplémentaire que vous pouvez ajouter à votre vaisseau spatiale.")
    .pause(8000)
    .empty()
    .type("Vous : Ordinateur, quel est le prix de vente actuel de l'énergie ?")
    .break()
    .type("Proto : Appelez moi Proto, 'Ordinateur' n'est pas très respectueux. Aujourd'hui, les prix sont à $0.5 par unité d'énergie.")
    .go();
}
	
function vname(){
    var x = document.getElementById("vaisseauInput").value;
    document.getElementById("Title").innerHTML = x;
    document.getElementById("vaisseauInput").remove();
    document.getElementById("vaisseauButton").remove();
}