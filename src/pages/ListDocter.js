import Dokter from "../components/Dokter";
import { Container, Row } from "react-bootstrap";
import { dataDokter } from "../data/dataDokter";
import { useState } from "react";

const ListDocter = () => {
  const [getDataDokter, setDataDokter] = useState("");
  const changeDataDokter = () => {
    setDataDokter(
      <Row>
        {dataDokter.map((data) => {
          return <Dokter key={data.id} name={data.name} imgSrc={data.img} detail={data.detail} alt={data.alt} />;
        })}
      </Row>
    );
  };

  return (
    <>
      <Container>
        <h1 className="text-black">DOKTER</h1>
        {getDataDokter}
        <button onClick={() => changeDataDokter()}>Lihat Dokter Lainnya</button>
      </Container>
    </>
  );
};

export default ListDocter;
