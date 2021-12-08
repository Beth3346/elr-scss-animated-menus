# Animated Menus

[![npm version](http://img.shields.io/npm/v/elr-scss-animated-menus.svg)](https://www.npmjs.org/package/elr-scss-animated-menus)
[![CI](https://github.com/Beth3346/elr-scss-animated-menus/actions/workflows/node.js.yml/badge.svg)](https://github.com/Beth3346/elr-scss-animated-menus/actions/workflows/node.js.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/dm/elr-scss-animated-menus.svg?style=flat)](https://npmjs.com/package/elr-scss-animated-menus)

a library of sass mixins

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install elr-scss-animated-menus --save
```

or

```sh
yarn add elr-scss-animated-menus
```

## Implementation

### Scss

```scss
@import "elr-scss-animated-menus";

.menu-animated {
  @include menu-animated;
}
```

```scss
@import "elr-scss-animated-menus";

.menu-simple-lines {
  @include menu-simple-lines;
}
```

```scss
@import "elr-scss-animated-menus";

.menu-double-lines {
  @include menu-double-lines;
}
```

```scss
@import "elr-scss-animated-menus";

.menu-drop-lines {
  @include menu-drop-lines;
}
```

```scss
@import "elr-scss-animated-menus";

.menu-expanding-lines {
  @include menu-expanding-lines;
}
```

### HTML

```html
<nav class="menu-animated menu-simple-lines">
  <ul class="menu">
    <li class="menu-item current">
      <button class="menu-item-button">Article 1</button>
    </li>
    <li class="menu-item">
      <button class="menu-item-button">Article 2</button>
    </li>
    <li class="menu-item">
      <button class="menu-item-button">Article 3</button>
    </li>
    <li class="menu-item">
      <button class="menu-item-button">Article 4</button>
    </li>
    <li class="menu-item">
      <button class="menu-item-button">Article 5</button>
    </li>
    <li class="menu-line"></li>
  </ul>
</nav>
```

## License

SEE LICENSE IN LICENSE.md
