# HTML Auto Complete — Datalist Demo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/html-datalist-autocomplete/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the 8.5-second screen recording.

## What the video demonstrates

The video shows an HTML input using a datalist of ice-cream flavors. As the user types, the browser suggests matching values:
- `Co` → Chocolate, Coconut
- `Ch` → Chocolate
- `Van` → Vanilla
- Clearing the field shows all available options.

The visible source markup is:

```html
<input list="ice-cream-flavors">

<datalist id="ice-cream-flavors">
  <option value="Chocolate">
  <option value="Coconut">
  <option value="Mint">
  <option value="Strawberry">
  <option value="Vanilla">
</datalist>
```

## Features in this reconstruction
- Functional autocomplete with five ice-cream flavors.
- Filters suggestions as the user types.
- Click or keyboard selection (Arrow Up/Down, Enter, Escape).
- Dropdown toggle button.
- Dark creator-demo layout with HTML code preview.
- Responsive and dependency-free.

## Run

No Node.js or package installation required.

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Structure

```text
html-datalist-autocomplete/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Note on fidelity

The recording's visible code is the standard HTML `<datalist>` pattern. Native datalist popup styling differs between browsers, so this standalone reconstruction uses a custom accessible suggestion list to reproduce the visible dropdown consistently while keeping the original `<datalist>` markup in the HTML example. This is a recreation, not a byte-for-byte copy of the creator's original source.
