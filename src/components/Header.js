import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import {Container} from 'react-bootstrap'

function Header() {
  return (
    <header >
      <Jumbotron className="header">
        <Container >
          <div className="text-center glow"   >  
            <div >
              <h1 className="header-text"><span>What Dog Am I?</span></h1>
            </div>

            <div>
              <img  
                className="shadow glow hover header-img"
                src="https://vetstreet.brightspotcdn.com/dims4/default/871fdd9/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F30%2Fee8ec09e8e11e0a2380050568d634f%2Ffile%2Fboston-terrier-1-062411.jpg" 
                alt="" 
              />
            </div>

            <div>
              <h1 className="header-bottom-text"><span>Take this quiz to find out!</span></h1>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </header>
  )
}

export default Header;