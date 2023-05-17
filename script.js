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
  const factDiv = document.getElementById("fact-wrap");
  const factText = document.createElement("p");
  factText.innerHTML = fact;
  factDiv.appendChild(factText);
}
