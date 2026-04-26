import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import ProjectCard from './components/ProjectCard';
import './App.css';
import profileImage from './assets/profilee.png';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function App() {
  // 1. Form State Logic
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ show: false, type: '', msg: '' });

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission via AJAX
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ensure this URL matches your XAMPP folder name
      const response = await axios.post('/api/process.php', formData);
      
      setStatus({ 
        show: true, 
        type: 'success', 
        msg: 'Quality Dre!.....' 
      });
      setFormData({ name: '', email: '', message: '' }); // Clear form on success
    } catch (error) {
      setStatus({ 
        show: true, 
        type: 'danger', 
        msg: 'Error: Haan ko py inupdate PHPmailer DRE!git add .' 
      });
    }
  };
  

  const myProjects = [
    {
      id: 1,
      title: "Cloud Wiser Seminar",
      description: "Advancing sustainable cloud computing through green computing and cost optimization.",
      techStack: "Cloud Computing, Management",
      projectUrl: "#"
    },
    {
      id: 2,
      title: "Certificate Automation",
      description: "Automated delivery system using Google Apps Script and Gmail API.",
      techStack: "Google Apps Script, JS",
      projectUrl: "#"
    },
    {
      id: 3,
      title: "Roblox Deployment",
      description: "Troubleshooting and managing drive-related installation errors for software updates.",
      techStack: "Tech Support, Windows",
      projectUrl: "#"
    }
  ];

  return (
    <div className="App">
      <NavigationBar />

      <Container className="mt-5">
        <header className="py-5 my-5">
          <Row className="align-items-center">
            
            {/* Left Column: Text */}
            <Col lg={7} className="text-left hero-text-area">
              <h1 className="display-4 fw-bold">Hello, my name is <br /> <span>PHILIP MICO</span></h1>
              <p className="lead" style={{color: '#a0a0a0'}}>I am a Technical Support Specialist & Web Developer.</p>
              <Button variant="primary" size="lg" className="mt-3" href="#contact">Hire Me</Button>
            </Col>
            
            {/* Right Column: Image */}
            <Col lg={5} className="hero-image-area text-center">
              <img 
                src={profileImage} 
                alt="Philip Mico Portrait" 
                className="img-fluid rounded hero-portrait" 
                style={{ maxHeight: '550px', objectFit: 'cover' }}
              />
            </Col>

          </Row>
        </header>

        {/* Skills Section */}
        <section id="skills" className="py-5 border-top">
            <h2 className="text-center mb-4">Technical Expertise</h2>
            <Row className="text-center px-3">
              <Col md={4} className="mb-3">
                <div className="p-4 bg-white rounded shadow-sm h-100">
                  <h4 className="text-primary">Support</h4>
                  <p className="text-muted">Troubleshooting, Hardware, & Software maintenance.</p>
                </div>
              </Col>
              <Col md={4} className="mb-3">
                <div className="p-4 bg-white rounded shadow-sm h-100">
                  <h4 className="text-primary">Development</h4>
                  <p className="text-muted">React, PHP, JavaScript, and Automation Scripts.</p>
                </div>
              </Col>
              <Col md={4} className="mb-3">
                <div className="p-4 bg-white rounded shadow-sm h-100">
                  <h4 className="text-primary">Design</h4>
                  <p className="text-muted">Graphic Design, Video Editing, & AI Image Manipulation.</p>
                </div>
              </Col>
            </Row>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-5 border-top">
          <h2 className="text-center mb-4">Featured Projects</h2>
          <Row>
            {myProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </Row>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-5 border-top">
            <h2 className="text-center mb-4">Contact Me</h2>
            <Row className="justify-content-center">
              <Col md={6}>
                
                {/* Alert for Success/Error */}
                {status.show && (
                  <Alert variant={status.type} onClose={() => setStatus({show: false})} dismissible>
                    {status.msg}
                  </Alert>
                )}

                <Form className="p-4 shadow-sm rounded bg-white border" onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="name"
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                      type="email" 
                      name="email"
                      placeholder="name@example.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      name="message"
                      rows={3} 
                      placeholder="How can I help you?" 
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button variant="primary" className="w-100 py-2 fw-bold" type="submit">
                    Send Message
                  </Button>
                </Form>
              </Col>
            </Row>
        </section>
      </Container>
      
      <footer className="text-center py-4 text-muted">
        <small>&copy; 2026 | Built with React & Vite By PHILIP MICO</small>
      </footer>
    </div>
  );
}

export default App;