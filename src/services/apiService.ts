import axios from 'axios';
import type { 
  JobTitle, 
  JobTitlesResponse, 
  SeniorityLevel, 
  SeniorityLevelsResponse, 
  InterviewSimulator, 
  InterviewSimulatorsResponse,
  AnalysisResponse
} from '../models';

// Use environment variable or fallback to the IP address
// const API_BASE_URL = '/api';

// const apiClient = axios.create({
//   baseURL: API_BASE_URL,
//   timeout: 1000000,
  
// });

const oldApiClient = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 1000000,
});

export const fetchJobTitles = async (): Promise<JobTitle[]> => {
  const response = await oldApiClient.get<JobTitlesResponse>('/titles');
  return response.data.data;
};

export const fetchSeniorityLevels = async (): Promise<SeniorityLevel[]> => {
  const response = await oldApiClient.get<SeniorityLevelsResponse>('/seniority-levels');
  return response.data.data;
};

export const fetchInterviewSimulators = async (): Promise<InterviewSimulator[]> => {
  const response = await oldApiClient.get<InterviewSimulatorsResponse>('/interview-simulators');
  return response.data.data;
};

export const prepareInterview = async (
  title: string,
  level: string,
  jdText: string,
  jdFile: File | null,
  cvFile: File
): Promise<AnalysisResponse> => {
  // Create FormData to send all parameters
  const formData = new FormData();
  
  // Add title and level
  formData.append('title', title);
  formData.append('level', level);
  
  // Add job description (either text or file)
  if (jdText) {
    formData.append('jd_text', jdText);
  }
  if (jdFile) {
    formData.append('jd_file', jdFile);
  }
  
  // Add CV/resume file (required)
  formData.append('cv_file', cvFile);

  const response = await oldApiClient.post<AnalysisResponse>('/prepare-interview', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    timeout: 600000, // 60 seconds for file upload and processing
  });
  
  return response.data;
};

// Keep the old function for backward compatibility (if needed)
export const fetchAnalysis = async (): Promise<AnalysisResponse> => {
  // GET analysis mock data from backend
  const response = await oldApiClient.get<AnalysisResponse>('/analysis');
  return response.data;
};