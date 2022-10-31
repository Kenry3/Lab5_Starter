// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var a = document.getElementById('horn-select');
  var b = document.querySelector('img');
  var audio = document.querySelector('.hidden');
  var button = document.querySelector('button');
  a.addEventListener('change', function() {
    if(this.value == 'air-horn') {
      b.src = 'assets/images/air-horn.svg';
      audio.src = 'assets/audio/air-horn.mp3';
    }
    else if(this.value == 'car-horn') {
      b.src = 'assets/images/car-horn.svg';
      audio.src = 'assets/audio/car-horn.mp3';
    }
    else if(this.value == 'party-horn') {
      b.src = 'assets/images/party-horn.svg';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  });
  var volume = document.getElementById('volume');
  var divpart = document.getElementById('volume-controls');
  var volumeImg = divpart.querySelector('img');
  volume.addEventListener('input', function() {
    var v = volume.value;
    audio.volume = v/100;
    if(v == 0) {
      volumeImg.src = 'assets/icons/volume-level-0.svg';
    }
    else if(v >= 1 && v < 33) volumeImg.src = 'assets/icons/volume-level-1.svg';
    else if(v >= 33 && v < 67) volumeImg.src = 'assets/icons/volume-level-2.svg';
    else if(v >= 67) volumeImg.src = 'assets/icons/volume-level-3.svg';
  });
  button.addEventListener('click', () => {
    audio.play();
  });
}