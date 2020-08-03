import React from 'react'
import {Jumbotron, Container} from 'react-bootstrap'

function Footer() {
  return (
    <div>
        <Jumbotron className="footer">
          <Container>
            <div className="text-center">
              <div >
                <img  
                  className="shadow hover footer-img" 
                  src="../dog.png" 
                  alt=""
                />
              </div>
              <div className="glow">
                <h1 className="footer-text"><span>Bow Wow Yourself Out</span></h1>
              </div>
            </div>
          </Container>
        </Jumbotron>
    </div>
  );
}

export default Footer;