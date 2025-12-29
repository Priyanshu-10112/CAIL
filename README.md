# CAIL - Campus Academic Intelligence Layer
**Frontend MVP / Prototype**

**Team:** ZERO_IQ  
**Hackathon:** Codespire 3.0 (GDG-based)  
**Team Members:** Priyanshu Sharma, Ishan Raut, Lavnesh Nariya

*HTML/CSS/JavaScript-based demonstration of an Academic Intelligence Layer concept*

---

## Problem Statement

- **Faculty Overload:** Professors spend excessive time answering repetitive academic queries from students
- **Lack of Verified Support:** Students rely on unverified online sources instead of curriculum-aligned materials
- **Knowledge Gaps:** No centralized system for faculty-approved academic content delivery

---

## Solution Overview

CAIL (Campus Academic Intelligence Layer) is designed as a **faculty-governed academic intelligence system** that would operate exclusively on verified, curriculum-aligned content. The concept uses RAG (Retrieval-Augmented Generation) architecture with Vertex AI to ensure responses come only from faculty-approved materials.

**Core Vision:** An institution-owned knowledge layer that reduces faculty query load while providing students with 24/7 access to verified academic content.

---

## What is Implemented (Current MVP)

### ✅ Working Features
- **Static Frontend Pages:** Professional HTML/CSS/JS interface
- **Mock Student Query Flow:** Chat interface with 3 pre-loaded academic Q&A pairs
- **Mock Faculty Upload:** Simulated file upload with visual feedback
- **Architecture Visualization:** Complete system flow diagrams
- **Responsive Design:** Works across desktop, tablet, and mobile

### ✅ Mock Knowledge Base
- Binary Search Trees (Data Structures)
- Newton's Second Law (Physics) 
- Database Normalization (DBMS)

### ✅ Demo Functionality
- Faculty login (accepts any credentials for demo)
- File upload simulation with 1.5s processing delay
- Student chat with keyword matching
- Learning continuity feature mockup

---

## What is NOT Implemented (Future Integration)

### ❌ Backend Systems
- **Real Authentication:** Currently accepts any login credentials
- **Database Integration:** No Firebase/Firestore connection
- **File Storage:** No actual file processing or storage
- **Real AI Pipeline:** No Vertex AI or RAG implementation

### ❌ Production Features
- User management and role-based access
- Actual content indexing and retrieval
- Real-time chat functionality
- Analytics and reporting systems

**Note:** These are planned for future development phases and represent the technical architecture vision.

---

## Tech Stack

### Currently Implemented
- **HTML5:** Semantic markup and structure
- **CSS3:** Professional styling with custom properties
- **Vanilla JavaScript:** Interactive functionality and mock data handling

### Planned Architecture (Not Implemented)
- **Google Cloud Platform:** Scalable infrastructure
- **Firebase:** Authentication and real-time database
- **Vertex AI:** Natural language processing and RAG pipeline
- **Google Drive API:** Secure content storage

---

## How to Run the Project

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No backend setup required

### Option 1: Direct File Opening
```bash
# Navigate to project directory
cd path/to/project

# Open index.html in browser
# Double-click index.html OR right-click → Open with Browser
```

### Option 2: Local Server (Recommended for Demo)
```bash
# Using Python 3
python -m http.server 8080

# Using Node.js (if installed)
npx http-server -p 8080

# Using PHP (if installed)
php -S localhost:8080
```

Then open: **http://localhost:8080**

---

## Demo Instructions for Judges

### 1. Start at Landing Page (`index.html`)
- Explain the problem: Faculty overload with repetitive queries
- Show the solution concept: Faculty-controlled academic intelligence
- Navigate to portals using header menu

### 2. Faculty Portal Demo (`faculty.html`)
- Login with any credentials (e.g., username: `faculty`, password: `demo`)
- Upload any file to simulate content verification
- Show the "Content indexed into CAIL Knowledge Base" confirmation
- Explain institutional control concept

### 3. Student Portal Demo (`student.html`)
- Click example questions to see mock responses:
  - "Explain Binary Search Trees with examples"
  - "What is Newton's Second Law of Motion?"
  - "Define Normalization in Database Management"
- Show loading animation and source attribution
- Demonstrate "Missed Today's Lecture?" feature

### 4. Architecture Page (`architecture.html`)
- Walk through the 4-step process flow
- Explain RAG concept and faculty verification
- Show technical architecture diagrams

### Expected Demo Time: 3-4 minutes

---

## Repository Structure

```
project/
├── index.html          # Landing page with problem/solution overview
├── faculty.html        # Faculty portal with mock login/upload
├── student.html        # Student portal with mock chat interface
├── architecture.html   # System architecture and flow diagrams
├── about.html          # Team information and project details
├── css/
│   └── main.css       # Professional styling and responsive design
├── js/
│   ├── main.js        # Common utilities and navigation
│   ├── faculty.js     # Faculty portal mock functionality
│   └── student.js     # Student chat with predefined Q&A
└── README.md          # This documentation
```

---

## Browser Compatibility

- **Chrome/Chromium:** Fully supported
- **Firefox:** Fully supported  
- **Safari:** Fully supported
- **Edge:** Fully supported
- **Mobile browsers:** Responsive design works on all major mobile browsers

**Note:** No external dependencies or build process required.

---

## Key Assumptions

- Demo runs entirely in browser with no server dependencies
- Faculty login accepts any credentials for demonstration purposes
- Student queries match against 3 predefined academic topics
- File uploads are simulated with visual feedback only
- All "AI responses" are pre-written content, not generated

---

## Team & Hackathon Info

**Team ZERO_IQ**
- **Priyanshu Sharma** - Frontend Development & UI/UX
- **Ishan Raut** - System Architecture & JavaScript Logic  
- **Lavnesh Nariya** - Responsive Design & Integration

**Event:** Codespire 3.0 - GDG-based College Hackathon  
**Project Category:** EdTech / Academic Technology  

---

## Future Development Roadmap

### Phase 1: Backend Integration
- Implement Firebase authentication and database
- Connect Google Drive API for file storage
- Build basic content indexing system

### Phase 2: AI Integration
- Integrate Vertex AI for natural language processing
- Implement RAG pipeline for content retrieval
- Add real-time chat functionality

### Phase 3: Production Features
- Multi-institution support
- Advanced analytics dashboard
- LMS integration (Moodle, Canvas)
- Mobile application development

**Current Status:** Frontend MVP demonstrating core concept and user experience flow.
