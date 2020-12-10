import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

import './RegisterForm.scss';

const RegisterForm = () => {
    return (
        <Container className="RegisterForm">
            <h1>REGISTRATION</h1>
            <p>REGISTER BY ENTERING YOUR INFORMATION BELOW ALLOWING US TO CONTACT YOU 
                REGARDING THIS COMPETITION.</p>
            <Form>
                <Form.Group controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group controlId="formGroupPhone">
                    <Form.Label>Mobile Phone</Form.Label>
                    <Form.Control type="tel" />
                </Form.Group>
            </Form>
            <p>*When you provide us with your mobile phone number, you agree that we
                may send you text messages to that phone number. Message and data rates
                may apply.</p>
            <Button size="lg" block>
                Continue
            </Button>
            <p>By registering you agree to our rules, terms, and privacy policy.
                Not all entrants may qualify. If you have any questions, please
                don't hesitate to contact us.</p>
        </Container>
    )
}

export default RegisterForm;
