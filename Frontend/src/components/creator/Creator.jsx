import React from 'react';
import Navbar from '../components_lite/Navbar';

const Creator = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-10 text-lg leading-relaxed text-gray-800">
        <article className="prose prose-lg lg:prose-xl max-w-none">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">MERN Stack Job Portal</h1>

          <p>Welcome to the MERN Stack Job Portal – a full-featured job search and recruitment application built using modern web technologies. Designed with scalability, responsiveness, and real-world utility in mind, this platform streamlines the hiring process for both job seekers and employers.</p>

          <h2 className="text-3xl font-semibold mt-8 mb-4">🚀 Project Overview</h2>
          <p>The Job Portal application allows job seekers to create accounts, browse job listings, and apply directly through the platform. Employers can post new openings, manage applications, and maintain a company profile. The stack includes MongoDB for database, Express and Node.js for backend APIs, React for the frontend, and various tools like Cloudinary for image storage and JWT for secure authentication.</p>

          <h2 className="text-3xl font-semibold mt-8 mb-4">✨ Key Features</h2>
          <ul className="list-disc pl-6">
            <li>User registration and login system secured with JWT authentication</li>
            <li>CRUD operations for job listings and user profiles</li>
            <li>Cloudinary integration for uploading and displaying company logos or resumes</li>
            <li>Dynamic job search and filtering options</li>
            <li>Employer dashboard to manage job postings and view applications</li>
            <li>Responsive and mobile-friendly design using TailwindCSS</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-8 mb-4">🧑‍💻 Technologies Used</h2>
          <ul className="list-disc pl-6">
            <li><strong>Frontend:</strong> React, React Router, TailwindCSS</li>
            <li><strong>Backend:</strong> Node.js, Express.js</li>
            <li><strong>Database:</strong> MongoDB (Mongoose)</li>
            <li><strong>Authentication:</strong> JSON Web Token (JWT)</li>
            <li><strong>Media Handling:</strong> Cloudinary</li>
            <li><strong>Hosting:</strong> Vercel (frontend) and Render (backend)</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-8 mb-4">📦 Folder Structure</h2>
          <ul className="list-disc pl-6">
            <li><code>/client</code> – React app for user interface</li>
            <li><code>/server</code> – Node.js backend with REST APIs</li>
            <li><code>/models</code> – Mongoose schemas for jobs, users</li>
            <li><code>/controllers</code> – Logic for user and job operations</li>
            <li><code>/middlewares</code> – JWT verification, error handlers</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-8 mb-4">🎯 Goal</h2>
          <p>This project aims to bridge the gap between talent and opportunity through a clean, functional interface and robust backend infrastructure. It is also a demonstration of practical full-stack development skills.</p>

          <h2 className="text-3xl font-semibold mt-8 mb-4">📌 Future Improvements</h2>
          <ul className="list-disc pl-6">
            <li>Real-time chat between employers and applicants</li>
            <li>Resume parsing and AI-powered job recommendations</li>
            <li>Admin panel for system-wide monitoring</li>
          </ul>

          <footer className="mt-10 border-t pt-6 text-gray-500 text-sm">
            Last updated: May 2025
          </footer>
        </article>
      </div>
    </div>
  );
};

export default Creator;
