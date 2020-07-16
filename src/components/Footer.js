import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import {Container} from 'react-bootstrap'

function Footer() {
  return (
    <div>
        <Jumbotron style={{ backgroundColor: "#0e4a4d", color: "#e8ffa1", bottom: 0,}}>
          <Container>
          <div className="text-center">

            <div >
              <img  className="shadow" src="../dog.png" alt=""
                  style={{borderRadius: "50%", width: "500px", height: "500px" }}
                  />
            </div>

            <div className="glow">
              <h1 style={{fontSize: "500%", fontWeight: "bold", letterSpacing: "5px"}} >Bow Wow Yourself Out</h1>
            </div>
          </div>

          </Container>
        </Jumbotron>
    </div>
    );
}

export default Footer;