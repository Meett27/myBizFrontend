import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import './header.css';

export default function AppHeader() {
    return (
        <Navbar bg="light" expand="lg" className="mb-4 border-bottom app-header">
            <Container fluid>
                {/* <Navbar.Brand href="#">Page Title</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                {/* <Navbar.Collapse id="basic-navbar-nav">
                    <Form className="d-flex ms-auto">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                     <Nav>
                        <Nav.Link href="#notifications">
                           <i className="fas fa-bell"></i>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/user-profile">
                           <i className="fas fa-user"></i>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse> */}
            </Container>
        </Navbar>
    );
};
