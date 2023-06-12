import { Button, Col, Container, Row } from "react-bootstrap";

const Intro = (props) => {
  return (
    <div className="intro">
      <Container className="text-white text-end d-flex justify-content-end  ">
        <Row>
          <Col>
            <div className="title">{props.title1} </div>
            <div className="title">{props.title2} </div>
            <div className="title2">{props.title3}</div>
            <div className="introButton mt-4 text-center"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
