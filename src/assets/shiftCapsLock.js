const shiftCapsLock = () => {
  let ALL_RU_CLASSES = document.querySelectorAll('.ru');
  let ALL_EN_CLASSES = document.querySelectorAll('.en');
  // If class 'en' is hidden
  if (!(document.querySelector('.en').classList[1] === 'hidden')) {
    for (let i = 0; i < ALL_EN_CLASSES.length; i += 1) {
      ALL_EN_CLASSES[i].querySelector('.caseUp').classList.value = 'caseUp hidden';
      ALL_EN_CLASSES[i].querySelector('.caseDown').classList.value = 'caseDown hidden';
      ALL_EN_CLASSES[i].querySelector('.caps ').classList.value = 'caps hidden';
      ALL_EN_CLASSES[i].querySelector('.shiftCaps').classList.value = 'shiftCaps';
    }
  } else {
    for (let i = 0; i < ALL_RU_CLASSES.length; i += 1) {
      ALL_RU_CLASSES[i].querySelector('.caseUp').classList.value = 'caseUp hidden';
      ALL_RU_CLASSES[i].querySelector('.caseDown').classList.value = 'caseDown hidden';
      ALL_RU_CLASSES[i].querySelector('.caps ').classList.value = 'caps hidden';
      ALL_RU_CLASSES[i].querySelector('.shiftCaps').classList.value = 'shiftCaps';
    }
  }
  document.addEventListener('keyup', (event) => {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      if (!(document.querySelector('.en').classList[1] === 'hidden')) {
        for (let i = 0; i < ALL_EN_CLASSES.length; i += 1) {
          ALL_EN_CLASSES[i].querySelector('.caseUp').classList.value = 'caseUp hidden';
          ALL_EN_CLASSES[i].querySelector('.caseDown').classList.value = 'caseDown hidden';
          ALL_EN_CLASSES[i].querySelector('.caps ').classList.value = 'caps';
          ALL_EN_CLASSES[i].querySelector('.shiftCaps').classList.value = 'shiftCaps hidden';
        }
      } else {
        for (let i = 0; i < ALL_RU_CLASSES.length; i += 1) {
          ALL_RU_CLASSES[i].querySelector('.caseUp').classList.value = 'caseUp hidden';
          ALL_RU_CLASSES[i].querySelector('.caseDown').classList.value = 'caseDown hidden';
          ALL_RU_CLASSES[i].querySelector('.caps ').classList.value = 'caps';
          ALL_RU_CLASSES[i].querySelector('.shiftCaps').classList.value = 'shiftCaps hidden';
        }
      }
    }
  });

  const mouseupEvent = () => {
    if (!(document.querySelector('.en').classList[1] === 'hidden')) {
      for (let i = 0; i < ALL_EN_CLASSES.length; i += 1) {
        ALL_EN_CLASSES[i].querySelector('.caseUp').classList.value = 'caseUp hidden';
        ALL_EN_CLASSES[i].querySelector('.caseDown').classList.value = 'caseDown hidden';
        ALL_EN_CLASSES[i].querySelector('.caps ').classList.value = 'caps';
        ALL_EN_CLASSES[i].querySelector('.shiftCaps').classList.value = 'shiftCaps hidden';
      }
    } else {
      for (let i = 0; i < ALL_RU_CLASSES.length; i += 1) {
        ALL_RU_CLASSES[i].querySelector('.caseUp').classList.value = 'caseUp hidden';
        ALL_RU_CLASSES[i].querySelector('.caseDown').classList.value = 'caseDown hidden';
        ALL_RU_CLASSES[i].querySelector('.caps ').classList.value = 'caps';
        ALL_RU_CLASSES[i].querySelector('.shiftCaps').classList.value = 'shiftCaps hidden';
      }
    }
  };
  document.querySelector('.ShiftLeft').addEventListener('mouseup', mouseupEvent);
  document.querySelector('.ShiftRight').addEventListener('mouseup', mouseupEvent);
};

export { shiftCapsLock };
