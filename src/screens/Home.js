import React from 'react';
import {Link} from "react-router-dom";
import { Col, Container, Row} from 'react-bootstrap';
// icons
import joyStick from '../icons/joyStick.svg'
import cry from '../icons/cry 1.svg'
import unity from '../icons/unity 1.svg'
import unreal from '../icons/unreal 1.svg'
import fire from '../icons/fire.svg'
import group from '../icons/Group 21.svg'
import arrow from '../icons/Vector.svg'
import smartPhone from '../icons/smartphone (2) 1.svg'

import icon1 from '../icons/Group 5.svg'
import icon2 from '../icons/Group 9.svg'
import icon3 from '../icons/Group 10.svg'
import icon4 from '../icons/Group 11.svg'
// images
import pic2 from '../images/Rectangle 24.png'
import pic3 from '../images/Rectangle 25.png'
import pic4 from '../images/Rectangle 26.png'
import pic5 from '../images/Rectangle 23.png'
import spiderman from '../images/Rectangle.jpg'
import banner from '../images/banner.png'
import pic15 from '../images/Rectangle 15.png'
import pic16 from '../images/Rectangle 16.png'
import pic17 from '../images/Rectangle 17.png'
import pic18 from '../images/Rectangle 18.png'
import pic19 from '../images/Rectangle 19.png'
import pic20 from '../images/Rectangle 20.png'



        //<img className="joyStick_img" src={joyStick} width="400px" height={'400px'} />

