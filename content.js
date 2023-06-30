chrome.runtime.sendMessage({text: document.body.innerText}, function(response) {
  console.log(response)
});
