import { Card, Col, Form, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import MainLayout from '../layouts/MainLayout'

import { signin } from '../apis'
export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onClick = () => {
    console.log(username, password)
    signin(username, password)
  }

  return (
    <MainLayout>
      <Row className='justify-content-center'>
        <Col lg={6} md={8}>
          <Card>
            <Card.Body>
              <h3 className='text-center'>
                <b>Login</b>
              </h3>

              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" onClick={onClick}>Sign in</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </MainLayout>
  )
}
