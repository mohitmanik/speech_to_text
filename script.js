
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = true; 
recognition.interimResults = true; 


const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const recognizedText = document.getElementById('recognized-text');


startBtn.addEventListener('click', () => {
    recognition.start();  
    recognizedText.textContent = "Listening...";  
});

stopBtn.addEventListener('click', () => {
    recognition.stop(); 
    recognizedText.textContent = "Recognition stopped."; 
});

recognition.addEventListener('result', (event) => {
    const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    recognizedText.textContent = transcript;  
});

recognition.addEventListener('end', () => {
    if (recognition.continuous) {
        recognition.start(); 
    }
});
