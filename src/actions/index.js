export const SELECTED_KEY = 'selected_key';

export const selectedKey = (event, drum) => {
  const selected = drum.filter((item) => {
    return item.hotkey.charCodeAt(0) === event.keyCode;
  });
  return {
    type: SELECTED_KEY,
    payload: selected[0]
  }
}