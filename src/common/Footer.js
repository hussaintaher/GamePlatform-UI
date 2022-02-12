import React from 'react';
import icon1 from '../icons/Group 5.svg'
import icon2 from '../icons/Group 9.svg'
import icon3 from '../icons/Group 10.svg'
import icon4 from '../icons/Group 11.svg'

import { Col, Container, Row} from 'react-bootstrap';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
      <>
      {/* News Section */}
      <div className="news_section">
      <Container style={{}}>
        <Row>
          <Col className="py-4">
            <h5>Lorem Ipsum</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </Col>
        </Row>
        <Row style={{backgroundColor: '#1C140F', borderRadius: '20px'}}>
          <Col className="py-4 px-5 align-items-center">
          <h5>Stay in the loop</h5>
          <p>Subscribe to receive the latest news and updates about TDA.
          We promise not to spam you! </p>
          </Col>
          
          <Col className="d-flex justify-content-center align-items-center">
            <div className='d-flex' style={{backgroundColor: 'white', borderRadius: '9px', width: '76%', height: '39px', overflow: 'hidden', padding: '2px 2px'}}>
              <input className="inpField" style={{outline: 'none',margin: '0', border: 'none', height: '100%', width: '70%', paddingLeft: '20px'}} type="text" placeholder='Enter email Address' />
              <a className='btn' style={{color: 'white', backgroundColor: '#DC7000', width: '28%'}} href={'#'}>Continue</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    {/* Footer Section */}
    <Container style={{color: 'white', padding: '0 100px'}}>
      <Row>
        <Col className="col-12 col-sm-3 mb-3">
          <Link style={{color:'white', fontSize: '17px'}} to="/home">LOGO</Link>
          <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className="mb-2">@Logo</p>
        </Col>
        <Col className="col-12 col-sm-3 mb-3">
          <Link style={{color:'white', fontSize: '17px'}} className="mb-2" to="/about">About us</Link>
          <ul>
            <li>Zeux</li>
            <li>Portfolio</li>
            <li>Careers</li>
            <li>Contact us</li>
          </ul>
        </Col>
        <Col className="col-12 col-sm-3 mb-3">
          <Link style={{marginBottom: '10px',color:'white', fontSize: '17px'}} to="/contact">Contact us</Link>
          <p className="mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className="mb-3">+908 89097 890</p>
        </Col>
        <Col className="col-12 col-sm-3 d-flex flex-end align-items-end mb-3">
            <img src={icon1} width="50px"  alt={'img'}/>
            <img src={icon2} width="50px"  alt={'img'}/>
            <img src={icon3} width="50px"  alt={'img'}/>
            <img src={icon4} width="50px"  alt={'img'}/>
        </Col>
      </Row>
      <hr style={{color: 'white'}}/>
      <Row>
        <Col className='col' style={{textAlign: 'center', padding: '20px 0', color: 'white'}}>
          <h7>Copyright ® 2021 Lorem All rights Rcerved</h7>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Footer;
