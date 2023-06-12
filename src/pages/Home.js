import Intro from "../components/Intro";
import Dokter from "../components/Dokter";
import { Container, Row } from "react-bootstrap";
import Title from "../components/Title";
import FaqSection from "../components/FaqSection";
import { dataDokter } from "../data/dataDokter";
import { useState } from "react";

const Home = () => {
  return (
    <>
      
      <div className="myBG">
        <Intro title1="KARENA SEHAT" title2="ADALAH" title3="KEBAHAGIAAN" />
      </div>
      <Title title="DAFTAR DOKTER" describe="Komunikasikan kesehatan anda dengan Dokter terbaik di Indonesia" />
      <Container>
        <Row>
          {dataDokter.map((data) => {
            return <Dokter key={data.id} name={data.name} imgSrc={data.img} detail={data.detail} alt={data.alt} />;
          })}
        </Row>
      </Container>
      <Container>
        <Row>
          <FaqSection />
        </Row>
      </Container>
    </>
  );
};

export default Home;
