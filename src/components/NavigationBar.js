import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark" className="bg-dark">
        <Container>
          <Navbar.Brand>Sehat.Ku</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Beranda</Nav.Link>
            <Nav.Link href="/list-docter">Dokter</Nav.Link>
            <Nav.Link href="/consult-service">Kolsultasi</Nav.Link>
            <Nav.Link href="/about">Tentang</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
