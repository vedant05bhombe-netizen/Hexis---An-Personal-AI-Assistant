# 🤖 Hexis AI
> A full-stack AI-powered chat application that converts your queries into intelligent responses — and speaks them aloud.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Java](https://img.shields.io/badge/Java-17+-ED8B00?logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-6DB33F?logo=spring-boot&logoColor=white)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=black)](https://react.dev)

---

## 📌 Overview

Hexis AI is a full-stack application that connects a React frontend to a Spring Boot backend, which orchestrates a three-way pipeline: user input → ChatGPT (AI response) → ElevenLabs (text-to-speech). The result is a conversational AI experience that you can both read and hear.

Built as a personal project to explore AI integrations, REST API design, and how multiple third-party services can work together in a clean, maintainable backend architecture.

---

## ✨ Features

- 💬 **AI Chat** – Send messages and receive intelligent, context-aware responses via OpenAI's ChatGPT
- 🔊 **Text-to-Speech** – AI responses are converted to natural audio using ElevenLabs (Samisha voice)
- ⚡ **Fast React UI** – Responsive, modern interface with smooth user interactions
- 🔐 **Secure Backend** – Production-ready Spring Boot API handling all service communication
- 🌐 **Cross-Platform** – Works on all modern browsers, desktop and mobile

---

## 🛠 Tech Stack

### Frontend
- React 18+
- Vite (dev server & build tool)

### Backend
- Java 17+
- Spring Boot 3.x
- Maven

### External APIs
- OpenAI API (ChatGPT) – AI response generation
- ElevenLabs API – Text-to-speech synthesis (Samisha voice)

---

## 📸 Screenshots

### Home / Chat Interface
> https://github.com/vedant05bhombe-netizen/Hexis---An-Personal-AI-Assistant/issues/1#issue-4427891635

### Voice Response in Action
> *(Coming soon)*

### Mobile View
> *(Coming soon)*

---

## 🏗 Project Structure

```
hexis-ai/
│
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/hexis/
│   │   │   │   ├── controller/
│   │   │   │   ├── service/
│   │   │   │   └── config/
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

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/vedant05bhombe-netizen/hexis-ai.git
cd hexis-ai
```

### 2. Backend Setup

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

Backend runs at: `http://localhost:8080`

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## 🔑 Environment Variables

### Backend — `application.properties`

```properties
openai.api.key=your_openai_api_key
elevenlabs.api.key=your_elevenlabs_api_key
elevenlabs.voice.id=samisha
```

Or as environment variables:

```bash
export OPENAI_API_KEY=your_openai_api_key
export ELEVENLABS_API_KEY=your_elevenlabs_api_key
```

### Frontend — `.env.local`

```
VITE_API_URL=http://localhost:8080/api
```

---

## 📡 API Endpoints

| Method | Endpoint     | Description                                      |
|--------|--------------|--------------------------------------------------|
| POST   | `/api/chat`  | Send a message, receive an AI-generated response |
| POST   | `/api/voice` | Send a message, receive response as audio (TTS)  |

### `POST /api/chat`

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

### `POST /api/voice`

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

---

## 🧠 Challenges Faced

### Three-Way Service Orchestration
The core challenge was understanding and implementing the full pipeline: user input → OpenAI (generate response) → ElevenLabs (convert response to audio) → frontend (play audio). Each service has its own request/response format, authentication, and failure modes. Getting all three to work together reliably — and handling errors at each stage — required careful service design in the Spring Boot backend.

---

## 📚 What I Learned

- How to integrate multiple third-party APIs in a single backend service
- Designing a clean service layer in Spring Boot that separates concerns between AI and TTS logic
- Handling base64 audio data across the backend–frontend boundary
- The importance of error handling when chaining external API calls

---

## 🚀 Future Improvements

- [ ] Add conversation history / multi-turn chat memory
- [ ] Let users choose from multiple ElevenLabs voices
- [ ] Add OAuth-based authentication
- [ ] Deploy to a cloud platform (Render / Railway)
- [ ] Improve mobile UI responsiveness
- [ ] Add streaming responses for faster perceived performance

---

## 👨‍💻 Author

**Vedant Bhombe**

- GitHub: [@vedant05bhombe-netizen](https://github.com/vedant05bhombe-netizen)
- LinkedIn: [vedant-bhombe-01a865290](https://www.linkedin.com/in/vedant-bhombe-01a865290/)

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add feature: description"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

Please follow existing code style, write clear commit messages, and add tests for new features.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

*Made with care by Vedant Bhombe*
