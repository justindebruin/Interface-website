// JavaScript Document


/********************/
/* MOVIE LOGO ARRAY */
/********************/


// Logo swap met Upgrade - Gemaakt met hulp van Bahaa//

var moviesLogos = [                       
  "./images/Movie Logos/iron-man logo.png",
  "./images/Movie Logos/iron-man logo.png",
  "./images/Movie Logos/iron-man logo.png",
  "./images/Movie Logos/iron-man-2 logo.png",
  "./images/Movie Logos/iron-man-2 logo.png",
  "./images/Movie Logos/iron-man-2 logo.png",
  "./images/Movie Logos/the-avengers logo.png",
  "./images/Movie Logos/iron-man-3 Logo.png",
  "./images/Movie Logos/iron-man-3 Logo.png",
  "./images/Movie Logos/iron-man-3 Logo.png",
  "./images/Movie Logos/iron-man-3 Logo.png",
  "./images/Movie Logos/iron-man-3 Logo.png",
  "./images/Movie Logos/avengers-age-of-ultron logo.png",
  "./images/Movie Logos/avengers-age-of-ultron logo.png",
  "./images/Movie Logos/avengers-age-of-ultron logo.png",
  "./images/Movie Logos/captain-america-civil-war logo.png",
  "./images/Movie Logos/spiderman-homecoming logo.png",
  "./images/Movie Logos/avengers-infinity-war logo.png",
  "./images/Movie Logos/avengers-endgame logo.png",
];

var count = 0;

// console.log(count);

var upgradeButton = document.querySelector("article ul button");    // Upgrade button //
var movieLogo = document.querySelector("h1 img");                   // Movie logo //

upgradeButton.onclick = combinedNextSuit;

function imageNaarVolgendLogo() {

  if (count >= 19) {
    count = 0;
    console.log(count);
    console.log(moviesLogos[count]);
    movieLogo.src = moviesLogos[count]

  } else {
    count++;
    console.log(count);
    console.log(moviesLogos[count]);
    movieLogo.src = moviesLogos[count]
  }
}






/************************/
/* IRON MAN SUITS ARRAY */
/************************/


var ironManSuitCycle = [                       
  // "/images/Iron Man suits/mark 1.png",
  "./images/Iron Man suits/mark 2.png",
  "./images/Iron Man suits/mark 3.png",
  "./images/Iron Man suits/mark 4.png",
  "./images/Iron Man suits/mark 5.png",
  "./images/Iron Man suits/mark 6.png",
  "./images/Iron Man suits/mark 7.png",
  "./images/Iron Man suits/mark 15.png",
  "./images/Iron Man suits/mark 17.png",
  "./images/Iron Man suits/mark 33.png",
  "./images/Iron Man suits/mark 40.png",
  "./images/Iron Man suits/mark 42.png",
  "./images/Iron Man suits/mark 43.png",
  "./images/Iron Man suits/mark 44.png",
  "./images/Iron Man suits/mark 45.png",
  "./images/Iron Man suits/mark 46.png",
  "./images/Iron Man suits/mark 47.png",
  "./images/Iron Man suits/mark 50.png",
  "./images/Iron Man suits/mark 85.png",  
];

// console.log(count);

var upgradeButtonSuits = document.querySelector("article ul button")                    // Upgrade button //
var ironManSuit = document.querySelector("article ul li:nth-of-type(1) img")       // Iron Man Suit //
var suitFlying = document.querySelector("article ul li:nth-of-type(1) img")        // Suit fly-in animation //

upgradeButtonSuits.onclick = combinedNextSuit

function imageNaarVolgendSuit() {

  if (count>= 19) {
    window.location.reload();
    console.log(count);
    console.log(ironManSuitCycle[count]);
    ironManSuit.src = ironManSuitCycle[count]

  } else {
    // count++;
    console.log(count);
    console.log(ironManSuitCycle[count]);
    ironManSuit.src = ironManSuitCycle[count]
  }
}

