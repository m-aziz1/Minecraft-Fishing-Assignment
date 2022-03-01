// Minecraft Fishing Simulator by Mr. V

// HTML Elements
let steveImgEl = document.getElementById("steve-img");
let alexImgEl = document.getElementById("alex-img");
let villagerImgEl = document.getElementById("villager-img");
let fishBtnEl = document.getElementById("fish-btn");
let resultImgEl = document.getElementById("result-img");
let codSpanEl = document.getElementById("cod-span");
let salmonSpanEl = document.getElementById("salmon-span");
let tropicalSpanEl = document.getElementById("tropical-span");
let pufferSpanEl = document.getElementById("puffer-span");

// Global Variables
let character = "steve";
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Event
fishBtnEl.addEventListener("click", catchFish);

function catchFish() {
  switch (character) {
    // STEVE PROBABILITIES: cod (70%), salmon (20%), tropical (5%), puffer (5%)
    case "steve":
      simulateCatch(70, 22, 5);
      break;
    // ALEX PROBABILITIES: cod (10%), salmon (10%), tropical (30%), puffer (50%)
    case "alex":
      simulateCatch(10, 10, 30);
      break;
    // VILLAGER PROBABILITIES: cod (25%), salmon (25%), tropical (25%), puffer (25%)
    case "villager":
      simulateCatch(25, 25, 25);
  }
}

//Fishing Probability
function simulateCatch(codProb, salmonProb, tropicalProb) {
  let randNum = Math.round(Math.random() * (100 - 1) + 1);
  if (randNum < codProb) {
    numCod++;
    codSpanEl.innerHTML = numCod;
    resultImgEl.src = "img/Raw-Cod.png";
  } else if (randNum < codProb + salmonProb) {
    numSalmon++;
    salmonSpanEl.innerHTML = numSalmon;
    resultImgEl.src = "img/Raw-Salmon.png";
  } else if (randNum < codProb + salmonProb + tropicalProb) {
    numTropical++;
    tropicalSpanEl.innerHTML = numTropical;
    resultImgEl.src = "img/Tropical-Fish.png";
  } else {
    numPuffer++;
    pufferSpanEl.innerHTML = numPuffer;
    resultImgEl.src = "img/Pufferfish.png";
  }
}

// Character Select
steveImgEl.addEventListener(
  "click", selectCharacter.bind(undefined, "steve", steveImgEl, alexImgEl, villagerImgEl)
);
alexImgEl.addEventListener(
  "click", selectCharacter.bind(undefined, "alex", alexImgEl, steveImgEl, villagerImgEl)
);
villagerImgEl.addEventListener(
  "click", selectCharacter.bind(undefined, "villager", villagerImgEl, steveImgEl, alexImgEl)
);

function selectCharacter(select, add, remove1, remove2) {
  character = select;
  add.classList.add("active");
  remove1.classList.remove("active");
  remove2.classList.remove("active");
}