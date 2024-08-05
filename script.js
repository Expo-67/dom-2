const hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];

let btn = document.getElementById("b");
let bgColor = document.getElementById("s");

btn.addEventListener("click", (event) => {
  const newColor = generateNewColor();

  document.body.style.backgroundColor = newColor;
  bgColor.textContent = newColor;
});
// find new color function using hexadecimal

function getCharacter(index) {
  return hexCharacters[index];
}

function generateNewColor() {
  let hexColorRep = "#";

  for (let index = 0; index < 6; index++) {
    const randomPosition = Math.floor(Math.random() * hexCharacters.length);
    hexColorRep += getCharacter(randomPosition);
  }

  return hexColorRep;
}

console.log(generateNewColor());
