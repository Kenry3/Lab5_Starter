// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // Page Elements
  var im = document.getElementById("image");
  var input = document.getElementById("text-to-speak");
  var voiceSelect = document.getElementById("voice-select");
  var button = document.querySelector('button');

  // Loading Voices to Drop Down
  const synth = window.speechSynthesis;
  let voices;
  synth.addEventListener('voiceschanged', () => {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  });

  button.addEventListener('click', () => {
    im.src = 'assets/images/smiling-open.png';
    var utterance = new SpeechSynthesisUtterance(input.value);
    // Set voice from selector
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }
    speechSynthesis.speak(utterance);
    utterance.onend = (event) => {
      im.src = 'assets/images/smiling.png';
    }
  });
}