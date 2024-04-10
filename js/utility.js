function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
}
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("bg-[#FFA500]");
}

function getARandomAlphabet() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split('');
    const randomIndex = Math.round(Math.random() * 25);
    const alphabet = alphabets[randomIndex];
    return alphabet;
    
    
    
}