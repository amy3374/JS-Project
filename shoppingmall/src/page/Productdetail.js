import React, { useEffect, useState } from "react";
import { Container, Col, Row, Collapse } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const Productdetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState();
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row className="detail-row">
        <Col lg={4} className="detail-img-col">
          <img className="detail-img" src={product?.img} />
        </Col>
        <Col lg={6}>
          <div>
            <h4>{product?.title}</h4>
            <div>{product?.price}원</div>
            <div>{product?.choice === true ? "Conscious choice" : ""}</div>
            <Dropdown className="dropdown">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                <Dropdown.Item href="#/action-3">L</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <button className="detail-btn">추가</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Productdetail;
