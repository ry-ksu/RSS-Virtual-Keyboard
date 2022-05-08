// Add EventListener for physical and virtual keyboard

const keyEventListener = () => {
  let TEXTAREA = document.querySelector('.textarea');

  // Add EventListener for physical keyboard
  document.addEventListener('keydown', (event) => {
    // Add EventListener for Backspace
    if (event.key === 'Backspace') {
      if (document.querySelector('textarea:focus')) {
        if (!TEXTAREA.value === '') {
          TEXTAREA.value += TEXTAREA.value[TEXTAREA.value.length - 1];
        }
      }
      TEXTAREA.value = TEXTAREA.value.replace(/.$/, '');

      // !} else if (event.key == "Enter") {
      // !TEXTAREA.value += "/n";
    } else {
      TEXTAREA.value += event.key;
      if (document.querySelector('textarea:focus')) {
        TEXTAREA.value = TEXTAREA.value.replace(/.$/, '');
      }
    }
  });

  // Determine virtual key
  const determineKey = (keyClass) => {
    let key = keyClass.split(' ')[1];
    if (keyClass.includes(key)) {
      let KEY_RU = document.querySelector('.' + key).querySelector('.ru');
      let KEY_RU_CASED = KEY_RU.querySelector('.caseDown');
      let KEY_RU_CASEU = KEY_RU.querySelector('.caseUp');
      let KEY_RU_CAPS = KEY_RU.querySelector('.caps');
      let KEY_RU_SH_CAPS = KEY_RU.querySelector('.shiftCaps');
      let KEY_EN = document.querySelector('.' + key).querySelector('.en');
      let KEY_EN_CASED = KEY_EN.querySelector('.caseDown');
      let KEY_EN_CASEU = KEY_EN.querySelector('.caseUp');
      let KEY_EN_CAPS = KEY_EN.querySelector('.caps');
      let KEY_EN_SH_CAPS = KEY_EN.querySelector('.shiftCaps');

      if (KEY_RU.classList[1] === undefined) {
        if (KEY_RU_CASED.classList[1] === undefined) {
          TEXTAREA.value += KEY_RU_CASED.innerHTML;
        } else if (KEY_RU_CASEU.classList[1] === undefined) {
          TEXTAREA.value += KEY_RU_CASEU.innerHTML;
        } else if (KEY_RU_CAPS.classList[1] === undefined) {
          TEXTAREA.value += KEY_RU_CAPS.innerHTML;
        } else {
          TEXTAREA.value += KEY_RU_SH_CAPS.innerHTML;
        }
      } else if (KEY_EN.classList[1] === undefined) {
        if (KEY_EN_CASED.classList[1] === undefined) {
          TEXTAREA.value += KEY_EN_CASED.innerHTML;
        } else if (KEY_EN_CASEU.classList[1] === undefined) {
          TEXTAREA.value += KEY_EN_CASEU.innerHTML;
        } else if (KEY_EN_CAPS.classList[1] === undefined) {
          TEXTAREA.value += KEY_EN_CAPS.innerHTML;
        } else {
          TEXTAREA.value += KEY_EN_SH_CAPS.innerHTML;
        }
      }
    }
  };

  // Add EventListener for virtual keyboard
  document.querySelector('.keyboard').addEventListener('click', (event) => {
    let keyClass = event.target.closest('div').className;
    determineKey(keyClass);
  });
};

export { keyEventListener };
