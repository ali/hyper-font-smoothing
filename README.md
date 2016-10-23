# hyper-font-smoothing

Extension for subpixel-antialiased font smoothing in [Hyper][].

[hyperterm]: https://github.com/zeit/hyperterm

## How to use

Add `hyper-font-smoothing` to `plugins` in `~/.hyper.js`:

```js
// Example ~/.hyperterm.js
module.exports = {
  plugins: [
    "hyper-font-smoothing",
  ],
}
```

## Screenshots

With `hyper-font-smoothing`:

![hyperterm with subpixel-antialiased font-smoothing](.github/subpixel-antialiased.png?raw=true)

Without `hyper-font-smoothing` (default):

![hyperterm with default antialiased font-smoothing](.github/antialiased.png?raw=true)

