TrackNest — Personal Opportunity Management Platform

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:111827,100:374151&height=220&section=header&text=TrackNest&fontSize=50&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Track%20Internships%20•%20Placements%20•%20Scholarships%20•%20Hackathons&descAlignY=60"/>
</p><p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-blue?style=for-the-badge&logo=react"/>
  <img src="https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js"/>
  <img src="https://img.shields.io/badge/Express-Framework-black?style=for-the-badge&logo=express"/>
  <img src="https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb"/>
  <img src="https://img.shields.io/badge/Cloudinary-Storage-blue?style=for-the-badge&logo=cloudinary"/>
  <img src="https://img.shields.io/badge/JWT-Authentication-orange?style=for-the-badge&logo=jsonwebtokens"/>
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge"/>
</p>

Overview

TrackNest is a full-stack web application designed to simplify the management of internships, placements, scholarships, and hackathons.

As a student, managing multiple applications often becomes overwhelming. Deadlines get missed, resumes remain scattered, interview rounds become difficult to track, and important follow-ups are forgotten.

TrackNest solves this by bringing the entire opportunity management workflow into one centralized platform.

---

Problem Statement

Managing multiple opportunities comes with several challenges:

- Missing deadlines
- Scattered resumes and cover letters
- Difficulty tracking interview rounds
- Missed follow-ups
- Unorganized application history

TrackNest helps solve these problems by creating a structured workflow for opportunity management.

---

Features

Opportunity Tracking

Manage opportunities with a Kanban workflow:

- Wishlist
- Applied
- Interview
- Offer
- Rejected

---

Document Vault

Store and manage:

- Resumes
- Cover Letters
- Application documents

Integrated with Cloudinary for secure cloud storage.

---

ATS Resume Analyzer

Analyze resumes for:

- ATS Score
- Missing Skills
- Improvement Suggestions

---

Deadline Reminder System

Stay updated with:

- Email notifications
- Reminder customization
- Upcoming deadline tracking

---

Interview Tracker

Track all interview rounds:

- Online Assessment
- Technical Round
- HR Round
- Final Round

Track statuses:

- Pending
- Scheduled
- Cleared
- Rejected

---

Dashboard Analytics

Provides:

- Total applications overview
- Upcoming deadlines
- Recent activities
- Quick insights

---

User Settings

Manage:

- Profile details
- Notification preferences
- Default reminders
- Default documents

---

Tech Stack

Frontend

- React.js
- Vite
- Tailwind CSS
- Framer Motion

Backend

- Node.js
- Express.js

Database

- MongoDB Atlas

Cloud Storage

- Cloudinary

Authentication

- JWT Authentication

Notifications

- Nodemailer
- Node Cron

---

Project Structure

TrackNest/
│── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── utils/
│
│── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── utils/

---

Installation

Clone Repository

git clone https://github.com/Jyotiiii3003/TrackNest.git
cd TrackNest

---

Backend Setup

cd backend
npm install
npm run dev

Create ".env"

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
EMAIL_USER=your_email
EMAIL_PASS=your_app_password
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

---

Frontend Setup

cd frontend
npm install
npm run dev

Create ".env"

VITE_API_URL=http://localhost:5000

---

Deployment

Frontend: Vercel
Backend: Render
Database: MongoDB Atlas
Storage: Cloudinary

---

Live Demo

https://track-nest-eta.vercel.app

---

Repository

https://github.com/Jyotiiii3003/TrackNest

---

Future Improvements

- Forgot Password
- Profile Update API
- Multiple Resume Versions
- Advanced Analytics
- Export Reports
- Team Collaboration

---

Author

Jyoti Mishra
B.Tech CSE
Full Stack Developer

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:111827,100:374151&height=120&section=footer"/>
</p>
