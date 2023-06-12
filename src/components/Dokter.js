import { Card, Col, Container, Row } from "react-bootstrap";
import "../style/LandingPage.css";
const Dokter = ({ imgSrc, name, spesialis, detail, alt }) => {
  return (
    <Col md={4} className="imagesWrapper">
      <Card className="bg-dark text-white gambar">
        <Card.Img src={imgSrc} alt={alt} className="images" />
        <Card.Title>{name}</Card.Title>
        <Card.Text>{spesialis}</Card.Text>
        <Card.Text>{detail}</Card.Text>
      </Card>
    </Col>
  );
};

export default Dokter;
