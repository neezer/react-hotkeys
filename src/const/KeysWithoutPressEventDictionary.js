/**
 * Dictionary of keys that do not natively have a keypress event
 */
const KeysWithoutPressEventDictionary = {
  Shift: true,
  Control: true,
  Alt: true,
  Meta: true,
  Enter: true,
  Tab: true,
  BackSpace: true,
  ArrowRight: true,
  ArrowLeft: true,
  ArrowUp: true,
  ArrowDown: true,
  /**
   * Caps lock is a strange case where it not only does not have a key press event,
   * but it's keyup event is triggered when caps lock is toggled off
   */
  CapsLock: true,
};

for(let i = 1; i < 13; i++) {
  KeysWithoutPressEventDictionary[`F${i}`] = true;
}

export default KeysWithoutPressEventDictionary;
