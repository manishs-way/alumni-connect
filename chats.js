// Real-Time Chat Functionality

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (message !== '') {
        const messagesDiv = document.querySelector('.messages');
        
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        
        const usernameSpan = document.createElement('span');
        usernameSpan.classList.add('username');
        usernameSpan.textContent = 'You: ';
        
        messageDiv.appendChild(usernameSpan);
        messageDiv.appendChild(document.createTextNode(message));
        
        messagesDiv.appendChild(messageDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
        
        input.value = '';
    }
}
