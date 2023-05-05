import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactItem = ({ item, id }) => {
  const dispatch = useDispatch();
  const onRemove = (id) => {
    console.log(id);
    dispatch({
      type: "DELETE_CONTACT",
      payload: {
        id,
      },
    });
  };

  return (
    <div>
      <Row className="item-row">
        <Col lg={2} className="item-img-col">
          <img
            width={70}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"
          />
        </Col>
        <Col lg={10} className="item-list">
          <div>
            <div>{item.name}</div>
            <div>{item.phoneNumber}</div>
          </div>
          <button className="delete-btn" onClick={() => onRemove(id)}>
            ❌
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
