# GiftLink - Full Stack Capstone Project
## Kanban Board
Track the project's progress on the [GiftLink Kanban Board](https://github.com/users/watashiaashishgurung/projects/12/views/1).
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
 ┣ 📂 ISSUE_TEMPLATE
 ┣ 📂 giftlink-backend (Express Backend)
 ┣ 📂 giftlink-frontend (React Frontend)
 ┣ 📂 sentiment (Sentiment Analysis Services)
 ┣ 📂 .gitignore
 ┣ 🔐 LICENSE
 ┣ 📜 Dockerfile (Containerization)
 ┣ 📜 README.md (Project Documentation)
 
```
---
### Fullstack Capstone Project File-structure

<details>
  <summary>ISSUE_TEMPLATE</summary>

- [`user-story.md`](user-story.md)
</details>
<details>
  <summary>giftlink-backend</summary>
  
  - **models/**
    - `db.js`
  - **routes/**
    - `auth.js`
    - `authRoutes.js`
    - `giftRoutes.js`
    - `searchRoutes.js`
  - **util/**
  - **import-mongo/**
    - `.env`
    - `.gitignore`
    - `gifts.json`
    - `index.js`
    - `package-lock.json`
    - `package.json`
    - `test-env.js`
  - `.env`
  - `.gitignore`
  - `app.js`
  - `logger.js`
  - `package-lock.json`
  - `package.json`
</details>

<details>
  <summary>giftlink-frontend</summary>
  
  - **node_modules/**
  - **public/**
    - **images/**
    - **static/**
    - `favicon.ico`
    - `home.html`
    - `index.html`
    - `logo192.png`
    - `logo512.png`
    - `manifest.json`
    - `robots.txt`
  - **src/**
    - **components/**
      - **DetailsPage/**
        - `DetailsPage.css`
        - `DetailsPage.js`
      - **LandingPage/**
        - `LandingPage.css`
        - `LandingPage.js`
      - **LoginPage/**
        - `LoginPage.css`
        - `LoginPage.js`
      - **MainPage/**
        - `MainPage.js`
      - **Navbar/**
        - `Navbar.js`
      - **ProductDetailsPage/**
        - `ProductDetailsPage.js`
      - **Profile/**
        - `Profile.css`
        - `Profile.js`
      - **RegisterPage/**
        - `RegisterPage.css`
        - `RegisterPage.js`
      - **SearchPage/**
        - `SearchPage.css`
        - `SearchPage.js`
    - **context/**
      - `AuthContext.js`
    - `App.css`
    - `App.js`
    - `config.js`
    - `index.css`
    - `index.js`
   </details>

<details>
  <summary>sentiment</summary>
  
- **`index.js`/**
- **`package-lock.json`/**
- **`package.json`/**
   </details>

<details>
  <summary> .gitignore</summary>

- `.gitignore`
   </details>

<details>
  <summary> LICENSE</summary>

- [`LICENSE`](./LICENSE)
   </details>

<details>
    <summary>README.md</summary>

- [`README.md`](./README.md)
   </details>



# How to Run the Project
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


## License
This project is licensed under the [`LICENSE`](./LICENSE)

## Repository Link
🔗 **[GiftLink GitHub Repository](https://github.com/watashiaashishgurung/fullstack-capstone-project.git)**

