import React from 'react'
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Login = () => {
  return (
    <div>
      <h1 style={{textAlign:"center", color:"black",margin:5}}>Login Here</h1>
      <hr/>
      <br />
      <Form style={{padding:"100",margin:"100"}}>
        <Table>
            <tr>
                <td>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label style={{color:"black"}}>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" required/>
                </Form.Group>
                </td>
            </tr>
            <tr>
                <td>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{color:"black"}}>Password:</Form.Label>
                    <Form.Control type="password" required />
                </Form.Group>
                </td>
            </tr>
            <Button variant="primary" type="login">
            Login
            </Button>
        </Table>
        </Form>
    </div>
  )
}

export default Login