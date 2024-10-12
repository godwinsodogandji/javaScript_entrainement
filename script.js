// Sélectionner l'élément d'affichage et tous les boutons
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let previousInput = "";
let operator = null;

// Fonction pour mettre à jour l'affichage
function updateDisplay(value) {
  display.value = value;
}
// Gestion des clics sur les boutons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
 

    // Si l'utilisateur clique sur C (Clear)
    if (value === "C") {
      currentInput = "";
      previousInput = "";
      operator = null;
   
      updateDisplay("");
      return;
    }
    // Si l'utilisateur clique sur un chiffre ou un point (.)
    if (!isNaN(value) || value === ".") {
      currentInput += value;
      updateDisplay(currentInput);
    }
    // Si l'utilisateur clique sur un opérateur (+, -, *, /)
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      previousInput = currentInput;
      currentInput = "";
      operator = value;
    }
    // Si l'utilisateur clique sur =
    if (value === "=") {
      if (operator && currentInput && previousInput) {
        let result;
        switch (operator) {
          case "+":
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
          case "-":
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
          case "*":
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
          case "/":
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        }
        updateDisplay(result);
        currentInput = result.toString();
        operator = null;
      }
    }
  });
});


