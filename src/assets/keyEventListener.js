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
    let position = TEXTAREA.selectionStart;
    TEXTAREA.value = TEXTAREA.value.slice(0, position) + TEXTAREA.value.slice(position + 1);
    TEXTAREA.focus();
  };

  // EventListener for a Backspace
  const keyBackspace = () => {
    TEXTAREA.focus();
    let position = TEXTAREA.selectionStart;
    TEXTAREA.value = TEXTAREA.value.slice(0, position - 1) + TEXTAREA.value.slice(position);
  };

  // EventListener for a Enter
  const keyEnter = () => {
    if (!(document.querySelector('textarea:focus'))) {
      document.querySelector('.textarea').focus();
    } else {
      return false;
    }
    return true;
  };

  // EventListener for a Tab
  const keyTab = () => {
    TEXTAREA.value += '    ';
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

  window.onkeydown = (e) => {
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
      || e.code === 'F10' || e.code === 'F11' || e.code === 'F12' || e.code === 'ContextMenu'
      || e.code === 'NumLock' || e.code === 'NumpadDivide' || e.code === 'NumpadMultiply'
      || e.code === 'NumpadSubtract' || e.code === 'NumpadAdd' || e.code === 'NumpadEnter'
      || e.code === 'NumpadDecimal' || e.code === 'Numpad0' || e.code === 'Numpad1'
      || e.code === 'Numpad2' || e.code === 'Numpad3' || e.code === 'Numpad4'
      || e.code === 'Numpad6' || e.code === 'Numpad7' || e.code === 'Numpad8'
      || e.code === 'Numpad9' || e.code === 'Numpad5' || e.code === 'AltLeft' || e.code === 'AltRight'
    ) {
      return false;
    }
    return true;
  };

  // Determine virtual a key
  const determineKey = (key) => {
    // Determine and disable a missing key
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
    } else if (key === 'ArrowUp') {
      TEXTAREA.value += '▲';
    } else if (key === 'ArrowRight') {
      TEXTAREA.value += '►';
    } else if (key === 'ArrowDown') {
      TEXTAREA.value += '▼';
    } else if (key === 'ArrowLeft') {
      TEXTAREA.value += '◄';
    } else if (key === 'Delete') {
      keyDel();
    } else if (key === 'Backspace') {
      keyBackspace();
    } else if (key === 'Tab') {
      keyTab();
    } else if (key === 'AltLeft' || key === 'ControlLeft' || key === 'ContextMenu'
    || key === 'AltRight' || key === 'ControlRight' || key === 'MetaLeft') {
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
    return true;
  };

  // Add EventListener for a physical keyboard
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Backspace') {
      TEXTAREA.value += TEXTAREA.value[TEXTAREA.value.length - 1];
      let position = TEXTAREA.selectionStart;
      TEXTAREA.value = TEXTAREA.value.slice(0, position - 1) + TEXTAREA.value.slice(position + 1);
      TEXTAREA.focus();
    } else {
      determineKey(event.code);
      if (document.querySelector('textarea:focus')) {
        if (!(event.code === 'Tab') && !(event.code === 'Backspace') && !(event.code === 'Enter') && !(event.code === 'Delete')
        && !(event.code === 'CapsLock') && !(event.code === 'ShiftLeft') && !(event.code === 'ControlLeft')
        && !(event.code === 'MetaLeft') && !(event.code === 'AltLeft') && !(event.code === 'AltRight')
        && !(event.code === 'ControlRight') && !(event.code === 'ShiftRight') && !(event.code === 'ContextMenu')) {
          TEXTAREA.value = TEXTAREA.value.replace(/.$/, '');
        }
      }
    }
  });

  // Add EventListener for a virtual keyboard
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
