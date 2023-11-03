// JavaScript Document

// Logo swap met Upgrade - Gemaakt met hulp van Bahaa//

// array voor het cyclen van movie-logo's//
var moviesLogos = [                       
  "/images/Movie Logos/Iron-man-movie-logo-01-01.png",
  "/images/Movie Logos/Iron Man 2 Logo.png",
  "/images/Movie Logos/Iron Man 3 Logo.png",
  "/images/Movie Logos/The Avengers logo.png",
  "/images/Movie Logos/Avengers Age of Ultron logo.jpg",
  "/images/Movie Logos/Captain America Civil War logo.png",
  "/images/Movie Logos/Spider-man Homecoming logo.png",
  "/images/Movie Logos/Avengers Infinity War logo.png",
  "/images/Movie Logos/Avengers Endgame logo.png",
];

var count = 0;

// console.log(count);

var upgradeButton = document.querySelector("article button"); // Upgrade button //
var movieLogo = document.querySelector("h1 img"); // Movie logo //

upgradeButton.onclick = imageNaarLogo2;

function imageNaarLogo2() {
  // movieLogo.src = "/images/Movie Logos/Iron Man 2 Logo.png";
  if (count >= 8) {
    count = 0;
    // console.log(count);
    // console.log(moviesLogos[count]);
    movieLogo.src = moviesLogos[count]
  } else {
    count++;
    // console.log(count);
    // console.log(moviesLogos[count]);
    movieLogo.src = moviesLogos[count]
  }
}
