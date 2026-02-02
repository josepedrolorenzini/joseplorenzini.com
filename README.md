# joseplorenzini.com – Full-Stack React Portfolio

A production-ready full-stack web application showcasing modern web development practices. Built with React, Node.js, MongoDB, and deployed on AWS infrastructure with Nginx reverse proxy configuration.

**Live Website:** [joseplorenzini.com](https://joseplorenzini.com)  
**API Endpoint:** [joseplorenzini.com/api/posts](https://joseplorenzini.com/api/posts)

---

## 🎯 What This Project Demonstrates

This portfolio represents a complete full-stack application that I designed, developed, and deployed independently. It demonstrates:

- **Frontend Development** – Building responsive, modern user interfaces with React
- **Backend Development** – Creating RESTful APIs with Node.js and Express
- **Database Management** – Implementing MongoDB for dynamic content storage
- **Cloud Infrastructure** – Deploying and maintaining production applications on AWS
- **DevOps Practices** – Server configuration, process management, and deployment workflows
- **Security** – HTTPS implementation, environment variables, and secure data handling

This isn't built from a template. Every component, from the React frontend to the Nginx configuration, was implemented to solve real production challenges.

---

## 🔧 Technology Stack

### Frontend
- **React** with **Vite** – Fast, modern build tooling with Hot Module Replacement
- **JavaScript (ES6+)** – Modern JavaScript features and best practices
- **Responsive CSS** – Mobile-first design approach
- **Fetch API** – Asynchronous data fetching from custom backend

### Backend
- **Node.js** – JavaScript runtime for server-side logic
- **Express.js** – Web framework for building RESTful APIs
- **MongoDB** with **Mongoose** – NoSQL database with schema modeling
- **Nodemailer** – Email functionality for contact form submissions

### Infrastructure & DevOps
- **AWS EC2** – Elastic Compute Cloud instance for hosting
- **Nginx** – Web server and reverse proxy configuration
- **Ubuntu Linux** – Server operating system
- **PM2** – Process manager for Node.js applications
- **Cloudflare** – SSL/TLS certificates and DNS management

### Development Environment
- **Visual Studio Code** – Primary code editor
- **npm** – Package management
- **Git** – Version control

---

## 📁 Project Architecture

```
joseplorenzini.com/
├── dist/                   # Production build of React app (served by Nginx)
├── server/                 # Node.js backend
│   ├── schema/            # MongoDB Mongoose schemas
│   ├── server.js          # Express server entry point
│   ├── .env               # Environment variables (not in repo)
│   └── package.json       # Backend dependencies
├── src/                    # React source code
│   ├── components/        # Reusable React components
│   ├── pages/             # Page-level components
│   └── assets/            # Images, styles, etc.
├── nginx/                  # Nginx configuration files
├── package.json            # Frontend dependencies
└── vite.config.js         # Vite configuration
```

---

## 🌐 API Documentation

The backend provides a RESTful API connected to MongoDB for dynamic content management.

| Method | Endpoint | Description | Response |
|--------|----------|-------------|----------|
| `GET` | `/api/posts` | Retrieve all blog posts from MongoDB | JSON array of posts |
| `POST` | `/api/submit-form` | Handle contact form submissions | Success/error message |
| `GET` | `/api/chile-elections` | External API integration example | Proxied data |

**Example Request:**
```javascript
fetch('https://joseplorenzini.com/api/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

---

## 🚀 Key Features

✅ **Single Page Application (SPA)** – Smooth client-side routing with React Router  
✅ **Custom REST API** – Express.js backend serving MongoDB data  
✅ **Database Integration** – MongoDB with Mongoose ODM for data persistence  
✅ **Contact Form** – Email notifications via Nodemailer  
✅ **HTTPS Security** – SSL/TLS encryption via Cloudflare  
✅ **Reverse Proxy** – Nginx routing traffic between frontend and API  
✅ **Production Deployment** – Live on AWS EC2 with 99.9% uptime  
✅ **Process Management** – PM2 ensuring application reliability  
✅ **Responsive Design** – Works seamlessly on desktop, tablet, and mobile

---

## ⚙️ Running Locally

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local instance or MongoDB Atlas)
- npm or yarn

### Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file with required variables
# MONGODB_URI=your_mongodb_connection_string
# EMAIL_USER=your_email
# EMAIL_PASS=your_app_password

# Start the server
npm start
```

The API will run on `http://localhost:5000` by default.

### Frontend Setup

```bash
# Install frontend dependencies
npm install

# Start development server
npm run dev
```

The React app will run on `http://localhost:5173` with hot reload enabled.

### Production Build

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🖥️ Production Deployment Details

### Server Configuration
- **Platform:** AWS EC2 (t2.micro instance)
- **OS:** Ubuntu 22.04 LTS
- **Web Server:** Nginx 1.18+
- **Process Manager:** PM2 for Node.js
- **Database:** MongoDB Atlas (cloud-hosted)

### Nginx Configuration
Nginx is configured to:
- Serve static React build from `/dist`
- Proxy API requests to Node.js backend on port 5000
- Handle SSL/TLS termination
- Implement client-side routing fallback for SPA
- Enable gzip compression for assets

### Deployment Workflow
1. Code changes pushed to repository
2. SSH into EC2 instance
3. Pull latest changes
4. Run `npm run build` for frontend
5. Restart PM2 process for backend
6. Nginx automatically serves updated files

---

## 💡 Why This Project Matters

This portfolio demonstrates real-world development skills that go beyond tutorials:

- **Full Ownership:** I built every layer—from React components to database schemas to server configuration
- **Production Experience:** This isn't running on localhost; it's a live application handling real traffic
- **Problem Solving:** I debugged CORS issues, optimized build sizes, managed environment variables, and configured reverse proxies
- **DevOps Understanding:** I don't just write code; I deploy it, monitor it, and maintain it

For recruiters and hiring managers: This project shows I can take an idea from concept to production deployment, managing every technical detail along the way.

---

## 📫 Contact

Interested in discussing this project or potential opportunities?

**Portfolio:** [https://joseplorenzini.com](https://joseplorenzini.com)  
**Location:** Santiago, Chile (UTC-3) | Available for remote work

---

## 📄 License & Usage

This project is available for review and educational purposes. Please contact me for any other usage inquiries.

---

**Last Updated:** February 2026  
**Status:** ✅ Live and actively maintained
