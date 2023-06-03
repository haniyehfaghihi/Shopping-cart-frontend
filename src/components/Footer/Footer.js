import React from 'react'
import {Container , Row , Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <footer className="py-3" style={ {background: "blueviolet"}}>
        <Container >
          <Row>
            <Col className="text-center text-white">footer</Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer