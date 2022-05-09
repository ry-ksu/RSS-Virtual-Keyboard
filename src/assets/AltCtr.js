// EventListener for LeftAlt and LeftCtrl
const AltCtr = () => {
  let ALL_RU_CLASSES = document.querySelectorAll('.ru');
  let ALL_EN_CLASSES = document.querySelectorAll('.en');
  // If class 'en' is hidden
  if (document.querySelector('.en').classList[1] === 'hidden') {
    let language = 'en';
    localStorage.setItem('language', language);
    for (let i = 0; i < ALL_RU_CLASSES.length; i += 1) {
      ALL_EN_CLASSES[i].classList.value = 'en';
      ALL_RU_CLASSES[i].classList.value += ' hidden';
    }
    if (document.querySelector('.ru').querySelector('.caseDown').classList[1] !== 'hidden') {
      for (let i = 0; i < ALL_EN_CLASSES.length; i += 1) {
        ALL_EN_CLASSES[i].querySelector('.caseDown').classList.value = 'caseDown';
        ALL_RU_CLASSES[i].querySelector('.caseDown').classList.value += ' hidden';
      }
    } else if (document.querySelector('.ru').querySelector('.caseUp').classList[1] !== 'hidden') {
      for (let i = 0; i < ALL_EN_CLASSES.length; i += 1) {
        ALL_EN_CLASSES[i].querySelector('.caseUp').classList.value = 'caseUp';
        ALL_RU_CLASSES[i].querySelector('.caseUp').classList.value += ' hidden';
      }
    } else if (document.querySelector('.ru').querySelector('.caps').classList[1] !== 'hidden') {
      for (let i = 0; i < ALL_EN_CLASSES.length; i += 1) {
        ALL_EN_CLASSES[i].querySelector('.caps').classList.value = 'caps';
        ALL_RU_CLASSES[i].querySelector('.caps').classList.value += ' hidden';
      }
    } else if (document.querySelector('.ru').querySelector('.shiftCaps').classList[1] !== 'hidden') {
      for (let i = 0; i < ALL_EN_CLASSES.length; i += 1) {
        ALL_EN_CLASSES[i].querySelector('.shiftCaps').classList.value = 'shiftCaps';
        ALL_RU_CLASSES[i].querySelector('.shiftCaps').classList.value += ' hidden';
      }
    }
  // If class 'ru' is hidden
  } else {
    let language = 'ru';
    localStorage.setItem('language', language);
    for (let i = 0; i < ALL_EN_CLASSES.length; i += 1) {
      ALL_RU_CLASSES[i].classList.value = 'ru';
      ALL_EN_CLASSES[i].classList.value += ' hidden';
    }
    if (document.querySelector('.en').querySelector('.caseDown').classList[1] !== 'hidden') {
      for (let i = 0; i < ALL_RU_CLASSES.length; i += 1) {
        ALL_RU_CLASSES[i].querySelector('.caseDown').classList.value = 'caseDown';
        ALL_EN_CLASSES[i].querySelector('.caseDown').classList.value += ' hidden';
      }
    } else if (document.querySelector('.en').querySelector('.caseUp').classList[1] !== 'hidden') {
      for (let i = 0; i < ALL_RU_CLASSES.length; i += 1) {
        ALL_RU_CLASSES[i].querySelector('.caseUp').classList.value = 'caseUp';
        ALL_EN_CLASSES[i].querySelector('.caseUp').classList.value += ' hidden';
      }
    } else if (document.querySelector('.en').querySelector('.caps').classList[1] !== 'hidden') {
      for (let i = 0; i < ALL_RU_CLASSES.length; i += 1) {
        ALL_RU_CLASSES[i].querySelector('.caps').classList.value = 'caps';
        ALL_EN_CLASSES[i].querySelector('.caps').classList.value += ' hidden';
      }
    } else if (document.querySelector('.en').querySelector('.shiftCaps').classList[1] !== 'hidden') {
      for (let i = 0; i < ALL_RU_CLASSES.length; i += 1) {
        ALL_RU_CLASSES[i].querySelector('.shiftCaps').classList.value = 'shiftCaps';
        ALL_EN_CLASSES[i].querySelector('.shiftCaps').classList.value += ' hidden';
      }
    }
  }
};

export { AltCtr };
