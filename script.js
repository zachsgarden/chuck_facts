async function getAFact() {
  await fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => {
      displayFact(data.value);
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}

function displayFact(fact) {
  const factWrap = document.getElementById("fact-wrap");
  const factCol = document.createElement("div");
  const factCard = document.createElement("div");
  factCol.classList.add("col", "s12", "m6", "l4");
  factCard.classList.add("card", "my-card", "small");
  factCard.innerHTML = fact;
  factWrap.prepend(factCol);
  factCol.appendChild(factCard);
}
