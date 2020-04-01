var Resources = {
	power : 0,
	money : 0
}

var Informations = {
	star1Energy : 840000
}

var MK1 = {
	solarPanel : false,
	solarQuantity : 0,
	thermalPanel : false,
	thermalQuantity : 0
}


// Advancements

function advSolarPanel() {
	MK1.solarPanel = true;
	MK1.solarQuantity += 1;
	document.getElementById('adv1').remove();
}

function advThermalPanel() {
	MK1.thermalPanel = true;
	MK1.thermalQuantity += 1;
	document.getElementById('adv1').remove();
}

// Selling

function sell() {
	if(Resources.power >= 1) {
        Resources.money = Resources.money + (Resources.power / 2); 
		Resources.power = 0;
	}
}





function add() {
  // Will update resources every second.
    if (MK1.solarPanel == true) {
    	Resources.power += 2 * MK1.solarQuantity;
    } else if (MK1.thermalPanel == true) {
    	Resources.power += 1 * MK1.thermalQuantity;
    }
 Informations.star1Energy = Informations.star1Energy - (2 * MK1.solarQuantity + 1 * MK1.thermalQuantity);   
 document.getElementById("starEnergy").innerHTML = Informations.star1Energy;	
}
setInterval(add, 1000);

function update() {
  // Will inner HTML
    document.getElementById("moneyCount").innerHTML = "$" + Resources.money;
    document.getElementById("powerCount").innerHTML = Resources.power;
}
setInterval(update, 10);
