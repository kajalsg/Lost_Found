import React from 'react'
// import All from './All.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';  
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import img from './Assets/laf.jpg'
import img1 from './Assets/laf1.jpg';
import img2 from './Assets/laf2.jpg';


const Home = () => {
  return (
    <div className='p-5'>  
        <Carousel interval={1000}>  
            <Carousel.Item>  
                <img style={{maxHeight:"80vh"}} className="d-block w-100" src={img2}  alt="First slide"/>  
                <Carousel.Caption>  
                <h3>Lost it in School?</h3>  
                <p>We can find it!!!!!</p>  
                </Carousel.Caption>  
            </Carousel.Item>  
            <Carousel.Item>  
                <img style={{maxHeight:"80vh"}} className="d-block w-100" src={img} alt="Second slide" />  
                <Carousel.Caption style={{color:"white"}}>  
                <h3>Lost it in College?</h3>  
                <p>We can find it!!!!!</p>  
                </Carousel.Caption>  
            </Carousel.Item>
            <Carousel.Item>  
                <img style={{maxHeight:"80vh"}} className="d-block w-100" src={img1} alt="Second slide" />  
                <Carousel.Caption style={{color:"black"}}>  
                <h3>Lost it in Workplace?</h3>  
                <p>We can find it!!!!!</p>  
                </Carousel.Caption>  
            </Carousel.Item>  
 
        </Carousel>
    </div>
  )
}



export default Home;
