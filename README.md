# variante-alta 🏎️

Yet another [`invariant`](https://www.npmjs.com/package/invariant) alternative, albeit much smaller.

## What is an `invariant`?

An `invariant` function takes a value, and if the value is [falsy](https://github.com/getify/You-Dont-Know-JS/blob/bdbe570600d4e1107d0b131787903ca1c9ec8140/up%20%26%20going/ch2.md#truthy--falsy) then the `invariant` function will throw. If the value is [truthy](https://github.com/getify/You-Dont-Know-JS/blob/bdbe570600d4e1107d0b131787903ca1c9ec8140/up%20%26%20going/ch2.md#truthy--falsy), then the function will not throw.

## Why `variante-alta`?

variante-alta is an utility package that looks to replicate [invariant](https://www.npmjs.com/package/invariant), albeit it is much simpler and has no custom logic beyond its core. It's extremely similar to Solidity's [require](https://docs.soliditylang.org/en/v0.7.5/control-structures.html?highlight=require#id4) function and seeks to replicate its (very basic) behavior. 

## Installation and usage

### Install with Yarn/NPM

```bash
# yarn
yarn add variante-alta

# npm
npm add variante-alta --save
```

### Import the function into your code

```js
import invariant from 'variante-alta'

invariant(1 === 1, 'One is not equal to one!')
```
