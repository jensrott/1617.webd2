// ga ik niet gebruiken in de website

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 17) {
	greeting = 'Goede Avond!';
} else if (hourNow >= 12) {
	greeting = 'Goede Middag!';
} else if (hourNow >= 13) {
	greeting = 'Goede Namiddag!';
} else if (hourNow > 0) {
	greeting = 'Goede Morgen!';
} else {
	greeting = 'Welkom!';
}

document.write(greeting);
