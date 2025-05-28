import { createElement } from "../createElement/createEl.js";

export const playWithAIButton = createElement({
  elem: "a",
  title: "Play with AI",
  atr: { name: "href", type: "/playWithAI" },
  className: "playWithAIButton",
});
