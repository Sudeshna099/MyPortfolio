import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Portfolio.css';
import eventImage from './image/event.jpeg';
import homeImage from './image/homeA.jpeg';

const Portfolio = () => {
  // State to manage description visibility
  const [showFullDescEvent, setShowFullDescEvent] = useState(false);
  const [showFullDescTask, setShowFullDescTask] = useState(false);

  // Toggle function for descriptions
  const toggleDescriptionEvent = () => setShowFullDescEvent(!showFullDescEvent);
  const toggleDescriptionTask = () => setShowFullDescTask(!showFullDescTask);

  return (
    <div className="portfolio-container">
      <h2>My Projects</h2>
      <p>A showcase of my recent work and accomplishments.</p>
      <div className="project-grid">
        {/* Card 1 */}
        <Card style={{ width: '20rem' }} className="project-card">
          <Card.Img variant="top" src={eventImage} alt="Project One Image" />
          <Card.Body>
            <Card.Title>React Event Management App</Card.Title>
            <Card.Text>
              {showFullDescEvent
                ? "A Responsive Event Management Platform that allows users to schedule and manage appointments for various events such as conferences, workshops, and seminars.. The platform is including user registration and authentication, an event catalogue, booking management, and notifications. The frontend is built using React, HTML5, CSS3, and Bootstrap, while the backend is of .NET Core with a microservices architecture and RESTful API implementation.":
                "A Responsive Event Management Platform that allows users to schedule and manage appointments for various events such as conferences, workshops, and seminars."}
            </Card.Text>
            <button onClick={toggleDescriptionEvent} className="btn btn-primary">
              {showFullDescEvent ? 'Show Less' : 'See More'}
            </button>
          </Card.Body>
        </Card>

        {/* Card 2 */}
        <Card style={{ width: '20rem' }} className="project-card">
          <Card.Img variant="top" src={homeImage} alt="Project Two Image" />
          <Card.Body>
            <Card.Title>React Smart Home Automation</Card.Title>
            <Card.Text>
              {showFullDescTask
                ? "Smart Home Automation System to allowing users to control smart Home devices & Monitoring their status & get notifications of the changes."
                : "Smart Home Automation System to allowing users to control smart Home devices"}
            </Card.Text>
            <button onClick={toggleDescriptionTask} className="btn btn-primary">
              {showFullDescTask ? 'Show Less' : 'See More'}
            </button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Portfolio;
