// Obtener referencia al elemento donde se mostrará el resultado
const resultDiv = document.getElementById('result');

// Función para que la máquina elija una opción aleatoria
function getComputerChoice() {
    const choices = ['piedra', 'papel', 'tijeras'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Función para determinar el resultado del juego
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return '¡Es un empate!';
    } else if (
        (userChoice === 'piedra' && computerChoice === 'tijeras') ||
        (userChoice === 'papel' && computerChoice === 'piedra') ||
        (userChoice === 'tijeras' && computerChoice === 'papel')
    ) {
        return '¡Ganaste!';
    } else {
        return '¡La computadora gana!';
    }
}
// Función para manejar la selección del usuario
function selectChoice(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    resultDiv.textContent = `Elegiste ${userChoice}, la computadora eligió ${computerChoice}. ${result}`;
}


    
   // Obtener referencia a los elementos de las imágenes de resultado
const winImage = document.getElementById('winImage');
const loseImage = document.getElementById('loseImage');
const drawImage = document.getElementById('drawImage');

// Función para manejar la selección del usuario
function selectChoice(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    resultDiv.textContent = `Elegiste ${userChoice}, la computadora eligió ${computerChoice}. ${result}`;

    // Mostrar imagen correspondiente según el resultado
    if (result === '¡Ganaste!') {
        winImage.style.display = 'inline'; // Mostrar imagen de victoria
        loseImage.style.display = 'none'; // Ocultar imagen de derrota
        drawImage.style.display = 'none'; // Ocultar imagen de empate
    } else if (result === '¡La computadora gana!') {
        winImage.style.display = 'none'; // Ocultar imagen de victoria
        loseImage.style.display = 'inline'; // Mostrar imagen de derrota
        drawImage.style.display = 'none'; // Ocultar imagen de empate
    } else if (result === '¡Es un empate!') {
        winImage.style.display = 'none'; // Ocultar imagen de victoria
        loseImage.style.display = 'none'; // Ocultar imagen de derrota
        drawImage.style.display = 'inline'; // Mostrar imagen de empate
    } else {
        
    }
}

    




