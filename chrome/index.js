const sendMessage = async () => {
  let tab = await chrome.tabs.query({ active: true, currentWindow: true })
  tab = tab[0]
  const name = tab.url
  console.log('MSG',tab, name, element)
  // TODO send postmessage nameFromExtension
}

const element = document.querySelector('iframe')
element.addEventListener('load', sendMessage)
