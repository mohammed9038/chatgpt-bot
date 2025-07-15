
async function sendMessage() {
  const input = document.getElementById('user-input').value;
  if (!input) return;

  appendMessage("You", input);
  document.getElementById('user-input').value = '';

  try {
    const response = await fetch("https://YOUR_BACKEND_PROXY_URL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: input })
    });

    const data = await response.json();
    appendMessage("ChatGPT", data.reply);
  } catch (err) {
    appendMessage("ChatGPT", "Error: Could not connect to server.");
  }
}

function appendMessage(sender, text) {
  const chatBox = document.getElementById('chat-box');
  const msg = document.createElement('div');
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
