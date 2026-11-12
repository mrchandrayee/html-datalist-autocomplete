const flavors = ["Chocolate", "Coconut", "Mint", "Strawberry", "Vanilla"];
const input = document.querySelector("#flavorInput");
const list = document.querySelector("#suggestions");
const toggle = document.querySelector("#dropdownToggle");
const selection = document.querySelector("#selection");
let activeIndex = -1;

function getMatches(query) {
  const normalized = query.trim().toLowerCase();
  return flavors.filter(flavor => !normalized || flavor.toLowerCase().startsWith(normalized));
}

function closeList() {
  list.hidden = true;
  input.setAttribute("aria-expanded", "false");
  activeIndex = -1;
}

function choose(value) {
  input.value = value;
  selection.textContent = `Selected flavor: ${value}`;
  closeList();
  input.focus();
}

function renderSuggestions() {
  const matches = getMatches(input.value);
  list.replaceChildren();
  activeIndex = -1;

  if (!matches.length) {
    closeList();
    return;
  }

  matches.forEach((flavor, index) => {
    const item = document.createElement("li");
    item.textContent = flavor;
    item.setAttribute("role", "option");
    item.dataset.index = String(index);
    item.addEventListener("mousedown", event => event.preventDefault());
    item.addEventListener("click", () => choose(flavor));
    list.append(item);
  });

  list.hidden = false;
  input.setAttribute("aria-expanded", "true");
}

function setActive(index) {
  const items = [...list.querySelectorAll("li")];
  if (!items.length) return;
  activeIndex = (index + items.length) % items.length;
  items.forEach((item, i) => {
    item.setAttribute("aria-selected", String(i === activeIndex));
  });
}

input.addEventListener("input", () => {
  renderSuggestions();
  selection.textContent = "";
});
input.addEventListener("focus", renderSuggestions);
input.addEventListener("keydown", event => {
  const items = list.querySelectorAll("li");
  if (event.key === "ArrowDown") {
    event.preventDefault();
    if (list.hidden) renderSuggestions();
    setActive(activeIndex + 1);
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    setActive(activeIndex - 1);
  } else if (event.key === "Enter" && activeIndex >= 0 && items[activeIndex]) {
    event.preventDefault();
    choose(items[activeIndex].textContent);
  } else if (event.key === "Escape") {
    closeList();
  }
});
toggle.addEventListener("click", () => {
  if (list.hidden) {
    input.focus();
    renderSuggestions();
  } else {
    closeList();
  }
});
document.addEventListener("click", event => {
  if (!event.target.closest(".input-wrap")) closeList();
});
