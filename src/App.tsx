import React, { useState } from 'react';
import { Routes, Route, useNavigate, useParams, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import { INITIAL_PROJECTS } from './services/mockData';
import { Project, Inquiry } from './types';

function App() {
  // "Database" State
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(
    !!localStorage.getItem('adminToken')
  );

  const navigate = useNavigate();

  const handleSubmitInquiry = (inquiry: Inquiry) => {
    setInquiries(prev => [inquiry, ...prev]);
  };

  const handleAdminLoginSuccess = (token: string) => {
    setIsAdminAuthenticated(true);
  };

  const ProjectDetailsWrapper: React.FC = () => {
    const { slug } = useParams();
    if (!slug) return <Navigate to="/projects" replace />;
    const project = projects.find(p => p.slug === slug);
    if (!project) return <Navigate to="/projects" replace />;
    return (
      <ProjectDetails
        project={project}
        onBack={() => navigate('/projects')}
        onSubmitInquiry={handleSubmitInquiry}
      />
    );
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home projects={projects} />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
        <Route path="/projects/:slug" element={<ProjectDetailsWrapper />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin-login" element={<AdminLogin onLoginSuccess={handleAdminLoginSuccess} />} />
        <Route path="/admin" element={
          <ProtectedRoute isAuthenticated={isAdminAuthenticated}>
            <Admin projects={projects} setProjects={setProjects} inquiries={inquiries} />
          </ProtectedRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
