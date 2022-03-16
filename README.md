# Kinopio Browser Extensions

<img src="https://us-east-1.linodeobjects.com/kinopio-uploads/DBu2iN5CC5i5f4VOqB2lI/SPPOKY-WITCH.png" width="220">

For quickly recording thoughts, inspirations, and urls while you're out making waves on the world wide web.

A simple extension that just opens a pop up with an iframe to [kinopio.club/add](https://kinopio.club/add)

[INSERT VID HERE]

## Mac/Safari version

The Safari version is built from the firefox version with [safari-web-extension-converter](https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_web_extension_for_safari)

```
cd kinopio-extensions
xcrun safari-web-extension-converter --project-location './safari' ./firefox
```

> Unfortunately it looks like Safari extensions cannot currently persist localStorage, which is a blocking bug.

### Contributing

PR's welcome – See [CONTRIBUTING](CONTRIBUTING.md)
