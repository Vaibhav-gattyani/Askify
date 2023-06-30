document.getElementById('submit').addEventListener('click', function() {
    var userPrompt = document.getElementById('prompt').value;
    chrome.runtime.sendMessage({prompt: userPrompt}, function(response) {
        document.getElementById('result').textContent = response.answer;
    });
});
