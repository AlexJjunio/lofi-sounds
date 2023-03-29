// Efeitos de click do card

const afterCards = document.querySelectorAll("[class^='car']");

function removeSelected() {
  for(let i = 0; i < afterCards.length; i++) {
    afterCards[i].classList.remove('selected-card')
  }
}

afterCards.forEach(function(item) {
  item.addEventListener('click', () => {
    if (item.classList.contains('selected-card')) {
      item.classList.remove('selected-card');
    } else {
      removeSelected();
      item.classList.add('selected-card');
    }
  });
});

// Efeitos de hover do card

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

