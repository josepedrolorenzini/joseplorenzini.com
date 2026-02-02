# joseplorenzini.com – Full-Stack React Portfolio

A production-ready full-stack web application built with React, Node.js, MongoDB, and AWS, deployed behind Nginx on a Linux server.

This project demonstrates modern frontend development, backend API design, database integration, and cloud deployment.

🔧 Tech Stack
Frontend

React (Vite)

JavaScript (ES6+)

HTML5 / CSS3

Fetch API

Backend

Node.js

Express.js

MongoDB (Mongoose)

Nodemailer (contact form)

Infrastructure & DevOps

AWS EC2

Nginx (reverse proxy)

Linux (Ubuntu)

PM2 (process management)

Cloudflare (SSL & DNS)

Development Tools

Visual Studio Code

npm

🌐 Live Project

Website
https://joseplorenzini.com

API Endpoint (MongoDB-backed)
https://joseplorenzini.com/api/posts

📦 Project Structure
root
├── dist/                # React production build (served by Nginx)
├── server/              # Node.js / Express backend
│   ├── schema/          # MongoDB schemas (Mongoose)
│   ├── server.js        # Main server entry point
│   └── package.json
├── nginx/               # Nginx configuration (AWS)
└── README.md

🚀 Features

Responsive React frontend

REST API built with Express.js

MongoDB integration for dynamic content

Contact form with email notifications (Nodemailer)

Secure HTTPS setup

Reverse proxy configuration using Nginx

Production deployment on AWS EC2

🔌 API Routes
Method	Endpoint	Description
GET	/api/posts	Fetch posts from MongoDB
POST	/api/submit-form	Contact form submission
GET	/api/chile-elections	External API integration example
⚙️ Local Development
Backend (Node.js)
cd server
npm install
npm start


Server runs by default on:

http://localhost:5000

Frontend (React)
npm install
npm run dev

🖥️ Production Setup

React build served from /dist

Nginx handles:

HTTPS

Static assets

React Router SPA fallback

Reverse proxy to Node.js API

Node.js managed with PM2

MongoDB connected via Mongoose

📌 Notes for Recruiters

This project is fully deployed and live

Demonstrates end-to-end ownership:

Frontend

Backend

Database

Server configuration

Deployment

Built and maintained without templates or no-code platforms

Focused on real-world production concerns

📄 License

This project is open for review and learning purposes.