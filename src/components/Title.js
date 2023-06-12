import { Container, Row } from "react-bootstrap";

const Title = (props) => {
  return (
    <Container>
      <Row className="text-center">
        <h1>{props.title}</h1>
        <p>{props.describe}</p>
      </Row>
    </Container>
  );
};

export default Title;
