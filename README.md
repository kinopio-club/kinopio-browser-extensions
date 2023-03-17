# Kinopio Browser Extensions

<img src="https://us-east-1.linodeobjects.com/kinopio-uploads/DBu2iN5CC5i5f4VOqB2lI/SPPOKY-WITCH.png" width="200">

For quickly recording thoughts, inspirations, and urls while you're out making waves on the world wide web.

A simple extension that just opens a pop up with an iframe to [kinopio.club/add](https://kinopio.club/add)

<img src="https://us-east-1.linodeobjects.com/kinopio-uploads/dPFZjLqbKUlz3Ooa9BviV/safari-extension-beta-cropped.gif" width="400" />

# Develop and Update

To test with the local `kinopio-client` add to inbox page, change iframe urls to `http://kinopio.local:8080/add`

> Don't forget to change it back to `https://kinopio.club/add` before shipping

## [Firefox](https://addons.mozilla.org/en-US/firefox/addon/add-to-kinopio/?utm_source=addons.mozilla.org)

Load local extensions in `about:debugging#/runtime/this-firefox`

Before submission, bump the `version` number up in `manifest.json`

Upload a new version at [Mozilla Addons](https://addons.mozilla.org/en-US/developers/addon/add-to-kinopio/edit) while signed into firefox account `hi@kinopio.club`

## [Chrome](https://chrome.google.com/webstore/detail/kinopio/hodmmkfpchpgmaemlicohlkiigpejakn)

> I use vivaldi for chromium testing, but these staps are basically the same for chrome

Load local extensions in `vivaldi://extensions/`

Before submission, bump the `version` number up in `manifest.json`

Upload a new version on the [Chrome Developer Dashboard](https://chrome.google.com/webstore/devconsole) while signed into google account pirijan@gmail.com

## [Mac/Safari version](https://apps.apple.com/us/app/add-to-kinopio/id1614926102?mt=12)

Build this from the `/firefox` version, using the [safari-web-extension-converter](https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_web_extension_for_safari)

But first, in `index.html` remove the background color from the `<iframe>`

```
cd kinopio-browser-extensions
mkdir safari
xcrun safari-web-extension-converter --macos-only ./firefox
```

> If you run into xcrun issues, you may need to [reinstall the xcode command line tools](https://stackoverflow.com/a/34617930/2318064). 

> If you get the error 'unable to find utility "safari-web-extension-converter"', run this first: sudo xcode-select -s /Applications/Xcode.app

### Xcode,

- Open the project in Xcode
- Open the project overview
- Use the dropdown to change the target to `Add to Kinopio (macOS)` version
- Update the `App Category` to `Productivity`
- Bump up the `Version` number
- In the `Build Settings` tab, bump up `Current Project Version` (it's under `Versioning`) to a higher number than the `Marketing Version`
- Make sure the `Version` and `Build Number` match for both `TARGETS`

<img src="https://us-east-1.linodeobjects.com/kinopio-uploads/hwkIhXICfGeY_UFjaJorQ/xcode-settings.png" />

- Use the dropdown to change the target to `Add to Kinopio Extension (macOS)` version
- Bump up the `Version` number to match the one you used earlier

- Press `▶` to build and run the extension

### Test in Safari,

> Local Testing Note: Safari extensions cannot persist localStorage when using kinopio.local or localhost urls

- Make sure `Develop → Allow Unsigned Extensions` is checked
- Enable the extension in `Preferences → Extensions`

### [Submitting update to the macOS App Store](https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases)

### Xcode,

- `Product → Archive` to create the build
- In the `Archives` window that appears, click `Distrubute App` to `App Store Connect` and select all the automatic options, then `Upload`

### App Store Connect

- Sign in to [App Store Connect](https://appstoreconnect.apple.com) using the `hi@kinopio.club` account
- Go to the app, and submit an update with the newly uploaded build
