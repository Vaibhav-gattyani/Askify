chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        fetch('YOUR_GPT_API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_KEY'
            },
            body: JSON.stringify({
                prompt: request.prompt,
                max_tokens: 200
            })
        })
        .then(response => response.json())
        .then(data => {
            sendResponse({answer: data.choices[0].text});
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        return true;  // Will respond asynchronously.
    }
);
