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

  // Create Keyboard Row
  let kbRow1 = createDomNode('div', 'kbRow');
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

  let kbRow2 = createDomNode('div', 'kbRow');
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

  // Create Keyboard
  let keyboard = createDomNode('div', 'keyboard');
  keyboard.append(kbRow1);
  keyboard.append(kbRow2);

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
