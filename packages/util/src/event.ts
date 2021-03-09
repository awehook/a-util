export function isTextInputEvent(e) {
  const elem = e.target as HTMLElement;
  // we check these cases for unit testing, but this should not happen
  // during normal operation
  if (elem == null || elem.closest == null) {
    return false;
  }

  const editable = elem.closest('input, textarea, [contenteditable=true]');

  if (editable == null) {
    return false;
  }

  // don't let checkboxes, switches, and radio buttons prevent hotkey behavior
  if (editable.tagName.toLowerCase() === 'input') {
    const inputType = (editable as HTMLInputElement).type;
    if (inputType === 'checkbox' || inputType === 'radio') {
      return false;
    }
  }

  // don't let read-only fields prevent hotkey behavior
  if ((editable as HTMLInputElement).readOnly) {
    return false;
  }

  return true;
}
