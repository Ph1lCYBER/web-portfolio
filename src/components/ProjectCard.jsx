import { Card, Button, Col, Badge } from 'react-bootstrap';

const ProjectCard = ({ title, description, techStack, projectUrl }) => {
  return (
    <Col md={6} lg={4} className="mb-4 d-flex">
      <Card className="project-card shadow-lg border-0 w-100 text-white">
        <Card.Body className="d-flex flex-column p-4">
          <Card.Title className="fw-bold h3 mb-3">{title}</Card.Title>
          
          <Card.Text className="flex-grow-1" style={{color: '#a0a0a0'}}>
            {description}
          </Card.Text>

          <div className="mt-3 mb-4">
            {techStack && techStack.split(',').map((tech, index) => (
              <Badge key={index} bg="transparent" className="border border-secondary me-2 text-muted fw-normal">
                {tech.trim()}
              </Badge>
            ))}
          </div>

          <Button 
            variant="primary" 
            href={projectUrl} 
            className="mt-auto align-self-start"
            target="_blank"
          >
            Read More
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;