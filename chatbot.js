// Send message to backend
async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) return;  // Do not send if the input is empty

    const chatWindow = document.getElementById('chat-window');

    // Display user's message in the chat window
    chatWindow.innerHTML += `<div><strong>You:</strong> ${userInput}</div>`;
    document.getElementById('user-input').value = '';  // Clear input field
    chatWindow.scrollTop = chatWindow.scrollHeight;  // Auto-scroll to the bottom

    // Send user message to the server for processing
    const response = await fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userInput })
    });

    const data = await response.json();
    chatWindow.innerHTML += `<div><strong>Chatbot:</strong> ${data.response}</div>`;
    chatWindow.scrollTop = chatWindow.scrollHeight;  // Scroll to latest message
}
