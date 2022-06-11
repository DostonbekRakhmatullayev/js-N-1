var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elText = document.querySelector(".js-text");

var numberr = 50;

elForm.addEventListener("submit", function(e) {
  e.preventDefault();

  var elInputVal = Number(elInput.value);

  if (elInputVal > numberr) {
    elText.textContent = `Siz yoshinggiz ${elInputVal}da ekan siz 50 yoshdan katta ekansiz pensiyaga marhamat!!!`;
  }
  if (elInputVal < numberr) {
    elText.textContent = `Siz yoshinggiz ${elInputVal}da ekan. Hali siz 50  yoshga kirganing yuq pensiyaga hali bor`;
  }
  if (elInputVal == numberr){
    elText.textContent = `Siz ${elInputVal}yoshda ekansiz pensiyaga hali 1 yil bor`;
  }
  if (elInputVal <= 0) {
    elText.textContent = `Siz oldin tug'iling`;
  }
} )