function suitFlyAnimation() {
  suitFlying.classList.add("flyIn");

  suitFlying.onanimationend = geland;
  
  function geland() {
    // console.log("he");
    suitFlying.classList.remove("flyIn");
  }
  
}









/*******************/
/* GELUID AFSPELEN */
/*******************/

var soundButton = document.querySelector("article ul:nth-of-type(2) button")
var sound = document.querySelector("article ul audio")

soundButton.onclick = combinedNextSuit;

function mechanicalSounds() {
  if (sound.paused) {
      sound.play();
      // console.log("muziek");
    }

  else {
    sound.pause();
    // console.log("muziek uit");
  }
}






/****************/
/* TEXT BUBBLES */
/****************/


// text swap HEAD //
var textHead = [
  "Very bulky suit of strong armour, fitted with some rockets and flamethrowers.",
  "Added a HUD (heads-up display)",
  "Added wrist-mounted missiles, shoulder-mounted machine guns and deployable flares.",
  "Uses a brighter shade of red.",
  "Prioritized portability over strength and endurance.",
  "Introduced a grenade launcher, missile launcher and lasers into the suit.",
  "Brought back the original circular hole for the arc reactor.",
  "First suit specifically designed for stealth purposes.",
  "Has electronic cloaking and colour camouflaging built into the suit for stealth operations.",
  "Features an enhanced energy system.",
  "First suit able to reach speeds over Mach 5 (6174 km/h).",
  "Uses a slightly lighter shade of gold and an inverse colour-scheme with gold being the predominant colour.",
  "Merges the versatility of the Mark XLII and the endurance of the Mark VII to combine the best features.",
  "Features multiple arc reactors and weapons specifically designed to subdue the Hulk.",
  "First suit to use JARVIS’ replacement, FRIDAY.",
  "The helmet can retract into the suit, making sure Tony can talk more personally while wearing the suit.",
  "Technically the same suit as the Mark XLVI, its main improvement being that the suit was controllable by Wi-Fi.",
  "First suit to feature nanotechnology, making its features basically endless.",
  "Has a slightly more robust and muscular design, compared to the Mark L.",
];

var headButton = document.querySelector("article ul:nth-of-type(2) button");
var headText = document.querySelector("article ul:nth-of-type(3) li:nth-of-type(2)")

headButton.onclick = combinedNextSuit;

function headTextSwap() {

  headText.innerHTML = textHead[count];

  if (count>= 19) {
    window.location.reload();
    // console.log(count);
    // console.log(ironManSuitCycle[count]);
    headText.src = textHead[count]

  } else {
    // count++;
    // console.log(count);
    // console.log(ironManSuitCycle[count]);
    headText.src = textHead[count]
  }
}


// text swap BODY //
var textBody = [
  "Only capable of very short bursts of flight.",
  "All parts of the body are covered, but the suit is not capable of flying at high altitudes. Also has a built in arc reactor.",
  "Fixed the freezing problem by changing the armour to be made of a gold-titanium alloy.",
  "Added a portable potty-system so there was no need to go to the toilet.",
  "First and only suit to be shaped into a suitcase and is able of a quick suit-up.",
  "Changed the arc reactor hole to a triangular shape.",
  "Suit assembles around Iron Man through a sensor bracelet.",
  "Has a rugged helmet and sharp angles, contrary to the main Iron Man suits.",
  "Sacrifices strength, firepower and durability in favour of mobility.",
  "Has one hidden blade in each arm.",
  "Has a powerful thruster in the back to stabilize it while flying and fighting.",
  "First suit able to be remotely controlled by chips implanted in Tony Starks arms.",
  "Features a Sentry Mode to secure an area while Tony is out of the suit.",
  "Developed as a contingency plan in case the Hulk lost control.",
  "Makes use of a chromed gold titanium, making the suit considerably tougher and shinier.",
  "This suit makes use of miniature arc reactors throughout the suit for enhanced power.",
  "This suit makes use of silver as its main colour and could be fully operated by FRIDAY.",
  "The suit could reshape itself in a matter of seconds and create a variety of weapons.",
  "Made the armour able to withstand more damage and harness the power of all 6 Infinity Stones.",
];

