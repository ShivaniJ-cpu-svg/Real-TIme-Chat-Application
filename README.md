# 💬 Real-Time Chat Application

This is a real-time chat application built using React.js, Node.js, Socket.IO, and Express. It enables users to join a chat room and communicate instantly with others. The project demonstrates the fundamentals of real-time communication on the web using WebSockets.


🚀 Features
🔗 Real-time messaging with Socket.IO

🧑‍🤝‍🧑 Join chat rooms using unique usernames

📡 Instant broadcasting of messages to all users in a room

📜 Auto-scrolling message history

🟢 Online user tracking (optional extension)

⚙️ Simple and clean UI with React

🧱 Tech Stack
Frontend: React.js, Socket.IO-client
Backend: Node.js, Express.js, Socket.IO
Styling: CSS

📦 Prerequisites
Make sure you have the following installed:
Node.js (v14+)
npm or yarn

🛠️ Installation
1. Clone the repository
2. Setup the backend
      cd server
      npm install
      node index.js

3.Setup the frontend
      cd client
      npm install
      npm start 
4.open http://localhost:3000

📁 Folder Structure
realtime-chat-app/
├── client/         # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.js
├── server/         # Express backend
│   └── index.js
└── README.md
