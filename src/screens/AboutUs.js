import React from 'react';
import '../styles/aboutUs.css';
import { Col, Container, Row} from 'react-bootstrap';
import img1 from '../images/Rectangle 6.png'
const AboutUs = () => {
  return (
    <div style={{color: 'white'}}>

      {/* Header Section */}
      <div className='header_section'>
        <Row>
          <Col sm className="mb-5 mb-md-0">
            <div className="mx-auto heading_box" style={{width: '392px', maxWidth: '100%'}}>
              <h6>Home > <span style={{color:'#E47500'}}>About us</span></h6>
              <h1>Lorem Ipsum is simply dummy text of the printing and.</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              <a className='btn px-4 py-2' style={{backgroundColor: 'rgba(250, 131, 5, 1)', borderRadius: '20px'}}>Get in touch -></a>
            </div>  
          </Col>

          <Col sm>
            <div style={{overflow: 'hidden', position: 'relative', marginLeft: 'auto', minWidth: '100%'}}>
              <img style={{position:'absolute', maxWidth:'100%', height:'auto', top:'0px', marginLeft: 'auto'}} src={img1} alt={'img'} />
              <div style={{position: 'absolute', bottom: '0px', left: '0px', width: '200px', height: '100px', display: 'flex'}}>
                <div style={{width:'33.333'}}>dfsd</div>
                <div style={{width:'33.333'}}>dfsd</div>
                <div style={{width:'33.333'}}>dfsd</div>
              </div>
            </div>    
            
                      
          </Col>
        </Row>
      </div>


      {/* Header Section */}
      {/* Header Section */}
      
    </div>
  );
};

export default AboutUs;

