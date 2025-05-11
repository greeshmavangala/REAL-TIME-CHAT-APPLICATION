# REAL-TIME-CHAT-APPLICATION

*COMPANY* : CODETECH IT SOLUTIONS

*NAME* : VANGALA GREESHMA

*INTERN ID* :

*DOMAIN* : MERN STACK DEVELOPMENT

*DURATION* : 8 WEEKS

*MENTOR* : NEELA SANTHOSH

#  REAL-TIME CHAT APP(CODETECH UNTERNSHIP=TASK1)

This project is a **real-time chat application** built as part of the **CODTECH MERN Stack Internship (Task 1)**. It allows users to send and receive messages instantly using **Socket.IO**, **Node.js**, and **React**.

===

## Technologies Used

**Frontend (React)**
- React.js
- socket.io-client

**Backend (Node.js)**
- Express.js
- Socket.IO
- CORS

---

##  Folder Structure

chat-app/
├── client/ # React frontend
│ ├── src/
│ │ └── App.js
│ └── package.json
├── server/ # Node + Express backend
│ ├── index.js
│ └── package.json
└── README.md # Project overview

---

## *To run the code*

*Backend*

cd server
npm install
node index.js

Backend will run at: http://localhost:5000

*Frontend*

cd ../client
npm install
npm start

Frontend will run at: http://localhost:3000

---

## *How it works*

-When a user types a message and clicks "Send", it is sent to the backend via Socket.IO.

-The backend receives it and broadcasts the message to all connected clients.

---

## *Testing*

Open http://localhost:3000 in two different tabs or browsers.

Type a message in one tab and it will appear instantly in the other.

# *Output*

![Image](https://github.com/user-attachments/assets/b7d25b6e-eafd-4b00-b2df-e06ad56b79bc)


