// Class for keyboard key

class Key {
  constructor({
    keyName,
    ruCaseDown,
    ruCaseUp,
    ruCaps,
    ruShiftCaps,
    enCaseDown,
    enCaseUp,
    enCaps,
    enShiftCaps
  }) {
    this.keyName = keyName;
    this.ruCaseDown = ruCaseDown;
    this.ruCaseUp = ruCaseUp;
    this.ruCaps = ruCaps;
    this.ruShiftCaps = ruShiftCaps;
    this.enCaseDown = enCaseDown;
    this.enCaseUp = enCaseUp;
    this.enCaps = enCaps;
    this.enShiftCaps = enShiftCaps;
  }

  toHTML() {
    let key = `<div class="keyboard-key ${this.keyName}">
                      <span class="ru hidden">
                          <span class="caseDown hidden">${this.ruCaseDown}</span>
                          <span class="caseUp hidden">${this.ruCaseUp}</span>
                          <span class="caps hidden">${this.ruCaps}</span>
                          <span class="shiftCaps hidden">${this.ruShiftCaps}</span>
                      </span>
                      <span class="en">
                          <span class="caseDown">${this.enCaseDown}</span>
                          <span class="caseUp hidden">${this.enCaseUp}</span>
                          <span class="caps hidden">${this.enCaps}</span>
                          <span class="shiftCaps hidden">${this.enShiftCaps}</span>
                      </span>
                  </div>`;

    return key;
  }
}

export { Key };
