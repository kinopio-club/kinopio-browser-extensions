chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'add-image-to-kinopio',
    title: 'Add image to Kinopio',
    contexts: ['image']
  })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'add-image-to-kinopio') {
    chrome.storage.session.set({ pendingImageUrl: info.srcUrl })
    chrome.action.openPopup()
  }
})
