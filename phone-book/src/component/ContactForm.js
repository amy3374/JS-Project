import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const dispatch = useDispatch();
  const contactId = useRef(0);

  const addContact = (e) => {
    const id = contactId.current;
    console.log(name, phoneNumber, id);
    e.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber, id },
    });
    contactId.current += 1;
    setName("");
    setPhoneNumber("");
  };

  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화 번호</Form.Label>
          <Form.Control
            type="number"
            placeholder="전화 번호를 입력해주세요"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          저장
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
