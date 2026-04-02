console.log('index.js run')

let kinopio = document.querySelector('iframe')
kinopio.addEventListener('load', messageUrl)

async function messageUrl () {
  const { pendingImageUrl } = await chrome.storage.session.get('pendingImageUrl')
  kinopio = kinopio.contentWindow

  if (pendingImageUrl) {
    await chrome.storage.session.remove('pendingImageUrl')
    kinopio.postMessage(pendingImageUrl, '*')
  } else {
    const tabs = await chrome.tabs.query({ active: true, windowId: chrome.windows.WINDOW_ID_CURRENT })
    const tab = await chrome.tabs.get(tabs[0].id)
    kinopio.postMessage(tab.url, '*')
  }
}
