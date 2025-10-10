# Hexis AI

A modern, full-stack AI-powered application combining Spring Boot backend excellence with a sleek React frontend.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Java](https://img.shields.io/badge/Java-17+-ED8B00?logo=java&logoColor=white)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-6DB33F?logo=spring-boot&logoColor=white)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=black)](https://react.dev)


## Features

- **AI-Powered Intelligence** – Leverages advanced language models for intelligent, context-aware responses
- **Text-to-Speech Integration** – Converts AI responses to natural speech using ElevenLabs with Samisha voice
- **High-Performance UI** – Responsive React interface with smooth interactions
- **Secure Backend** – Spring Boot API with production-ready security
- **Cross-Platform Support** – Works seamlessly on all modern browsers
- **Simple API Design** – Minimal endpoints optimized for core functionality

## Architecture

```
Hexis AI
├── Frontend (React)
│   ├── Chat Interface
│   ├── Voice Integration
│   └── State Management
│
└── Backend (Spring Boot)
    ├── REST API
    ├── AI Integration
    └── ElevenLabs TTS
```

**Frontend:** React handles the user interface, manages chat state, and communicates with the backend via REST APIs.

**Backend:** Spring Boot manages AI service integration, text-to-speech conversion, and API endpoints.

## Prerequisites

Before getting started, ensure you have the following installed:

- **Java 17+** ([Download](https://www.oracle.com/java/technologies/downloads/))
- **Maven 3.8+** (included with most IDEs like IntelliJ)
- **npm or yarn** (included with Node.js)
- **Git** ([Download](https://git-scm.com/))

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/hexis-ai.git
cd hexis-ai
```

### 2. Backend Setup (Spring Boot)

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

The backend will be available at `http://localhost:8080`

### 3. Frontend Setup (React)

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173` (or your configured port)

## Configuration

Before running the application, you need to configure your API keys:

### Backend Configuration

Update the application configuration with your API keys in the Spring Boot application properties or as system environment variables:

- **OpenAI API Key** – Required for AI responses
- **ElevenLabs API Key** – Required for text-to-speech functionality

Example configuration in `application.properties`:

```properties
openai.api.key=your_openai_api_key
elevenlabs.api.key=your_elevenlabs_api_key
elevenlabs.voice.id=samisha
```

Or set as environment variables:

```bash
export OPENAI_API_KEY=your_openai_api_key
export ELEVENLABS_API_KEY=your_elevenlabs_api_key
```

### Frontend Configuration

Create a `.env.local` file in the frontend directory:

```
VITE_API_URL=http://localhost:8080/api
```

## Usage

1. **Start the Backend** – Run the Spring Boot application
2. **Start the Frontend** – Run the React development server
3. **Open Your Browser** – Navigate to `http://localhost:5173`
4. **Enter Your Query** – Type your question or request
5. **Receive Response** – Get AI response with optional voice synthesis

## API Endpoints

### POST `/api/chat`

Send a text query and receive an AI-generated response.

**Request:**
```json
{
  "message": "What is the weather today?"
}
```

**Response:**
```json
{
  "response": "I don't have access to real-time weather data...",
  "timestamp": "2025-10-10T12:34:56Z"
}
```

### POST `/api/voice`

Send a text query and receive an AI response converted to speech using ElevenLabs Samisha voice.

**Request:**
```json
{
  "message": "Tell me a joke"
}
```

**Response:**
```json
{
  "audioUrl": "data:audio/mpeg;base64,...",
  "message": "Why did the developer go broke?...",
  "timestamp": "2025-10-10T12:34:56Z"
}
```

## Project Structure

```
hexis-ai/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/hexis/
│   │   │   │       ├── controller/
│   │   │   │       ├── service/
│   │   │   │       └── config/
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## Contributing

We welcome contributions! Here's how to get started:

### Steps to Contribute

1. **Fork the Repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit Your Changes**
   ```bash
   git commit -m "Add feature: brief description"
   ```

4. **Push to Your Branch**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**
   - Provide a clear description of your changes
   - Reference any related issues
   - Ensure all tests pass

### Contribution Guidelines

- Follow existing code style and conventions
- Write clear, descriptive commit messages
- Add tests for new features
- Update documentation as needed
- Keep pull requests focused and atomic

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

## Support & Issues

Found a bug or have a feature request? Please open an [issue on GitHub](https://github.com/yourusername/hexis-ai/issues).

## Resources

- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [React Official Docs](https://react.dev)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [ElevenLabs API Documentation](https://elevenlabs.io/docs)
- [Maven Guide](https://maven.apache.org/guides/)

---

Made with care by the Hexis AI Team
