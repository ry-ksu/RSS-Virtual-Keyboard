// Add EventListener for physical and virtual keyboard

const keyEventListener = () => {
  let TEXTAREA = document.querySelector('.textarea');

  // EventListener for Backspace
  const keyBackspace = () => {
    if (document.querySelector('textarea:focus')) {
      if (!TEXTAREA.value === '') {
        TEXTAREA.value += TEXTAREA.value[TEXTAREA.value.length - 1];
      } else {
        TEXTAREA.value += ' ';
      }
    }
    TEXTAREA.value = TEXTAREA.value.replace(/.$/, '');
  };

  // EventListener for Tab
  const keyTab = () => {
    TEXTAREA.value += '    ';
  };

  window.onkeydown = (e) => {
    console.log(e.code);
    if (e.code === 'Tab') {
      if (document.querySelector('textarea:focus')) {
        keyTab();
        TEXTAREA.value = TEXTAREA.value.substring(0, TEXTAREA.value.length - 4);
        return false;
      }
    }
    if (
      e.code === 'Escape' || e.code === 'Pause' || e.code === 'Home' || e.code === 'PageUp'
      || e.code === 'PageDown' || e.code === 'End' || e.code === 'F1'
      || e.code === 'F2' || e.code === 'F3' || e.code === 'F4' || e.code === 'F5'
      || e.code === 'F6' || e.code === 'F7' || e.code === 'F8' || e.code === 'F9'
      || e.code === 'F10' || e.code === 'F11' || e.code === 'F12'
      || e.code === 'NumLock' || e.code === 'NumpadDivide' || e.code === 'NumpadMultiply'
      || e.code === 'NumpadSubtract' || e.code === 'NumpadAdd' || e.code === 'NumpadEnter'
      || e.code === 'NumpadDecimal' || e.code === 'Numpad0' || e.code === 'Numpad1'
      || e.code === 'Numpad2' || e.code === 'Numpad3' || e.code === 'Numpad4'
      || e.code === 'Numpad6' || e.code === 'Numpad7' || e.code === 'Numpad8'
      || e.code === 'Numpad9' || e.code === 'Numpad5'
    ) {
      return false;
    }
    return true;
  };

  // Determine virtual key
  const determineKey = (key) => {
    if (
      key === 'Escape' || key === 'Pause' || key === 'Home' || key === 'PageUp'
      || key === 'PageDown' || key === 'End' || key === 'F1'
      || key === 'F2' || key === 'F3' || key === 'F4' || key === 'F5'
      || key === 'F6' || key === 'F7' || key === 'F8' || key === 'F9'
      || key === 'F10' || key === 'F11' || key === 'F12'
      || key === 'NumLock' || key === 'NumpadDivide' || key === 'NumpadMultiply'
      || key === 'NumpadSubtract' || key === 'NumpadAdd' || key === 'NumpadEnter'
      || key === 'NumpadDecimal' || key === 'Numpad0' || key === 'Numpad1'
      || key === 'Numpad2' || key === 'Numpad3' || key === 'Numpad4'
      || key === 'Numpad6' || key === 'Numpad7' || key === 'Numpad8'
      || key === 'Numpad9' || key === 'Numpad5'
    ) {
      return false;
    }
    if (key === 'Backspace') {
      keyBackspace();
    } else if (key === 'Tab') {
      keyTab();
    } else {
      let KEY = document.querySelector('.' + key);
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
      KEY.classList.add('active');
      document.addEventListener('keyup', () => {
        KEY.classList.remove('active');
      });
      document.addEventListener('mouseup', () => {
        KEY.classList.remove('active');
      });
    }
    return true;
  };

  // Add EventListener for physical keyboard
  document.addEventListener('keydown', (event) => {
    determineKey(event.code);
    if (document.querySelector('textarea:focus')) {
      if (!(event.code === 'Tab') && !(event.code === 'Backspace')) {
        TEXTAREA.value = TEXTAREA.value.replace(/.$/, '');
      }
    }
  });

  // Add EventListener for virtual keyboard
  document.querySelector('.keyboard').addEventListener('mousedown', (event) => {
    let keyClass = event.target.closest('div').className;
    let key = keyClass.split(' ')[1];
    if (keyClass.includes(key)) {
      determineKey(key);
      if (document.querySelector('textarea:focus')) {
        return false;
      }
    }
    return true;
  });
};

export { keyEventListener };
