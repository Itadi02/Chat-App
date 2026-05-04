🚀 Real-Time Chat Application

A modern, responsive real-time chat application built using Node.js, Express, and Socket.IO. It enables instant messaging between multiple users with a smooth and interactive UI.

🌐 Live Demo

👉 https://chat-app-2-ifu4.onrender.com/

📌 Features
⚡ Real-time messaging (instant updates)
👥 Multi-user support
🎨 Modern responsive UI (mobile + desktop)
💬 Typing indicator animation
🔄 Auto-scroll & unread message handling
🌍 Deployed on cloud (Render)
🛠️ Tech Stack
Backend: Node.js, Express
Realtime: Socket.IO
Frontend: HTML, CSS, JavaScript
Animations: GSAP
Deployment: Render
⚙️ How It Works
Client connects to server using Socket.IO
Messages are sent using socket.emit()
Server listens and broadcasts using io.emit()
All connected clients receive messages instantly
📂 Project Structure
chat-app/
│── public/
│   └── index.html
│── app.js
│── package.json
│── README.md
▶️ Run Locally
git clone https://github.com/your-username/chat-app.git
cd chat-app
npm install
npm start

Open in browser:

http://localhost:3000
🚀 Deployment

This app is deployed using Render.

Steps:

Push code to GitHub
Connect repo to Render
Set:
Build Command: npm install
Start Command: npm start
Deploy 🚀
🔮 Future Improvements
👤 User authentication (JWT)
💾 Store messages (MongoDB)
📩 Private messaging (1-to-1 chat)
🟢 Online/offline user status
🏠 Chat rooms / groups
📱 Progressive Web App (PWA)
