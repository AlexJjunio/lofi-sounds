const soundFiles = [
  'lofi1.mp3',
  'lofi2.mp3',
  'lofi3.mp3',
  'lofi4.mp3',
  'lofi5.mp3',
  'lofi6.mp3',
  'lofi7.mp3',
  'lofi8.mp3',
  'lofi9.mp3'
]

const afterCards = document.querySelectorAll("[class^='car']");

function removeSelected() {
  for (let i = 0; i < afterCards.length; i++) {
    afterCards[i].classList.remove('selected-card')
  }
}

afterCards.forEach(function (item) {
  item.addEventListener('click', () => {
    if (item.classList.contains('selected-card')) {
      item.classList.remove('selected-card');
    } else {
      removeSelected();
      item.classList.add('selected-card');
    }
  });
});


function mouseOut() {
  this.classList.remove('enter-card')
}

function mouseEntered() {
  this.classList.add('enter-card')
}

function mouseEnteredAndOut() {
  for (let index = 0; index < afterCards.length; index++) {
    afterCards[index].addEventListener('mouseenter', mouseEntered)
    afterCards[index].addEventListener('mouseleave', mouseOut)
  }
}

mouseEnteredAndOut()

const audioFiles = soundFiles.map(file => new Audio(`assets/lofi-sounds/${file}`));

let currentSound = null;
for (let index = 0; index < afterCards.length; index++) {
  const soundsSRC = audioFiles[index];
  afterCards[index].addEventListener('click', () => {
    if (currentSound && currentSound !== soundsSRC) {
      currentSound.pause();
    }
    if (soundsSRC.paused) {
      soundsSRC.loop = true
      soundsSRC.play();
      currentSound = soundsSRC;
    } else {
      soundsSRC.pause();
      currentSound = null;
    }
  });
}

const iconSound = document.querySelector('.icon-sound');
const slider = document.querySelector('.slider');
const divSlider = document.querySelector('.div-icon-sound')

divSlider.addEventListener('mouseenter', () => {
  soundMouseEnter()
})

divSlider.addEventListener('mouseleave', () => {
  soundMouseLeave();
});

function soundMouseEnter() {
  slider.style.display = 'block';
}

function soundMouseLeave() {
  slider.style.display = 'none';
}

audioFiles.forEach((audioFile) => {
  slider.addEventListener('input', () => {
    let { value } = slider
    audioFile.volume = value / 100
  })
})