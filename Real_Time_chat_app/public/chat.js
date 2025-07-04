const socket = io();
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username') || "Guest";

document.getElementById('chat-header').textContent = `Welcome, ${username}`;

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', `${username}: ${input.value}`);
    input.value = '';
  }
});

socket.on('chat message', function (msg) {
  const item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
});

