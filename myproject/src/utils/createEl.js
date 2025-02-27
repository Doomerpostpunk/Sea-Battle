export const createElement = ({ elem, title, className, atr = {} }) => {
  const element = document.createElement(elem);
  if (title) {
    element.innerText = title;
  }
  if (className) {
    element.classList.add(className);
  }
  if (atr.name && atr.type) {
    element.setAttribute(atr.name, atr.type);
  }
  return element;
};
