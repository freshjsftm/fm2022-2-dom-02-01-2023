const stringToColour = function (str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substring(2);
  }
  return colour.length === 7 ? colour : colour + "0";
};

const getInitial = (name) =>
  name === ""
    ? ""
    : name
        .split(/\s+/)
        .map((word) => word[0].toUpperCase())
        .join(".") + ".";

function handlerImageError({ target }) {
  target.remove();
}
function handlerImageLoad({ target }) {
  target.hidden = false;
}
/**
 *
 * @param {string} tag
 * @param {object} options { classNames[], listeners{}, attrs{}, styles{}}
 * @param  {...Node | string} children
 * @returns {Node}
 */
function createElement(
  tag = "div",
  { classNames, listeners, attrs, styles, options } = {},
  ...children
) {
  const elem = document.createElement(tag);
  if (classNames) {
    elem.classList.add(...classNames);
  }
  if (listeners) {
    for (const [typeEvent, handler] of Object.entries(listeners)) {
      elem.addEventListener(typeEvent, handler);
    }
  }
  if (attrs) {
    for (const [typeAttr, valueAttr] of Object.entries(attrs)) {
      elem.setAttribute(typeAttr, valueAttr);
    }
  }
  if (styles) {
    for (const [nameStyle, valueStyle] of Object.entries(styles)) {
      elem.style[nameStyle] = valueStyle;
    }
  }
  if (options) {
  }
  elem.append(...children);
  return elem;
}
