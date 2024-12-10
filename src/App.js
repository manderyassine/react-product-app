import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const firstName = 'Yassine';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <div className="mode-toggle">
        <Form.Check 
          type="switch"
          id="dark-mode-switch"
          label={darkMode ? "Light Mode" : "Dark Mode"}
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          className="dark-mode-switch"
        />
      </div>
      <Container className="mt-5">
        <Card className="product-card shadow-lg">
          <Card.Body>
            <Row>
              <Col md={6} className="text-center">
                <Image />
              </Col>
              <Col md={6} className="product-details">
                <Name />
                <Price />
                <Description />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        
        <div className="greeting mt-3 text-center floating-element">
          {firstName ? (
            <>
              <h3>Hello, {firstName}!</h3>
              {firstName && <img 
                src={`https://ui-avatars.com/api/?name=${firstName}&background=random`} 
                alt={`Avatar for ${firstName}`} 
                className="user-avatar" 
                style={{borderRadius: '50%', width: '100px', height: '100px'}} 
              />}
            </>
          ) : (
            <h3>Hello, there!</h3>
          )}
        </div>
      </Container>
      <div id="particles-js" className="particles-background"></div>
    </div>
  );
}

export default App;
