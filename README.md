🧠 AI Career Mentor
An AI-powered MERN stack application that helps users identify and shape their career paths based on AI-generated insights. The platform provides personalized suggestions, user history, authentication, and a clean, intuitive interface.

👉 Explore the project live: https://melodic-selkie-5a91c4.netlify.app/

(Hosted on Netlify — responsive and mobile-friendly!)

✨ Features
🔐 User Authentication (Signup/Login)

💡 AI Career Suggestions via Gemini/OpenAI
🕓 Interaction History Tracking
📁 User Profile with Image Upload
⚛️ React Frontend with Tailwind CSS
🌐 Backend API using Node.js & Express
🧠 AI Services Integration (Gemini/OpenAI API)
🗃 MongoDB for Data Persistence

📁 Project Structure
bash
Copy
Edit
AI-CareerResponse-main/
│
├── backend/                # Express backend with AI APIs & DB models
├── frontend/aiask/         # React frontend (UI/UX)
└── uploads/                # Profile picture storage
🚀 Getting Started

📦 Prerequisites
Make sure you have the following installed:

Node.js (v18+)

npm

MongoDB (local or Atlas)

Git

🔧 Installation
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/AI-CareerResponse.git
cd AI-CareerResponse-main

3. Setup the Backend
bash
Copy
Edit
cd backend
npm install
Create a .env file in backend/ and add:

env
Copy
Edit
PORT=5000
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_or_openai_api_key
3. Start Backend Server
bash
Copy
Edit
npm start
4. Setup the Frontend
bash
Copy
Edit
cd ../frontend/aiask
npm install
5. Run Frontend Dev Server
bash
Copy
Edit
npm start


🖥️ Live Demo
Want to host it? You can use:
Frontend: Netlify or Vercel
Backend: Render or Railway
Ensure to update the API base URL in frontend to your deployed backend.

💡 API Overview
POST /api/ai/respond
Input: Career query

Output: AI-generated suggestion

POST /api/auth/signup & /login
For user registration and login

GET /api/history
Returns user interaction history


🙌 Contributing
Fork the repo

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
MIT License © 2025 [Divyansh]