const Home = () => {
  return (
    <div>
        <div className='intro_section'>
          <Container>
            <Row>
              <Col className="col-12 col-sm-12 col-md-6 intro_heading">
                    <h6 style={{color: 'rgb(250, 144, 33)'}}>3D game Dev</h6>
                    <h1>Work that we produce for our clients</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                    <a class="btn btn_intro" href="#" role="button">Get more details</a>
              </Col>
              <Col className="col-12 col-md-6 d-none d-md-none d-lg-block" style={{position: 'relative'}}>
                  <img style={{position: 'absolute', top:'-105px', left: '136px', width: '68%'}} src={joyStick} width="70px"  />
                  <img className="cry_img" src={cry} width="70px"  />
                  <img className="unity_img" src={unity} width="70px"  />
                  <img className="unreal_img" src={unreal} width="50px"  />
              </Col>
            </Row>
          </Container>
        </div>

          

        {/* Trending Section */}
        <div id='trending_section'>
          <div className='trending_heading'>
            <h4>Currently Trending Games</h4>
            <a className='btn' href={'#'} style={{color:'white'}}>SEE ALL</a>
          </div>

          <div className='trending_content'>
            <div className='trending_box'>
              <div className='trending_img'>
                <img src={pic2} width="100%" alt={'img'}/>
              </div>
              <div className='trending_followers'>
                <img src={fire} alt={'img'}/>
                <h6 style={{marginLeft: '5px', color: 'white'}}>40 Followers</h6>
              </div>
            </div>

            <div className='trending_box'>
              <div className='trending_img'>
                <img src={pic3} width="100%" alt={'img'}/>
              </div>
              <div className='trending_followers'>
                <img src={fire} alt={'img'}/>
                <h6 style={{marginLeft: '5px', color: 'white'}}>40 Followers</h6>
              </div>
            </div>

            <div className='trending_box'>
              <div className='trending_img'>
                <img src={pic4} width="100%" alt={'img'}/>
              </div>
              <div className='trending_followers'>
                <img src={fire} alt={'img'}/>
                <h6 style={{marginLeft: '5px', color: 'white'}}>40 Followers</h6>
              </div>
            </div>

            <div className='trending_box'>
              <div className='trending_img'>
                <img src={pic5} width="100%" alt={'img'}/>
              </div>
              <div className='trending_followers'>
                <img src={fire} alt={'img'}/>
                <h6 style={{marginLeft: '5px', color: 'white'}}>40 Followers</h6>
              </div>
            </div>

            <div className='trending_box'>
              <div className='trending_img'>
                <img src={pic4} width="100%" alt={'img'}/>
              </div>
              <div className='trending_followers'>
                <img src={fire} alt={'img'}/>
                <h6 style={{marginLeft: '5px', color: 'white'}}>40 Followers</h6>
              </div>
            </div>

          </div>

          {/* qoutation Section */}
          <div className='qoutation_section'>
            <p style={{fontSize: '30px', color: 'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>

          {/* spiderman Section */}
          <div className='spiderman_section d-flex'>
            <div className='spiderman_content' style={{color: 'white'}}>
              <h4>Lorem Ipsum</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>  

            <div style={{position: 'relative', overflow: 'hidden', width:'100%'}} className="d-none d-md-block">
              <img style={{right: '0px', top: '81px', position: 'absolute'}} src={group}  alt={'img'}/>
            </div>
          </div>
          {/* spiderman pic section */}
          <div style={{height: '553px', width: '100%'}}>
              <img style={{width: '100%'}} src={spiderman}  alt={'img'}/>
          </div>
        </div>   

        {/* services section */}
          <div style={{height: '900px', width: '100%', position: 'relative', overflow: 'hidden', color: 'white'}}>
            <div style={{width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.65)', height: '100%', position: 'absolute', zIndex: '1', top:'0px'}} />
            <img style={{width: '100%', position: 'absolute', top: '-200px', zIndex: '0'}} src={banner}  alt={'img'}/>
            
            <div style={{position: 'absolute', height: '100%', width: '900px', zIndex: 2, left: '50%', transform: 'translate(-50%, 0)', padding: '70px 0 0 0', textAlign: 'center'}}>
              <h1 style={{fontSize: '31px', marginBottom: '34px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
              <p style={{fontSize: '17px', marginBottom: '5rem'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              
              <div className="d-flex justify-content-center" style={{flexWrap: 'wrap'}}> 
                <div className="skill_box" style={{width: '200px', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <div className='skill_icon' style={{width: '80px', height: '80px', borderRadius: '64%', backgroundColor:'white', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={smartPhone} width="50%" alt={'img'}/>
                  </div>
                  <h6 style={{fontSize: '15px'}}>Mobile Game Development</h6>
                  <div className='skill_icon'>
                    <img src={arrow}  alt={'img'}/>
                  </div>
                </div>    

                <div className="skill_box" style={{marginLeft: '78px',width: '200px', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <div className='skill_icon' style={{width: '80px', height: '80px', borderRadius: '64%', backgroundColor:'white', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={smartPhone} width="50%" alt={'img'}/>
                  </div>
                  <h6 style={{fontSize: '15px'}}>PS4 Game Development</h6>
                  <div className='skill_icon'>
                    <img src={arrow}  alt={'img'}/>
                  </div>
                </div> 

                <div className="skill_box" style={{marginLeft: '78px',width: '200px', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <div className='skill_icon' style={{width: '80px', height: '80px', borderRadius: '64%', backgroundColor:'white', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={smartPhone} width="50%" alt={'img'}/>
                  </div>
                  <h6 style={{fontSize: '15px'}}>AR/VR Solutions</h6>
                  <div className='skill_icon'>
                    <img src={arrow}  alt={'img'}/>
                  </div>
                </div> 

                <div className="skill_box" style={{marginLeft: '78px',width: '200px', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <div className='skill_icon' style={{width: '80px', height: '80px', borderRadius: '64%', backgroundColor:'white', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={smartPhone} width="50%" alt={'img'}/>
                  </div>
                  <h6 style={{fontSize: '15px'}}>AR/ VR design</h6>
                  <div className='skill_icon'>
                    <img src={arrow}  alt={'img'}/>
                  </div>
                </div> 

                <div className="skill_box" style={{marginLeft: '78px',width: '200px', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <div className='skill_icon' style={{width: '80px', height: '80px', borderRadius: '64%', backgroundColor:'white', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={smartPhone} width="50%" alt={'img'}/>
                  </div>
                  <h6 style={{fontSize: '15px'}}>3d Modelings</h6>
                  <div className='skill_icon'>
                    <img src={arrow}  alt={'img'}/>
                  </div>
                </div> 

              </div>
            </div>
          </div>  

          {/* Recent Project section */}
          <div id='recentProject_section' style={{backgroundColor: 'black', padding: '0 194px'}}>
            
            <div className='recentProject_heading' style={{textAlign: 'center', color: 'white', padding: '0 84px'}}>
              <h1 style={{marginBottom: '20px'}}>Our Recent Projects</h1>
              <p style={{marginBottom: '55px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>

            <div className='recentProject_content' style={{flexWrap: 'wrap', padding: '0 83px'}}>
              <div style={{paddingBottom: '20px', width:'382px', height: '175px', overflow: 'hidden', position: 'relative', borderRadius: '20px'}}>
                <img src={pic15} style={{position: 'absolute', maxWidth: '371px'}} alt={'img'}/>
              </div>
              
              <div style={{paddingBottom: '20px', width:'200px', height: '175px', overflow: 'hidden', position: 'relative', borderRadius: '20px'}}>
                <img src={pic16} style={{position: 'absolute', maxWidth: '300px'}} alt={'img'}/>
              </div>

              <div style={{paddingBottom: '20px', width:'350px', height: '175px', overflow: 'hidden', position: 'relative', borderRadius: '20px'}}>
                <img src={pic17} style={{position: 'absolute', maxWidth: '371px'}} alt={'img'}/>
              </div>

              <div style={{width:'244px', height: '175px', overflow: 'hidden', position: 'relative', borderRadius: '20px'}}>
                <img src={pic19} style={{position: 'absolute', maxWidth: '371px'}} alt={'img'}/>
              </div>

              <div style={{width:'382px', height: '175px', overflow: 'hidden', position: 'relative', borderRadius: '20px'}}>
                <img src={pic20} style={{position: 'absolute', maxWidth: '371px'}} alt={'img'}/>
              </div>

              <div style={{width:'307px', height: '175px', overflow: 'hidden', position: 'relative', borderRadius: '20px'}}>
                <img src={pic18} style={{position: 'absolute', maxWidth: '371px'}} alt={'img'}/>
              </div>
            </div>

            <div className='recentProject_btn' style={{height: '130px', paddingTop: '30px', textAlign: 'center'}}>
              <a className='btn p-3' style={{color: 'white'}} href={'#'}>SEE ALL</a>
            </div>

          </div>
          
          
    </div>
  );
};

export default Home;
