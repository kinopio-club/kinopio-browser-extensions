# Kinopio Browser Extensions

<img src="https://us-east-1.linodeobjects.com/kinopio-uploads/DBu2iN5CC5i5f4VOqB2lI/SPPOKY-WITCH.png" width="200">

For quickly recording thoughts, inspirations, and urls while you're out making waves on the world wide web.

A simple extension that just opens a pop up with an iframe to [kinopio.club/add](https://kinopio.club/add)

<img src="https://us-east-1.linodeobjects.com/kinopio-uploads/dPFZjLqbKUlz3Ooa9BviV/safari-extension-beta-cropped.gif" width="400" />

## Mac/Safari version

The Safari version is built from the firefox version with [safari-web-extension-converter](https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_web_extension_for_safari)

```
cd kinopio-extensions
xcrun safari-web-extension-converter --project-location './safari' ./firefox
```

> Dev Note: Safari extensions cannot persist localStorage when using kinopio.local or localhost urls

### Contributing

PR's welcome – See [CONTRIBUTING](CONTRIBUTING.md)
