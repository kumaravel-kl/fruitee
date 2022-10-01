document.querySelector(".playButton").addEventListener("click", function() {
  var randomNumber1 = Math.floor(Math.random() * 4) + 1;
  var randomNumber2 = Math.floor(Math.random() * 4) + 1;
  var randomNumber3 = Math.floor(Math.random() * 4) + 1;

  document.querySelector(".img1").setAttribute("src", "images/fruit" + randomNumber1 + ".jpg");
  document.querySelector(".img2").setAttribute("src", "images/fruit" + randomNumber2 + ".jpg");
  document.querySelector(".img3").setAttribute("src", "images/fruit" + randomNumber3 + ".jpg");

  if (randomNumber1 === randomNumber2 && randomNumber2 === randomNumber3) {
    document.querySelector(".resultText").textContent = "You Won!!!";
    document.querySelector(".resultText").style.color = "#99C4C8";
  } else {
    document.querySelector(".resultText").textContent = "Try Your Luck Again.";
    document.querySelector(".resultText").style.color = "#CDC2AE";
  }
});
