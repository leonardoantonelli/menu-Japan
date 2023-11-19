import { Col, Container, Image, Row } from "react-bootstrap";
const Location = () => {
  return (
    <>
      <Row className="d-flex justify-content-center align-item-center m-4">
        {" "}
        <h4 className=" text-center my-4 title"> I nostri ristoranti: </h4>
        <Col lg={6} className="text-ceter">
          {" "}
          <p className="text-center">
            Abbiamo cinque ristoranti posizionati in punti strategici di Roma,
            nei quartieri in cui la città si anima e prende vita: EUR, Centro
            Storico, Parioli. Inoltre siamo anche a Fregene, una delle più
            celebri località balneari sul litorale laziale. Vieni a provare i
            nostri 6 ristoranti per vivere l’esperienza Daruma al massimo
            livello: sushi di altissima qualità, ambiente confortevole e
            servizio impeccabile. Ti aspettiamo!
          </p>
        </Col>{" "}
      </Row>
      <Row className=" row col d-flex flex-xs-column flex-lg-row mb-4">
        <Col></Col>
        <Col
          xs={10}
          lg={3}
          className="myristo1 overflow-hidden d-bock rounded myborder mx-3 "
        >
          <div className="bg-dark mydim ps-5 mt-5 rounded shadow">
            {" "}
            <h3> Eur </h3>
            <p> Ristorante </p>
            <div className="d-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>{" "}
              <p className=" ms-1">Via Milano</p>
            </div>
          </div>
        </Col>
        <Col
          xs={10}
          lg={3}
          className="myristo3 overflow-hidden d-bock rounded myborder mx-3 "
        >
          <div className="bg-dark mydim ps-5 mt-5 rounded shadow">
            {" "}
            <h3> Quadraro </h3>
            <p> +39 06 333 681 </p>
            <div className="d-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>{" "}
              <p className=" ms-1">Via Roma</p>
            </div>
          </div>
        </Col>
        <Col
          xs={10}
          lg={3}
          className="myristo2 overflow-hidden rounded myborder mx-3"
        >
          <div className="bg-dark mydim ps-5 mt-5 rounded shadow">
            {" "}
            <h3> Parioli </h3>
            <p>+39 06 333 667 </p>
            <div className="d-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>{" "}
              <p className=" ms-1">Via America </p>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>{" "}
    </>
  );
};

export default Location;
