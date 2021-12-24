import React from "react";
import {Container, Row, Col} from "react-bootstrap";


function Main() {
  return (
    <div >
        <Container >
            <Row className="main-content">
                <Col>
                <img className="" 
                src="https://media-exp1.licdn.com/dms/image/C4D03AQGn86FG0dYz1g/profile-displayphoto-shrink_200_200/0/1553778295833?e=1645660800&v=beta&t=vp3fqv9vyKghJXRKh7DsglnNzSESG0Gbg_FO4VrmVls" />

                </Col>
                <Col>
                <h1>Guillermo Fragachan</h1>
                <h6>Full Stack Web Developer</h6>

                </Col>
            </Row>

            <Row>
                <Col>
                <p>
                I am a Full Stack Web Developer with a background in Business Administration.
                </p>


                </Col>

            </Row>
        </Container>

      
    </div>
  );
}

export default Main;