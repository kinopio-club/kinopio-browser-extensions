console.log('index.js run')

const kinopio = document.querySelector('iframe')
kinopio.addEventListener('load', messageUrl)

function messageUrl () {
  browser.storage.local.get('pendingImageUrl').then(result => {
    const url = result.pendingImageUrl
    if (url) {
      browser.storage.local.remove('pendingImageUrl')
      kinopio.contentWindow.postMessage(url, '*')
    } else {
      browser.tabs.query({active: true, windowId: browser.windows.WINDOW_ID_CURRENT})
      .then(tabs => browser.tabs.get(tabs[0].id))
      .then(tab => {
        kinopio.contentWindow.postMessage(tab.url, '*')
      })
    }
  })
}
