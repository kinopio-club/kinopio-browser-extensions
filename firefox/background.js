browser.contextMenus.create({
  id: 'add-image-to-kinopio',
  title: 'Add Image to Kinopio',
  contexts: ['image']
})

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'add-image-to-kinopio') {
    browser.storage.local.set({ pendingImageUrl: info.srcUrl }).then(() => {
      browser.browserAction.openPopup()
    })
  }
})
