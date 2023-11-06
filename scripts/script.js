// JavaScript Document

// Logo swap met Upgrade - Gemaakt met hulp van Bahaa//

// array voor het cyclen van movie-logo's//
var moviesLogos = [                       
  "/images/Movie Logos/iron-man logo.png",
  "/images/Movie Logos/iron-man logo.png",
  "/images/Movie Logos/iron-man logo.png",
  "/images/Movie Logos/iron-man-2 logo.png",
  "/images/Movie Logos/iron-man-2 logo.png",
  "/images/Movie Logos/iron-man-2 logo.png",
  "/images/Movie Logos/the-avengers logo.png",
  "/images/Movie Logos/iron-man-3 Logo.png",
  "/images/Movie Logos/iron-man-3 Logo.png",
  "/images/Movie Logos/iron-man-3 Logo.png",
  "/images/Movie Logos/iron-man-3 Logo.png",
  "/images/Movie Logos/iron-man-3 Logo.png",
  "/images/Movie Logos/avengers-age-of-ultron logo.png",
  "/images/Movie Logos/avengers-age-of-ultron logo.png",
  "/images/Movie Logos/avengers-age-of-ultron logo.png",
  "/images/Movie Logos/captain-america-civil-war logo.png",
  "/images/Movie Logos/spiderman-homecoming logo.png",
  "/images/Movie Logos/avengers-infinity-war logo.png",
  "/images/Movie Logos/avengers-endgame logo.png",
];

var count = 0;

// console.log(count);

var upgradeButton = document.querySelector("article ol button");    // Upgrade button //
var movieLogo = document.querySelector("h1 img");                   // Movie logo //

upgradeButton.onclick = imageNaarVolgendLogo;

function imageNaarVolgendLogo() {

  if (count >= 18) {
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



// array voor het cyclen van Iron Man suits//
var ironManSuitCycle = [                       
  // "/images/Iron Man suits/mark 1.png",
  "/images/Iron Man suits/mark 2.png",
  "/images/Iron Man suits/mark 3.png",
  "/images/Iron Man suits/mark 4.png",
  "/images/Iron Man suits/mark 5.png",
  "/images/Iron Man suits/mark 6.png",
  "/images/Iron Man suits/mark 7.png",
  "/images/Iron Man suits/mark 15.png",
  "/images/Iron Man suits/mark 17.png",
  "/images/Iron Man suits/mark 33.png",
  "/images/Iron Man suits/mark 40.png",
  "/images/Iron Man suits/mark 42.png",
  "/images/Iron Man suits/mark 43.png",
  "/images/Iron Man suits/mark 44.png",
  "/images/Iron Man suits/mark 45.png",
  "/images/Iron Man suits/mark 46.png",
  "/images/Iron Man suits/mark 47.png",
  "/images/Iron Man suits/mark 50.png",
  "/images/Iron Man suits/mark 85.png",  
];

// console.log(count);

var upgradeButtonSuits = document.querySelector("article ol button")                    // Upgrade button //
var ironManSuit = document.querySelector("article ol li:nth-of-type(1) img")       // Iron Man Suit //
var suitFlying = document.querySelector("article ol li:nth-of-type(1) img")        // Suit fly-in animation //

upgradeButtonSuits.onclick = combinedNextSuit

function imageNaarVolgendSuit() {

  if (count>= 18) {
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
    console.log("he");
    suitFlying.classList.remove("flyIn");
  }
  
}

function combinedNextSuit() {
  imageNaarVolgendSuit();
  suitFlyAnimation();
  imageNaarVolgendLogo();
}

