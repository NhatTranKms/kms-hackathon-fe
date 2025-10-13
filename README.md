# 🚀 AI-Powered Interview Preparation Assistant

A lightweight, AI-powered Interview Preparation Assistant that helps interviewers (Project Managers, Engineering Managers, Technical Leads) quickly generate high-quality, role-specific interview materials.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Usage Guide](#usage-guide)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

The AI-Powered Interview Preparation Assistant transforms the hiring process by providing interviewers with:

- **Smart skill gap analysis** between job descriptions and candidate resumes
- **AI-generated interview questions** tailored to specific roles and seniority levels
- **Comprehensive evaluation rubrics** with scoring guides
- **PDF exports** for interview documentation

### Target Users
- **Engineering Managers**
- **Project Managers** 
- **Technical Leads**

### Supported Candidate Profiles
- **Software Developers**
- **QA Engineers** (Manual/Automation)
- **Business Analysts**

## ✨ Features

### 🔍 Pre-Interview Preparation
- **Input Form**: Upload job descriptions and resumes (PDF/DOCX)
- **AI Analysis**: Intelligent comparison of JD requirements vs candidate skills
- **Skill Gap Visualization**: Clear breakdown of matches, gaps, and strengths
- **Question Generation**: 15 tailored questions across 5 technical categories:
  - Core Knowledge
  - Practical Skills
  - Tools & Technology
  - Scenario-Based Problem Solving
  - Process & Best Practices

### 📊 Analysis & Reporting
- **Match Score Calculation**: Percentage-based compatibility scoring
- **Detailed Rubrics**: Evaluation criteria for each question
- **Scoring Guides**: 1-5 star rating system with descriptions
- **PDF Export**: Professional interview question packages

### 🎨 User Experience
- **Modern UI**: Clean, responsive design with Tailwind CSS
- **Real-time Loading**: Progress indicators with status updates
- **Drag & Drop**: Intuitive file upload interface
- **Mobile Responsive**: Works seamlessly on all devices

## 🛠 Tech Stack

### Frontend
- **React 19** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool & Dev Server
- **React Router** - Client-side Routing
- **Zustand** - State Management

### Styling & UI
- **Tailwind CSS** - Utility-first CSS Framework
- **shadcn/ui** - Component Library
- **Lucide React** - Icon Library
- **Floating UI** - Tooltips & Popovers

### Additional Libraries
- **Axios** - HTTP Client
- **jsPDF** - PDF Generation
- **React Query** - Server State Management

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ 
- **npm** or **yarn** or **bun**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kms-hackathon-fe
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── Layout.tsx      # Main layout wrapper
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── InterviewPreparationPage.tsx
│   ├── ResumeFitAnalysisPage.tsx
│   └── QuestionGeneratorPage.tsx
├── services/           # API and external services
│   ├── apiService.ts
│   ├── pdfExportService.ts
│   └── streamingService.ts
├── store/              # State management
│   └── useInterviewStore.ts
├── models/             # TypeScript interfaces
│   ├── api.ts
│   ├── interview.ts
│   └── index.ts
├── hooks/              # Custom React hooks
├── data/               # Mock data and samples
└── assets/             # Static assets and mockups
```

## 🔌 API Integration

### Backend Endpoints

The application integrates with a backend API running on `http://localhost:3000`:

```typescript
// Main analysis endpoint
POST /prepare-interview
- Body: FormData with 'jd_text' and 'cv_file'
- Returns: Complete analysis with skill matching and questions

// Metadata endpoints
GET /titles              # Job titles
GET /seniority-levels    # Seniority levels  
GET /interview-simulators # Interview personas
```

### API Response Structure

```typescript
interface AnalysisResponse {
  status: string;
  execution_time: number;
  timestamp: string;
  jd_analysis: JDAnalysis;
  cv_analysis: CVAnalysis;
  skill_matcher: SkillMatcherResponse;
  question_generator: QuestionGeneratorResponse;
}
```

## 📖 Usage Guide

### 1. Interview Preparation Workflow

1. **Navigate to Preparation Page**
   - Click "Start Preparation" from homepage

2. **Fill Required Information**
   - Select candidate title (Software Engineer, Testing Engineer, Business Analyst)
   - Choose seniority level (Junior, Senior, Principle)
   - Enter job description text
   - Upload candidate resume (PDF/DOCX, max 10MB)

3. **Submit for Analysis**
   - Click "Submit" to start AI processing
   - Monitor progress through loading stages

4. **Review Analysis Results**
   - View skill gap analysis with match score
   - Examine matched/missing skills breakdown
   - Check criteria matching table

5. **Generate Interview Questions**
   - Navigate to questions page (if match score ≥ 80%)
   - Browse questions by category
   - Expand for detailed rubrics and scoring guides
   - Export as PDF for interview use

### 2. Key Features Usage

#### File Upload
- **Supported formats**: PDF, DOCX
- **Size limit**: 10MB
- **Method**: Drag & drop or click to browse

#### Question Categories
- **Core Knowledge**: Fundamental concepts
- **Practical Skills**: Hands-on abilities  
- **Tools & Technology**: Technical proficiency
- **Scenario-Based**: Problem-solving approach
- **Process & Best Practices**: Methodology understanding

#### PDF Export
- Professional formatting with candidate info
- Complete question set with rubrics
- Scoring guides for each question
- Automatic filename generation

