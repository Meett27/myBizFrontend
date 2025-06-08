import React from 'react';
import { Container } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
  return (
    <footer className="app-footer ">
            <Container fluid className='footer-text'>
                <p className="mb-0">&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
            </Container>
        </footer>
  );
};

export default Footer;
