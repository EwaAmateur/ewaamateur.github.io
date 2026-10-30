document.addEventListener("DOMContentLoaded", () => {
    const sendBtn = document.getElementById("sendBtn");
    const userInput = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    // Functie om een bericht toe te voegen aan de chatbox
    function appendMessage(text, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", `${sender}-message`);
        messageDiv.innerText = text;
        chatBox.appendChild(messageDiv);
        
        // Scroll automatisch naar het nieuwste bericht
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Gesimuleerde AI-antwoorden op basis van trefwoorden
    function getAIResponse(userText) {
        const text = userText.toLowerCase();
        
        if (text.includes("hallo") || text.includes("hooi") || text.includes("hey")) {
            return "Hallo daar! Hoe kan ik je vandaag helpen met je project?";
        } else if (text.includes("wat kun je")) {
            return "Ik kan teksten schrijven, code genereren, data analyseren en je helpen productiever te werken!";
        } else if (text.includes("prijzen") || text.includes("gratis")) {
            return "Je kunt Nova AI gratis uitproberen. Onze premium pakketten starten vanaf €9 per maand.";
        } else {
            return "Dat klinkt interessant! Als echte AI-koppeling actief was, zou ik daar nu een diepgaand antwoord op geven. Heb je nog een andere vraag?";
        }
    }

    // Actie bij het versturen van een bericht
    function handleSendMessage() {
        const text = userInput.value.trim();
        if (text === "") return;

        // 1. Voeg gebruikersbericht toe
        appendMessage(text, "user");
        userInput.value = "";

        // 2. Toon een "typende" status of korte vertraging voor realisme
        setTimeout(() => {
            const aiResponse = getAIResponse(text);
            appendMessage(aiResponse, "ai");
        }, 800);
    }

    // Klikken op de knop
    sendBtn.addEventListener("click", handleSendMessage);

    // Drukken op Enter in het invoerveld
    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    });
});
