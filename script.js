const socket = io();

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    if (message.trim()) {
        socket.emit('chatMessage', message);
        messageInput.value = '';
    }
}

socket.on('chatMessage', (msg) => {
    const messagesDiv = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    messagesDiv.appendChild(messageElement);
});
