# GiftLink - Full Stack Capstone Project

## Project Overview
GiftLink is a full-stack web application designed to connect users who wish to give away household items they no longer need with users who enjoy recycling and prefer finding free household items that match their tastes rather than purchasing new ones.

The application includes the following features:
- **Home Page**
- **Listings Page**
- **Navigation Bar**
- **Search Function**
- **Item Details Page**
- **Registration & Login Pages**
- **Editable Profile Page**

### Key Technologies
- **Front-end**: React, HTML, CSS
- **Back-end**: Node.js, Express.js, MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Containerization & Deployment**: Docker, Kubernetes, IBM Cloud
- **DevOps Practices**: GitHub Actions, CI/CD

## User Stories
### As a User
1. **As a donor**, I want to list household items I no longer need so that others can find and take them for free.
2. **As a recipient**, I want to search for available items based on my needs and location so that I can find items that match my preferences.
3. **As a user**, I want to create an account and log in securely so that my profile, listings, and interactions are saved.
4. **As a user**, I want to edit my profile information so that I can update my contact details and preferences.
5. **As a user**, I want to communicate with item donors via a secure messaging system so that I can arrange pickups.
6. **As a user**, I want to view detailed descriptions and images of items before requesting them so that I can make informed decisions.
7. **As a user**, I want to leave reviews and feedback on donors and recipients so that I can help maintain a trustworthy community.
8. **As a user**, I want to be notified about new listings that match my preferences so that I don't miss out on items I need.

### As an Admin
1. **As an admin**, I want to monitor user activities and flagged items so that I can maintain a safe and respectful community.
2. **As an admin**, I want to approve or remove listings that violate community guidelines so that I can ensure quality control.
3. **As an admin**, I want to manage user accounts and ban rule-breaking users so that I can enforce platform policies.

## Project Modules
### Module 1 - Project Setup
- Clone the repository and set up the project structure.
- Create a **Kanban board** with user stories to track progress.
- Set up **MongoDB** for data storage.

### Module 2 - Backend API Development
- Implement API endpoints for **listing resources**.
- Develop a search function with **multiple parameters**.
- Implement **sentiment analysis** for user comments.

### Module 3 - Front-end Development
- Build React components for:
  - Home Page
  - Navigation Bar
  - Login & Registration Pages
  - Item Listings & Details Page
  - Search Functionality

### Module 4 - Authentication & User Management
- Implement user **registration & login** using **JWT authentication**.
- Develop a **user profile** functionality.

### Module 5 - Containerization & Deployment
- Containerize the application using **Docker**.
- Deploy using **Kubernetes & IBM Code Engine**.
- Implement **CI/CD pipeline** with GitHub Actions.

### Module 6 - Peer Review & Final Submission
- Submit the project for **peer review**.
- Wrap up the course with final readings and assessments.

## Architecture & Directory Structure
The GiftLink application follows a **structured directory architecture**, ensuring modularity and scalability.

```
📂 fullstack-capstone-project
 ┣ 📂 giftlink-backend (Express Backend)
 ┣ 📂 giftlink-frontend (React Frontend)
 ┣ 📂 sentiment (Sentiment Analysis Services)
 ┣ 📂 .gitignore
 ┣ 🔐 LICENSE
 ┣ 📜 Dockerfile (Containerization)
 ┣ 📜 README.md (Project Documentation)
 ┣ 📜 user-story.md (Kanban Documentation)
 ┗ ...
```

## How to Run the Project
### Prerequisites
- Node.js & npm
- MongoDB
- Docker
- Kubernetes

### Setup Instructions
1. **Clone the repository:**
   ```bash
   git clone https://github.com/watashiaashishgurung/fullstack-capstone-project.git
   cd fullstack-capstone-project
   ```

2. **Install dependencies:**
   ```bash
   cd giftlink-frontend && npm install
   cd ../giftlink-backend && npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the `giftlink-backend` directory with the necessary configurations (MongoDB URI, JWT Secret, etc.).

4. **Run the application:**
   ```bash
   # Start the backend
   cd giftlink-backend && npm start
   
   # Start the frontend
   cd ../giftlink-frontend && npm start
   ```

5. **Containerize & Deploy:**
   ```bash
   docker build -t giftlink .
   docker run -p 3000:3000 giftlink
   ```

## Contribution
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m "Added feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Create a Pull Request.

## License
This project is licensed under the **MIT License**.

## Repository Link
🔗 **[GiftLink GitHub Repository](https://github.com/watashiaashishgurung/fullstack-capstone-project.git)**
