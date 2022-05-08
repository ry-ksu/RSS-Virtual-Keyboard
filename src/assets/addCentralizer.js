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

  // Create Keyboard Row
  let kbRow1 = createDomNode('div', 'kbRow');
  kbRow1.innerHTML += Backquote.toHTML();
  kbRow1.innerHTML += Digit1.toHTML();
  kbRow1.innerHTML += Digit2.toHTML();

  let kbRow2 = createDomNode('div', 'kbRow');
  kbRow2.innerHTML += Digit3.toHTML();
  kbRow2.innerHTML += Digit4.toHTML();
  kbRow2.innerHTML += Digit5.toHTML();

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
