# Course Content Data

This directory contains JSON files for all course content. Each course has been updated with the latest trending technologies and industry standards.

## Course Files Created

### Web Development
- **fullstack.json** - Full Stack Development with Next.js 14+, TypeScript, AI Integration
- **frontend.json** - Frontend Development with React 19, Next.js 14+, TypeScript
- **backend.json** - Backend Development with Node.js, Python FastAPI, Microservices

### Python
- **python-core.json** - Complete Python Programming
- **python-django.json** - Python Web Development with Django & FastAPI

### AI & Machine Learning
- **genai-llmops.json** - GenAI LLMOps with LLM Operations & Production AI Systems
- **ai-python.json** - AI with Python covering ML, Deep Learning, TensorFlow, PyTorch

### Mobile Development
- **react-native.json** - Mobile App Development with React Native & Expo

## Key Updates with Latest Trends

### Full Stack Development
- Next.js 14+ with App Router & Server Components
- TypeScript for type-safe development
- AI Integration (OpenAI, Anthropic Claude)
- React 19 features
- Modern deployment practices

### Backend Development
- Microservices Architecture
- FastAPI & Django
- Docker & Kubernetes
- Cloud Platforms (AWS, GCP)
- Message Queues (RabbitMQ, Kafka)

### Frontend Development
- React 19 & Concurrent Features
- Next.js 14+ App Router
- TypeScript Mastery
- Tailwind CSS & shadcn/ui
- Performance Optimization

### AI/ML Courses
- Latest LLM technologies (GPT-4, Claude, Llama)
- RAG (Retrieval Augmented Generation)
- LangChain & AI Agents
- Vector Databases
- LLMOps & MLOps

## JSON Structure

Each course JSON file follows this structure:

```json
{
  "id": "course-id",
  "title": "Course Title",
  "subtitle": "Course Subtitle",
  "description": "Course description",
  "duration": "X months",
  "students": "X+ students",
  "rating": "4.X",
  "price": "₹XX,XXX",
  "originalPrice": "₹XX,XXX",
  "discount": "50% OFF",
  "icon": "IconName",
  "gradient": "from-color-600 to-color-600",
  "overview": "Detailed overview",
  "highlights": ["Feature 1", "Feature 2", ...],
  "features": ["Feature 1", "Feature 2", ...],
  "modules": [
    {
      "title": "Module Title",
      "duration": "X weeks",
      "topics": ["Topic 1", "Topic 2", ...]
    }
  ],
  "requirements": ["Requirement 1", ...],
  "instructors": [
    {
      "name": "Instructor Name",
      "role": "Role",
      "experience": "X+ years",
      "company": "Company"
    }
  ],
  "batches": [
    {
      "type": "Offline/Online",
      "location": "Location",
      "startDate": "Date",
      "schedule": "Schedule",
      "seats": "Seats info"
    }
  ],
  "faqs": [
    {
      "question": "Question",
      "answer": "Answer"
    }
  ]
}
```

## Usage

These JSON files can be imported and used in your course detail pages to dynamically load course content. Update your CourseDetails component to load data from these files instead of hardcoded data.

## Note

All course content has been updated with:
- Latest technology trends (2025)
- Industry-standard tools and frameworks
- Modern best practices
- Real-world project examples
- Comprehensive module breakdowns

