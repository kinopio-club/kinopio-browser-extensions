console.log('index.js run')

let kinopio = document.querySelector('iframe')
kinopio.addEventListener('load', messageUrl)

function messageUrl () {
  chrome.tabs.query({active: true, windowId: chrome.windows.WINDOW_ID_CURRENT})
  .then(tabs => chrome.tabs.get(tabs[0].id))
  .then(tab => {
    kinopio = kinopio.contentWindow
    kinopio.postMessage(tab.url, '*')
  })
}
