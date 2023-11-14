import Mycarrello from "../component/Mycarrello";
import Mycard from "../component/Mycard";
import { Row, Col } from "react-bootstrap/";
import React, { Component } from "react";

import url from "../assets/json.json";
const Mylist = ({ piatto }) => {
  return (
    <>
      <div className=" d-flex text-center justify-content-center d-flex flex-wrap">
        {url.map((piatto) => (
          <Col
            lg={2}
            className="d-flex no-gutters align-items-center justify-content-center m-2 d-flex flex-wrap row col row-col "
          >
            <Mycard lg={2} key={piatto.id} piatto={piatto} />
          </Col>
        ))}
      </div>
    </>
  );
};

export default Mylist;
