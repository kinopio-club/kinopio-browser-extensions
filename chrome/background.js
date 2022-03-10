import kinopio from './kinopio.js'

// context menu

chrome.contextMenus.create({
  id: 'addToKinopio',
  title: "Add to Kinopio",
  contexts: ["page","selection","link","editable", "image","video", "audio"],
})
chrome.contextMenus.onClicked.addListener((info, tab) => {
  const name = info.selectionText || info.srcUrl || info.pageUrl
  console.log('CONTENXT MENU CLICK', info, tab, info.pageUrl, info.srcUrl, info.selectionText)
  console.log('name', name)
})

// button

chrome.action.onClicked.addListener((tab) => {
  const name = tab.url
  console.log('name', name, kinopio)
  console.log(kinopio.x())
})
