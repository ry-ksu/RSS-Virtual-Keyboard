import { ARRAY_OF_KEY } from './arrayOfKey';
import { Key } from './Key';
import { keyEventListener } from './keyEventListener';

// Add components to 'body'

const addCentralizer = () => {
  const createDomNode = (elem, ...classes) => {
    let node = document.createElement(elem);
    node.classList.add(...classes);
    return node;
  };

  // Create Centralizer
  let centralizer = createDomNode('div', 'centralizer');

  // Create Title
  let title = createDomNode('p', 'title');
  title.innerHTML = 'RSS Виртуальная клавиатура';

  // Create Textarea
  let textarea = createDomNode('textarea', 'textarea');
  textarea.setAttribute('rows', '5');
  textarea.setAttribute('cols', '50');

  // Create Key
  let Digit1 = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Digit1'));
  let Backquote = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Backquote'));
  let Digit2 = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Digit2'));
  let Digit3 = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Digit3'));
  let Digit4 = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Digit4'));
  let Digit5 = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Digit5'));
  let Digit6 = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Digit6'));
  let Digit7 = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Digit7'));
  let Digit8 = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Digit8'));
  let Digit9 = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Digit9'));
  let Digit0 = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Digit0'));
  let Minus = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Minus'));
  let Equal = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Equal'));
  let Backspace = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Backspace'));

  let Tab = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Tab'));
  let KeyQ = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyQ'));
  let KeyW = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyW'));
  let KeyE = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyE'));
  let KeyR = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyR'));
  let KeyT = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyT'));
  let KeyY = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyY'));
  let KeyU = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyU'));
  let KeyI = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyI'));
  let KeyO = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyO'));
  let KeyP = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyP'));
  let BracketLeft = new Key(
    ARRAY_OF_KEY.find((i) => i.keyName === 'BracketLeft')
  );
  let BracketRight = new Key(
    ARRAY_OF_KEY.find((i) => i.keyName === 'BracketRight')
  );
  let Backslash = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Backslash'));
  let Delete = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Delete'));

  let CapsLock = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'CapsLock'));
  let KeyA = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyA'));
  let KeyS = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyS'));
  let KeyD = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyD'));
  let KeyF = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyF'));
  let KeyG = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyG'));
  let KeyH = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyH'));
  let KeyJ = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyJ'));
  let KeyK = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyK'));
  let KeyL = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyL'));
  let Semicolon = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Semicolon'));
  let Quote = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Quote'));
  let Enter = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Enter'));

  let ShiftLeft = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'ShiftLeft'));
  let KeyZ = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyZ'));
  let KeyX = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyX'));
  let KeyC = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyC'));
  let KeyV = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyV'));
  let KeyB = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyB'));
  let KeyN = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyN'));
  let KeyM = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'KeyM'));
  let Comma = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Comma'));
  let Period = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Period'));
  let Slash = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Slash'));
  let ArrowUp = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'ArrowUp'));
  let ShiftRight = new Key(
    ARRAY_OF_KEY.find((i) => i.keyName === 'ShiftRight')
  );

  let ControlLeft = new Key(
    ARRAY_OF_KEY.find((i) => i.keyName === 'ControlLeft')
  );
  let MetaLeft = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'MetaLeft'));
  let AltLeft = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'AltLeft'));
  let Space = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'Space'));
  let AltRight = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'AltRight'));
  let ArrowLeft = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'ArrowLeft'));
  let ArrowDown = new Key(ARRAY_OF_KEY.find((i) => i.keyName === 'ArrowDown'));
  let ArrowRight = new Key(
    ARRAY_OF_KEY.find((i) => i.keyName === 'ArrowRight')
  );
  let ControlRight = new Key(
    ARRAY_OF_KEY.find((i) => i.keyName === 'ControlRight')
  );

  // Create Keyboard Row
  let kbRow1 = createDomNode('div', 'row');
  kbRow1.innerHTML += Backquote.toHTML();
  kbRow1.innerHTML += Digit1.toHTML();
  kbRow1.innerHTML += Digit2.toHTML();
  kbRow1.innerHTML += Digit3.toHTML();
  kbRow1.innerHTML += Digit4.toHTML();
  kbRow1.innerHTML += Digit5.toHTML();
  kbRow1.innerHTML += Digit6.toHTML();
  kbRow1.innerHTML += Digit7.toHTML();
  kbRow1.innerHTML += Digit8.toHTML();
  kbRow1.innerHTML += Digit9.toHTML();
  kbRow1.innerHTML += Digit0.toHTML();
  kbRow1.innerHTML += Minus.toHTML();
  kbRow1.innerHTML += Equal.toHTML();
  kbRow1.innerHTML += Backspace.toHTML();

  let kbRow2 = createDomNode('div', 'row');
  kbRow2.innerHTML += Tab.toHTML();
  kbRow2.innerHTML += KeyQ.toHTML();
  kbRow2.innerHTML += KeyW.toHTML();
  kbRow2.innerHTML += KeyE.toHTML();
  kbRow2.innerHTML += KeyR.toHTML();
  kbRow2.innerHTML += KeyT.toHTML();
  kbRow2.innerHTML += KeyY.toHTML();
  kbRow2.innerHTML += KeyU.toHTML();
  kbRow2.innerHTML += KeyI.toHTML();
  kbRow2.innerHTML += KeyO.toHTML();
  kbRow2.innerHTML += KeyP.toHTML();
  kbRow2.innerHTML += BracketLeft.toHTML();
  kbRow2.innerHTML += BracketRight.toHTML();
  kbRow2.innerHTML += Backslash.toHTML();
  kbRow2.innerHTML += Delete.toHTML();

  let kbRow3 = createDomNode('div', 'row');
  kbRow3.innerHTML += CapsLock.toHTML();
  kbRow3.innerHTML += KeyA.toHTML();
  kbRow3.innerHTML += KeyS.toHTML();
  kbRow3.innerHTML += KeyD.toHTML();
  kbRow3.innerHTML += KeyF.toHTML();
  kbRow3.innerHTML += KeyG.toHTML();
  kbRow3.innerHTML += KeyH.toHTML();
  kbRow3.innerHTML += KeyJ.toHTML();
  kbRow3.innerHTML += KeyK.toHTML();
  kbRow3.innerHTML += KeyL.toHTML();
  kbRow3.innerHTML += Semicolon.toHTML();
  kbRow3.innerHTML += Quote.toHTML();
  kbRow3.innerHTML += Enter.toHTML();

  let kbRow4 = createDomNode('div', 'row');
  kbRow4.innerHTML += ShiftLeft.toHTML();
  kbRow4.innerHTML += KeyZ.toHTML();
  kbRow4.innerHTML += KeyX.toHTML();
  kbRow4.innerHTML += KeyC.toHTML();
  kbRow4.innerHTML += KeyV.toHTML();
  kbRow4.innerHTML += KeyB.toHTML();
  kbRow4.innerHTML += KeyN.toHTML();
  kbRow4.innerHTML += KeyM.toHTML();
  kbRow4.innerHTML += Comma.toHTML();
  kbRow4.innerHTML += Period.toHTML();
  kbRow4.innerHTML += Slash.toHTML();
  kbRow4.innerHTML += ArrowUp.toHTML();
  kbRow4.innerHTML += ShiftRight.toHTML();

  let kbRow5 = createDomNode('div', 'row');
  kbRow5.innerHTML += ControlLeft.toHTML();
  kbRow5.innerHTML += MetaLeft.toHTML();
  kbRow5.innerHTML += AltLeft.toHTML();
  kbRow5.innerHTML += Space.toHTML();
  kbRow5.innerHTML += AltRight.toHTML();
  kbRow5.innerHTML += ArrowLeft.toHTML();
  kbRow5.innerHTML += ArrowDown.toHTML();
  kbRow5.innerHTML += ArrowRight.toHTML();
  kbRow5.innerHTML += ControlRight.toHTML();

  // Create Keyboard
  let keyboard = createDomNode('div', 'keyboard');
  keyboard.append(kbRow1);
  keyboard.append(kbRow2);
  keyboard.append(kbRow3);
  keyboard.append(kbRow4);
  keyboard.append(kbRow5);

  // Create Description
  let description = createDomNode('p', 'description');
  description.innerHTML = 'Клавиатура создана в операционной системе Windows';

  // Create language
  let language = createDomNode('p', 'language');
  language.innerHTML = 'Для переключения языка комбинация: левыe ctrl + alt';

  centralizer.append(title);
  centralizer.append(textarea);
  centralizer.append(keyboard);
  centralizer.append(description);
  centralizer.append(language);
  document.body.append(centralizer);

  // Add EventListener for physical and virtual keyboard
  keyEventListener();
};

export { addCentralizer };
