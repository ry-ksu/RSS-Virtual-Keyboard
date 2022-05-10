import { AltCtr } from './AltCtr';
import { shift } from './shift';
import { capsLock } from './capsLock';
import { shiftCapsLock } from './shiftCapsLock';

// Add EventListener for physical and virtual keyboard

const keyEventListener = () => {
  let TEXTAREA = document.querySelector('.textarea');
  let language = '';
  let count = 1;

  // EventListener for a Del
  const keyDel = () => {
    TEXTAREA.focus();
    if (TEXTAREA.selectionStart === TEXTAREA.selectionEnd) {
      TEXTAREA.selectionEnd += 1;
    }
    TEXTAREA.setRangeText('');
  };

  // EventListener for a Backspace
  const keyBackspace = () => {
    TEXTAREA.focus();
    if (TEXTAREA.selectionStart === 0) {
      //
    } else if (TEXTAREA.selectionStart === TEXTAREA.selectionEnd) {
      TEXTAREA.selectionStart -= 1;
    }
    TEXTAREA.setRangeText('');
  };

  // EventListener for a Enter
  const keyEnter = () => {
    TEXTAREA.focus();
    let positionStart = TEXTAREA.selectionStart;
    TEXTAREA.setRangeText('\n');
    if (positionStart === TEXTAREA.selectionStart) {
      TEXTAREA.selectionStart += 1;
    }
  };

  // EventListener for a Tab
  const keyTab = () => {
    TEXTAREA.focus();
    TEXTAREA.setRangeText('    ');
    TEXTAREA.selectionStart += 4;
  };

  // Check language in Local Storage
  try {
    language = localStorage.getItem('language');
  } catch {
    // empty
  }

  if (language === 'ru') {
    AltCtr();
  }

  window.onkeydown = () => {
    return false;
  };

  // Determine virtual a key
  const determineKey = (key) => {
    // Determine and disable a missing key
    if (
      key === 'Escape' || key === 'Pause' || key === 'Home' || key === 'PageUp'
      || key === 'PageDown' || key === 'End' || key === 'F1' || key === 'ScrollLock'
      || key === 'F2' || key === 'F3' || key === 'F4' || key === 'F5'
      || key === 'F6' || key === 'F7' || key === 'F8' || key === 'F9'
      || key === 'F10' || key === 'F11' || key === 'F12' || key === 'MetaLeft'
      || key === 'NumLock' || key === 'NumpadDivide' || key === 'NumpadMultiply'
      || key === 'NumpadSubtract' || key === 'NumpadAdd' || key === 'NumpadEnter'
      || key === 'NumpadDecimal' || key === 'Numpad0' || key === 'Numpad1'
      || key === 'Numpad2' || key === 'Numpad3' || key === 'Numpad4'
      || key === 'Numpad6' || key === 'Numpad7' || key === 'Numpad8'
      || key === 'Numpad9' || key === 'Numpad5' || key === 'ContextMenu'
    ) {
      return false;
    }
    // Animation of pressing a key
    let KEY = document.querySelector('.' + key);
    let KEY_RU = KEY.querySelector('.ru');
    let KEY_EN = KEY.querySelector('.en');

    KEY.classList.add('active');
    if (key !== 'CapsLock') {
      document.addEventListener('keyup', () => {
        KEY.classList.remove('active');
      });
      document.addEventListener('mouseup', () => {
        KEY.classList.remove('active');
      });
    } else if (count % 2 === 0) {
      KEY.classList.remove('active');
    }

    // Determine an available key
    if (key === 'ControlLeft' || key === 'ControlRight') {
      if (document.querySelector('.AltLeft').classList[2] === 'active'
      || document.querySelector('.AltRight').classList[2] === 'active') {
        AltCtr();
      }
    } if (key === 'AltLeft' || key === 'AltRight') {
      if (document.querySelector('.ControlLeft').classList[2] === 'active'
      || document.querySelector('.ControlRight').classList[2] === 'active') {
        AltCtr();
      }
    } else if (key === 'Enter') {
      keyEnter();
    } else if (key === 'Delete') {
      keyDel();
    } else if (key === 'Backspace') {
      keyBackspace();
    } else if (key === 'Tab') {
      keyTab();
    } else if (key === 'AltLeft' || key === 'ControlLeft'
    || key === 'AltRight' || key === 'ControlRight') {
      return false;
    } else if ((key === 'ShiftRight' || key === 'ShiftLeft')
    && document.querySelector('.CapsLock').classList[2] === 'active') {
      shiftCapsLock();
    } else if (key === 'ShiftRight' || key === 'ShiftLeft') {
      shift();
    } else if (key === 'CapsLock') {
      capsLock(count);
      count += 1;
    } else {
      let KEY_RU_CASED = KEY_RU.querySelector('.caseDown');
      let KEY_RU_CASEU = KEY_RU.querySelector('.caseUp');
      let KEY_RU_CAPS = KEY_RU.querySelector('.caps');
      let KEY_RU_SH_CAPS = KEY_RU.querySelector('.shiftCaps');
      let KEY_EN_CASED = KEY_EN.querySelector('.caseDown');
      let KEY_EN_CASEU = KEY_EN.querySelector('.caseUp');
      let KEY_EN_CAPS = KEY_EN.querySelector('.caps');
      let KEY_EN_SH_CAPS = KEY_EN.querySelector('.shiftCaps');

      if (KEY_RU.classList[1] === undefined) {
        if (KEY_RU_CASED.classList[1] === undefined) {
          TEXTAREA.focus();
          TEXTAREA.setRangeText(KEY_RU_CASED.innerHTML);
          TEXTAREA.selectionStart += 1;
        } else if (KEY_RU_CASEU.classList[1] === undefined) {
          TEXTAREA.focus();
          TEXTAREA.setRangeText(KEY_RU_CASEU.innerHTML);
          TEXTAREA.selectionStart += 1;
        } else if (KEY_RU_CAPS.classList[1] === undefined) {
          TEXTAREA.focus();
          TEXTAREA.setRangeText(KEY_RU_CAPS.innerHTML);
          TEXTAREA.selectionStart += 1;
        } else {
          TEXTAREA.focus();
          TEXTAREA.setRangeText(KEY_RU_SH_CAPS.innerHTML);
          TEXTAREA.selectionStart += 1;
        }
      } else if (KEY_EN.classList[1] === undefined) {
        if (KEY_EN_CASED.classList[1] === undefined) {
          TEXTAREA.focus();
          TEXTAREA.setRangeText(KEY_EN_CASED.innerHTML);
          TEXTAREA.selectionStart += 1;
        } else if (KEY_EN_CASEU.classList[1] === undefined) {
          TEXTAREA.focus();
          TEXTAREA.setRangeText(KEY_EN_CASEU.innerHTML);
          TEXTAREA.selectionStart += 1;
        } else if (KEY_EN_CAPS.classList[1] === undefined) {
          TEXTAREA.focus();
          TEXTAREA.setRangeText(KEY_EN_CAPS.innerHTML);
          TEXTAREA.selectionStart += 1;
        } else {
          TEXTAREA.focus();
          TEXTAREA.setRangeText(KEY_EN_SH_CAPS.innerHTML);
          TEXTAREA.selectionStart += 1;
        }
      }
    }
    return true;
  };

  // Add EventListener for a physical keyboard
  document.addEventListener('keydown', (event) => {
    determineKey(event.code);
  });

  // Add EventListener for a virtual keyboard
  document.querySelector('.keyboard').addEventListener('mousedown', (event) => {
    let keyClass = event.target.closest('div').className;
    let key = keyClass.split(' ')[1];
    if (keyClass.includes(key)) {
      determineKey(key);
    }
  });
};

export { keyEventListener };
