# Hexis AI

Hexis AI is a modern AI-powered application with a **Spring Boot backend** and **React frontend**, designed to provide intelligent responses and a smooth user experience.

## Features

- **AI-powered responses** using advanced language models.
- **Fast and responsive UI** built with React.
- **Secure backend** using Spring Boot.
- **Customizable API keys** for integrations like OpenAI or TTS.
- **Cross-platform support** (works on any browser).

## Architecture


- **Frontend:** React handles the UI, input fields, and rendering AI responses.  
- **Backend:** Spring Boot exposes REST APIs and manages API calls to AI services.  



## Prerequisites

- Java 17+  
- Maven  
- Node.js 18+  
- npm or yarn  

## Installation

### Backend (Spring Boot)

1. Navigate to backend folder: (no need to explicitly install maven if using intellij so below steps will be ignored)
   ```bash
   cd backend
   mvn spring-boot:run
   mvn clean install

The backend will run on http://localhost:8080 by default.

    ```bash
     cd backend
     mvn spring-boot:run
     mvn clean install

Frontend (React)

Navigate to frontend folder:

cd frontend


Install dependencies:

npm install


Run the frontend:

npm run dev



Usage

Open the frontend in your browser.

Enter your query or input.

Get AI-generated responses from the backend.

Contributing

Fork the repo

Create a new branch: git checkout -b feature/YourFeature

Commit your changes: git commit -m "Add some feature"

Push the branch: git push origin feature/YourFeature

Open a Pull Request
