console.log('index.js run')

let kinopio = document.querySelector('iframe')
kinopio.addEventListener('load', messageUrl)

function messageUrl () {
  browser.tabs.query({active: true, windowId: browser.windows.WINDOW_ID_CURRENT})
  .then(tabs => browser.tabs.get(tabs[0].id))
  .then(tab => {
    kinopio = kinopio.contentWindow
    kinopio.postMessage(tab.url, '*')
  })
}
