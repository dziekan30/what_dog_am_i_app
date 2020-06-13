import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import {Container} from 'react-bootstrap'

function Header() {
  return (
    <header>
      <Jumbotron  style={{ backgroundColor: "#0e4a4d", color: "#e8ffa1"}}>
        <Container >
          <div class="text-center glow"   >  
            <div >
              <h1 style={{ fontSize: "500%", fontWeight: "bold", marginBottom: 50, letterSpacing: "10px" }}>What Dog Am I?</h1>
            </div>

            <div>
              <img  class="shadow glow" style={{ margin: 30, borderRadius: "50%", width: "500px", height: "500px" }}
                    src="https://vetstreet.brightspotcdn.com/dims4/default/871fdd9/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F30%2Fee8ec09e8e11e0a2380050568d634f%2Ffile%2Fboston-terrier-1-062411.jpg" alt="" />
            </div>

            <div>
              <h1 style={{fontSize: "400%", letterSpacing: "5px", fontWeight: "bold", marginTop: 50, marginBottom: 90}} >Take this quiz to find out!</h1>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </header>
    )
}

export default Header;