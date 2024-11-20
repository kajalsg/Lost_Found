// import React,{useState,useEffect} from 'react'
// import axios from 'axios';
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';

// const Found = () => {
//   const [name,setName]=useState("");
//   const [mobile,setMobile]=useState("");
//   const [email,setEmail]=useState("");
//   const [product_name,setProductName]=useState("");
//   const [place,setPlace]=useState("");
//   const [data,setData]=useState([]);
//   const [updatdata,setUpdate]=useState('');
  
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);


//   useEffect(()=>{
//     getData();
//   },[])

//   const getData=()=>{
//     axios.get('http://localhost:4050/findall')
//     .then((res)=>{
//       setData(res.data);
//     })
//     .catch((err)=>{
//       console.log(err);
//     })
//   }

//   //Delete
//   const deleteData = (id)=>{
//     axios.delete(`http://localhost:4050/delete/${id}`)
//     .then(res=>{
//       console.log('user Deleted',res.data)
//       getData()
//     })
//     .catch(error=>{
//       console.log('Deleted Error',error);
//     })
//   }

//   //Update
//   const updateData=(id)=>{
//     const Udata={
//       name:name,
//       mobile:mobile,
//       email:email,
//       product_name:product_name,
//       place:place
//     }
//     axios.put(`http://localhost:4050/update/${id}`,Udata)
//     .then((res)=>{
//       console.log("user data updated:",res.data);
//       getData();
//       setShow(false);
//     })
//     .catch((err)=>{
//       console.log("Error:",err)
//     })
//   }

//   return (
//     <div>
//         <h1 style={{textAlign:"center", color:"black"}}>Catalogue</h1>
//         <br />
//       <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Mobile</th>
//               <th>Email</th>
//               <th>Product Name</th>
//               <th>Place</th>
//               <td>Action</td>
//            </tr>
//          </thead>
//           <tbody>
//             {
//                 data.map((item)=>{
//                   return(
//                     <tr>
//                       <td>{item.name}</td>
//                       <td>{item.mobile}</td>
//                       <td>{item.email}</td>
//                       <td>{item.product_name}</td>
//                       <td>{item.place}</td>
//                       <td>
//                         <Button className='btn btn-warning' onClick={()=>{setUpdate(item);handleShow()}}>Update</Button>
//                         <Button className='btn btn-danger' onClick={()=>deleteData(item._id)}>Delete</Button>
//                       </td>
//                     </tr>

//                   )
//                 })
//             }
//           </tbody>
//       </Table>


// -
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Update Form</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form>
//         <Table>
//             <tr>
//                 <td>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Enter the Name:</Form.Label>
//                     <Form.Control type="text" placeholder={updateData.name} onChange={(n)=>{setName(n.target.value)}} />
//                 </Form.Group>
//                 </td>
//             </tr>
//             <tr>
//                 <td>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Mobile No:</Form.Label>
//                     <Form.Control type="tel" placeholder={updateData.mobile} onChange={(m)=>{setMobile(m.target.value)}}/>
//                 </Form.Group>
//                 </td>
//             </tr>
//             <tr>
//                 <td>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control type="email" placeholder={updateData.email} onChange={(e)=>{setEmail(e.target.value)}} />
//                 </Form.Group>
//                 </td>
//             </tr>
//             <tr>
//                 <td>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Enter the Product Name:</Form.Label>
//                     <Form.Control type="text" placeholder={updateData.product_name} onChange={(p)=>{setProductName(p.target.value)}} />
//                 </Form.Group>
//                 </td>
//             </tr>
//             <tr>
//                 <td>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Place:</Form.Label>
//                     <Form.Control type="text" placeholder={updateData.place} onChange={(l)=>{setPlace(l.target.value)}} />
//                 </Form.Group>
//                 </td>
//             </tr>

//         </Table>
//         </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={()=>updateData(updatdata._id)}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   )
// }

// export default Found

import React,{useState} from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Found = () => {
    const [name,setName]=useState("");
    const [mobile,setMobile]=useState("");
    const [email,setEmail]=useState("");
    const [product_name,setProductName]=useState("");
    const [place,setPlace]=useState("");
    const[validated,setValidated]=useState(false);

    const handleSubmit =()=>{
        const userData={
            name:name,
            mobile:mobile,
            email:email,
            product_name:product_name,
            place:place
        }
        axios.post(`http://localhost:4050/users`,userData)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
        setValidated(true);
        }
  return (
    <div>
        <h1 style={{textAlign:"center", color:"black",margin:5}}>Holder Information</h1>
        <br />
        <Form noValidated validated={validated} onSubmit={handleSubmit}>
        <Table>
            <tr>
                <td>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{color:"black"}}>Enter the Name:</Form.Label>
                    <Form.Control type="text" required value={name} onChange={(n)=>{setName(n.target.value)}} />
                </Form.Group>
                </td>
            </tr>
            <tr>
                <td>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{color:"black"}}>Mobile No:</Form.Label>
                    <Form.Control type="tel" required value={mobile} onChange={(m)=>{setMobile(m.target.value)}}/>
                </Form.Group>
                </td>
            </tr>
            <tr>
                <td>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{color:"black"}}>Email address</Form.Label>
                    <Form.Control type="email" required placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                </Form.Group>
                </td>
            </tr>
            <tr>
                <td>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{color:"black"}}>Enter the Product Name:</Form.Label>
                    <Form.Control type="text" required value={product_name} onChange={(p)=>{setProductName(p.target.value)}} />
                </Form.Group>
                </td>
            </tr>
            <tr>
                <td>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{color:"black"}}>Place:</Form.Label>
                    <Form.Control type="text" required value={place} onChange={(l)=>{setPlace(l.target.value)}} />
                </Form.Group>
                </td>
            </tr>
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Table>
        </Form>
    </div>
  )
}

export default Found;