var bodyButton = document.querySelector("article ul:nth-of-type(2) button");
var bodyText = document.querySelector("article ul:nth-of-type(5) li:nth-of-type(2)")

bodyButton.onclick = combinedNextSuit;

function bodyTextSwap() {

  bodyText.innerHTML = textBody[count];

  if (count>= 19) {
    window.location.reload();
    // console.log(count);
    // console.log(ironManSuitCycle[count]);
    bodyText.src = textBody[count]

  } else {
    // count++;
    // console.log(count);
    // console.log(ironManSuitCycle[count]);
    bodyText.src = textBody[count]
  }
}



// text swap FEET //
var textFeet = [
  "The back and the knees were left open and were vulnerable.",
  "Improved flight capabilities. Requires special apparatus to get in and out of the armour.",
  "First iteration to feature the iconic red and gold colour scheme.",
  "Higher degree of mobility.",
  "Very high degree of mobility, but very little durability.",
  "Increased resistance to electricity.",
  "Introduced powerful thrusters in its back, to allow flying while in combat.",
  "Nicknamed “Sneaky”.",
  "Nicknamed “Nightclub”.",
  "Nicknamed “Silver Centurion”.",
  "Nicknamed “Shotgun”.",
  "Relies on its high-powered repulsors to fight, along with the regular weaponry.",
  "The suit was made to fit inside the ‘Hulkbuster’.",
  "The suit, nicknamed “Hulkbuster”, was deployed from a satellite named Veronica and assembled around Tony’s regular suit.",
  "Increased durability so it was able to withstand a long fight, while still being able to overload a humongous thruster.",
  "Starks watch stored a glove with a sonar- and flashbang-blast to fight enemies without the need to war the full suit.",
  "Has powerful, detachable jets that launch from the suit.",
  "The design mimicked the shape of Starks body and was able to fly into deep space without any drawbacks.",
  "Solved the limitation of FRIDAY not working in deep space.",
]

var feetButton = document.querySelector("article ul button");
var feetText = document.querySelector("article ul:nth-of-type(4) li:nth-of-type(2)")

feetButton.onclick = combinedNextSuit;

function feetTextSwap() {

  feetText.innerHTML = textFeet[count];

  if (count>= 19) {
    window.location.reload();
    // console.log(count);
    // console.log(ironManSuitCycle[count]);
    feetText.src = textFeet[count]

  } else {
    // count++;
    // console.log(count);
    // console.log(ironManSuitCycle[count]);
    feetText.src = textFeet[count]
  }
}

// text swap suit name //
var suitName = [
  "Mark I",
  "Mark II",
  "Mark III",
  "Mark IV",
  "Mark V",
  "Mark VI",
  "Mark VII",
  "Mark XV",
  "Mark XVI",
  "Mark XXXIII",
  "Mark XL",
  "Mark XLII",
  "Mark XLIII",
  "Mark XLIV",
  "Mark XLV",
  "Mark XLVI",
  "Mark XLVII",
  "Mark L",
  "Mark LXXXV",
]

var suitNameButton = document.querySelector("article ul button");
var suitNameText = document.querySelector("article ul:nth-of-type(6) li:nth-of-type(2)")

suitNameButton.onclick = combinedNextSuit;

function suitNameSwap() {

  suitNameText.innerHTML = suitName[count];

  if (count>= 19) {
    window.location.reload();
    // console.log(count);
    // console.log(ironManSuitCycle[count]);
    suitNameText.src = suitName[count]

  } else {
    // count++;
    // console.log(count);
    // console.log(ironManSuitCycle[count]);
    suitNameText.src = suitName[count]
  }
}



function combinedNextSuit() {
  mechanicalSounds(); 
  imageNaarVolgendSuit();
  suitFlyAnimation();
  imageNaarVolgendLogo();
  headTextSwap();
  bodyTextSwap();
  feetTextSwap();
  suitNameSwap();
}

