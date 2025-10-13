import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  FileText, 
  Brain, 
  Target, 
  Download, 
  CheckCircle, 
  Sparkles,
  Clock
} from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      title: "AI-Powered Analysis",
      description: "Advanced AI analyzes job descriptions and resumes to identify skill gaps and strengths"
    },
    {
      icon: <Target className="w-6 h-6 text-green-600" />,
      title: "Tailored Questions",
      description: "Generate 15 personalized interview questions across 5 technical categories"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
      title: "Evaluation Rubrics",
      description: "Get detailed scoring guides and evaluation criteria for each question"
    },
    {
      icon: <Download className="w-6 h-6 text-orange-600" />,
      title: "PDF Export",
      description: "Export complete interview packages as professional PDF documents"
    }
  ];

  const stats = [
    { icon: <Clock className="w-5 h-5" />, label: "Setup Time", value: "< 5 mins" },
    { icon: <FileText className="w-5 h-5" />, label: "Questions Generated", value: "15 per session" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Interview Assistant
            </Badge>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Smart Interview
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Preparation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform your hiring process with AI-powered interview preparation. 
            Generate tailored questions, analyze skill gaps, and conduct more effective interviews.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center items-center gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-600">
                {stat.icon}
                <span className="text-sm font-medium">{stat.label}:</span>
                <span className="text-sm font-bold text-blue-600">{stat.value}</span>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-white mb-2">
                Start Interview Preparation
              </CardTitle>
              <CardDescription className="text-blue-100 text-base leading-relaxed">
                Upload your job description and candidate resume. Our AI will analyze the skill gap 
                and generate personalized interview questions with evaluation criteria.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-8">
              <Button 
                onClick={() => navigate('/preparation')}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Get Started Now
              </Button>
              <p className="text-blue-100 text-sm mt-4">No account needed • Get started instantly</p>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to conduct professional, data-driven interviews
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 group">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Simple 3-step process to better interviews</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Upload Documents",
                description: "Provide the job description and candidate's resume (PDF or DOCX format)"
              },
              {
                step: "02", 
                title: "AI Analysis",
                description: "Our AI analyzes skill gaps, matches, and generates tailored interview questions"
              },
              {
                step: "03",
                title: "Get Results",
                description: "Receive comprehensive interview questions with scoring guides and export as PDF"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-200 pt-8">
          <div className="flex justify-center space-x-6 mb-4">
            <button className="hover:text-gray-700 transition-colors">FAQ</button>
            <button className="hover:text-gray-700 transition-colors">Contact</button>
            <button className="hover:text-gray-700 transition-colors">Privacy Policy</button>
          </div>
          <p>© 2025 AI-Powered Interview Assistant. Built for better hiring decisions.</p>
        </div>
      </main>
    </div>
  );
}

