import React from 'react';
import my from './Assets/my.jpg';
import disha from './Assets/disha.jpg'
import anushka from './Assets/anushka.jpg'
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

export const Contact = () => {
  return (
    <div>
      <br/>
      <br/>
      <div className="Container">
        <div className="row">
          <div className="col-md-4">
              <center><img src={disha} alt="Disha" height="250" width="250"/></center>
          </div>
          <div className='col-md-4'>
          <Form>
          <Table cellSpacing={20} cellPadding={8}>
            <tr>
                <td style={{color:'black'}}>Name:</td>
                <td style={{color:'black'}}>Disha Dnyaneshwar Ghuge</td>
            </tr>
            <tr>
                <td style={{color:'black'}}>Contact No.</td>
                <td style={{color:'black'}}>8805181489</td>
            </tr>
            <tr>
                <td style={{color:'black'}}>Email:-</td>
                <td style={{color:'black'}}>dishaghuge14@gmail.com</td>
            </tr>
            <tr>
                <td style={{color:'black'}}>Address</td>
                <td style={{color:'black'}}>Sangamner</td>
            </tr>
          </Table>
          </Form>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <div className="Container">
        <div className="row">
          <div className="col-md-4">
              <center><img src={anushka} alt="Anushka" height="250" width="250"/></center>
          </div>
          <div className='col-md-4'>
          <Form>
          <Table cellSpacing={20} cellPadding={8}>
            <tr>
                <td style={{color:'black'}}>Name:</td>
                <td style={{color:'black'}}>Anushka Sunil Rokade</td>
            </tr>
            <tr>
                <td style={{color:'black'}}>Contact No.</td>
                <td style={{color:'black'}}>8605304100</td>
            </tr>
            <tr>
                <td style={{color:'black'}}>Email:-</td>
                <td style={{color:'black'}}>anushkarokade@gmail.com</td>
            </tr>
            <tr>
                <td style={{color:'black'}}>Address</td>
                <td style={{color:'black'}}>Kasar Pimpalgoan</td>
            </tr>
          </Table>
          </Form>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <div className="Container">
        <div className="row">
          <div className="col-md-4">
              <center><img src={my} alt="Kajal" height="250" width="250"/></center>
          </div>
          <div className='col-md-4'>
          <Form>
          <Table cellSpacing={20} cellPadding={8}>
            <tr>
                <td style={{color:'black'}}>Name:</td>
                <td style={{color:'black'}}>Kajal Subhash Ghodake</td>
            </tr>
            <tr>
                <td style={{color:'black'}}>Contact No.</td>
                <td style={{color:'black'}}>7020959999</td>
            </tr>
            <tr>
                <td style={{color:'black'}}>Email:-</td>
                <td style={{color:'black'}}>kajal@gmail.com</td>
            </tr>
            <tr>
                <td style={{color:'black'}}>Address</td>
                <td style={{color:'black'}}>Kasar Pimpalgoan</td>
            </tr>
          </Table>
          </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact;